# OZILLA FEST 2026 — Software Requirements Specification (SRS) & System Architecture Document

---

## 1. Executive Summary & Product Scope

**OZILLA FEST 2026** is Pakistan's premier luxury music, cultural, and sponsorship festival platform. The platform serves thousands of attendees, VIP guests, brand sponsors, and event administrators. 

### Core Product Goals
1. **Public Discovery & Brand Experience**: High-performance showcase for festival lineup, schedule, sponsor tiers, and luxury partner hotels with zero-auth public access.
2. **Unified Authentication**: Multi-modal authentication supporting Email/Password, OTP verification, and official Google OAuth 2.0 GIS (Google Identity Services) with automatic return-path redirects.
3. **Omni-Channel Ticket Portal**: High-conversion pass booking for General, VIP, and Premium tiers with real-time capacity monitoring and automated pre-filling from customer profiles.
4. **Comprehensive Payment Processing**: Direct support for Pakistani payment rails (JazzCash, Easypaisa, IBAN bank transfer with screenshot proof) and International Credit/Debit cards via Stripe.
5. **Admin Verification & Fraud Prevention**: Admin dashboard for approving/rejecting manual payment receipts, dynamic ticket status management, and tamper-resistant cryptographic QR scanning.

---

## 2. User Roles & Permission Matrix

| Role | Permissions & Capabilities |
| :--- | :--- |
| **Anonymous Guest** | View public landing page, festival schedule, hotel accommodations, facilities, sponsor tiers, and ticket pricing. |
| **Authenticated Customer** | Book festival passes, initiate gateway payments, upload bank receipts, view personal QR passes, cancel pending tickets, update personal profile. |
| **Event Admin** | View administrative analytics, inspect all users & orders, approve or reject submitted payment proofs, review audit logs. |
| **Gate Scanner / Staff** | Scan attendee QR codes at festival entrance gates, perform real-time cryptographic and database validation to grant or deny ingress. |

---

## 3. High-Level System Architecture

```mermaid
graph TD
    subgraph Client ["Frontend (React 18 + Vite + Tailwind + Framer Motion)"]
        UI["Public UI & Hotel Showcase"]
        AUTH_UI["Auth Modal & Google GIS"]
        PORTAL["Ticket Booking & Payment Portal"]
        ADMIN_UI["Admin Review Dashboard"]
        QR_SCAN["QR Code Scanner / Validator"]
    end

    subgraph API_Gateway ["Express.js API Layer (:5000)"]
        RL["Rate Limiters (Global / Auth / Ticket)"]
        AUTH_MID["JWT Auth & Role Guard"]
        CTRL_AUTH["Auth Controller"]
        CTRL_TICKET["Ticket Controller"]
        CTRL_CONTENT["Content Controller"]
        CTRL_ADMIN["Admin Controller"]
        EMAIL_SVC["Nodemailer Transactional Dispatcher"]
    end

    subgraph Data_Layer ["Data & External Services"]
        MONGO[("MongoDB Atlas / Local")]
        FALLBACK[("In-Memory Mock Fallback Engine")]
        GOOGLE_AUTH["Google OAuth2 Tokeninfo API"]
        STRIPE["Stripe Payment Gateway"]
        WALLETS["JazzCash / Easypaisa Gateways"]
        SMTP["SMTP Mail Server (Gmail / Custom)"]
    end

    UI --> RL
    AUTH_UI --> RL
    PORTAL --> RL
    ADMIN_UI --> RL
    QR_SCAN --> RL

    RL --> AUTH_MID
    AUTH_MID --> CTRL_AUTH
    AUTH_MID --> CTRL_TICKET
    AUTH_MID --> CTRL_CONTENT
    AUTH_MID --> CTRL_ADMIN

    CTRL_AUTH --> MONGO
    CTRL_AUTH -.-> FALLBACK
    CTRL_AUTH --> GOOGLE_AUTH
    CTRL_AUTH --> EMAIL_SVC

    CTRL_TICKET --> MONGO
    CTRL_TICKET -.-> FALLBACK
    CTRL_TICKET --> STRIPE
    CTRL_TICKET --> WALLETS
    CTRL_TICKET --> EMAIL_SVC

    CTRL_CONTENT --> MONGO
    CTRL_CONTENT -.-> FALLBACK

    CTRL_ADMIN --> MONGO
    CTRL_ADMIN -.-> FALLBACK
    CTRL_ADMIN --> EMAIL_SVC

    EMAIL_SVC --> SMTP
```

---

## 4. Entity Relationship Diagram (ERD)

```mermaid
erDiagram
    USER ||--o{ TICKET : owns
    USER ||--o{ OTP : requests
    
    USER {
        ObjectId _id PK
        string googleId UK
        string email UK
        string phone
        string firstName
        string lastName
        string name
        string passwordHash
        string role
        boolean emailVerified
        date createdAt
        date updatedAt
    }

    TICKET {
        ObjectId _id PK
        ObjectId userId FK
        string ticketId UK
        string fullName
        string email
        string phone
        string idCardNumber
        string festivalDay
        string ticketType
        number quantity
        string status
        string paymentMethod
        string transactionId
        string paymentProofPath
        string issuingBank
        string payoutAccount
        date paidAt
        date generatedAt
        date verifiedAt
        date createdAt
    }

    OTP {
        ObjectId _id PK
        string email
        string otp
        date createdAt
    }

    EVENT {
        ObjectId _id PK
        string eventId UK
        string name
        string date
        string time
        string location
        string venue
        number capacity
        string status
        boolean isActive
    }

    HOTEL {
        ObjectId _id PK
        string hotelId UK
        string name
        string address
        string contact
        string description
        number rating
        string distance
        array amenities
        boolean isActive
    }

    SPONSOR {
        ObjectId _id PK
        string tier
        string amount
        string companyName
        array benefits
        number displayOrder
        boolean isActive
    }
```

---

## 5. End-to-End Sequence Diagrams

### 5.1 User Authentication & Registration (Email + OTP)

```mermaid
sequenceDiagram
    autonumber
    actor User
    participant App as React Client (:8080)
    participant API as Express Server (:5000)
    participant DB as MongoDB
    participant SMTP as Nodemailer / SMTP

    User->>App: Submits Registration Details
    App->>API: POST /api/auth/send-otp { email }
    API->>DB: Store hashed OTP with 5m TTL
    API->>SMTP: Dispatch OTP Email template
    SMTP-->>User: Delivers 6-digit OTP code
    API-->>App: { success: true, message: "OTP sent" }

    User->>App: Enters OTP code
    App->>API: POST /api/auth/verify-otp { email, otp }
    API->>DB: Validate OTP against TTL collection
    API-->>App: { success: true, message: "Verified" }

    App->>API: POST /api/auth/register { firstName, lastName, email, phone, password }
    API->>DB: Save user document (password hashed with bcrypt 10 rounds)
    API->>SMTP: Send welcome email in background
    API-->>App: { token: JWT, user }
    App->>App: Store JWT in localStorage & redirect to returnTo (/tickets)
```

---

### 5.2 Google OAuth 2.0 GIS Flow

```mermaid
sequenceDiagram
    autonumber
    actor User
    participant App as React Client (:8080)
    participant Google as Google Identity Services
    participant API as Express Server (:5000)
    participant DB as MongoDB

    User->>App: Clicks "Continue with Google"
    App->>Google: Initialize GIS Button / One-Tap popup
    Google-->>App: Return Google ID Token (JWT)
    App->>API: POST /api/auth/google { token, profile }
    API->>Google: Verify token via Google OAuth Library
    Google-->>API: Return verified payload (sub, email, name, avatar)
    API->>DB: Find existing User or create new verified User
    API-->>App: { token: JWT, user }
    App->>App: Set session & redirect user to original path
```

---

### 5.3 Ticket Purchase & Multi-Gateway Processing

```mermaid
sequenceDiagram
    autonumber
    actor User
    participant App as React Client (:8080)
    participant API as Express Server (:5000)
    participant DB as MongoDB
    participant Gateway as JazzCash / Easypaisa / Stripe
    participant Mail as SMTP Dispatcher

    User->>App: Selects Pass Tier (General / VIP / Premium)
    App->>API: POST /api/tickets/request { ticketType, quantity, CNIC, day }
    API->>DB: Check capacity limits & create ticket (Status: 'pending')
    API-->>App: Return Ticket with IBAN & Gateway options

    alt Instant Wallet / Card Payment
        User->>App: Submits JazzCash / Easypaisa / Card details
        App->>API: POST /api/tickets/:id/pay-jazzcash
        API->>Gateway: Process transaction
        Gateway-->>API: Success response
        API->>DB: Update Ticket (Status: 'approved', transactionId, paidAt)
        API->>Mail: Trigger Payment Received + Approved QR Pass Emails
        API-->>App: { success: true, ticket: { status: 'approved', qrPayload } }
        App->>User: Displays Instant Downloadable Luxury QR Pass
    else Manual Bank Transfer
        User->>App: Transfers to IBAN & uploads screenshot receipt
        App->>API: POST /api/tickets/:id/payment-proof (Multipart Form)
        API->>DB: Save proof image & update ticket status to 'payment_submitted'
        API-->>App: { message: "Proof uploaded, pending review" }
    end
```

---

### 5.4 Admin Review & QR Pass Validation

```mermaid
sequenceDiagram
    autonumber
    actor Admin
    participant AdminUI as Admin Dashboard
    participant Scanner as Gate Scanner App
    participant API as Express Server (:5000)
    participant DB as MongoDB
    participant Mail as SMTP Dispatcher

    Admin->>AdminUI: Opens /admin/tickets (Reviews submitted receipts)
    AdminUI->>API: GET /api/tickets/admin/pending
    API-->>AdminUI: Return list of tickets with screenshot previews

    alt Admin Approves Ticket
        Admin->>AdminUI: Clicks "Approve"
        AdminUI->>API: POST /api/tickets/admin/:id/decision { decision: 'approved' }
        API->>DB: Update Ticket (Status: 'approved', generatedAt: now)
        API->>Mail: Send approved QR Pass email to attendee
        API-->>AdminUI: Ticket marked approved
    else Admin Rejects Ticket
        Admin->>AdminUI: Clicks "Reject" with reason
        AdminUI->>API: POST /api/tickets/admin/:id/decision { decision: 'rejected', reason }
        API->>DB: Update Ticket (Status: 'rejected')
        API->>Mail: Send rejection notice email with upload link
        API-->>AdminUI: Ticket marked rejected
    end

    Note over Scanner,API: On Festival Day at Entrance Gate
    Scanner->>Scanner: Scans attendee QR code
    Scanner->>API: POST /api/tickets/verify-qr { qrData }
    API->>DB: Verify signature, attendee identity & ticket status
    API->>DB: Update verifiedAt timestamp (Single-entry protection)
    API-->>Scanner: { message: "Verified", ticket: { status: 'approved', verifiedAt } }
    Scanner->>Scanner: Green Access Granted Screen
```

---

## 6. API Specification & Status Codes

| Endpoint | Method | Auth | Description | Status Codes |
| :--- | :--- | :--- | :--- | :--- |
| `/api/health` | GET | Public | Server & DB health probe | `200` |
| `/api/auth/send-otp` | POST | Public | Generates & dispatches 6-digit email OTP | `200`, `400`, `409`, `429` |
| `/api/auth/verify-otp` | POST | Public | Validates email OTP token | `200`, `400` |
| `/api/auth/register` | POST | Public | Creates verified user account | `201`, `400`, `409` |
| `/api/auth/login` | POST | Public | Authenticates user with JWT return | `200`, `400`, `401`, `429` |
| `/api/auth/google` | POST | Public | Verifies Google ID token and logs user in | `200`, `400`, `401` |
| `/api/auth/me` | GET | Bearer | Returns current authenticated profile | `200`, `401` |
| `/api/auth/profile` | PUT | Bearer | Updates user name & phone number | `200`, `400`, `409` |
| `/api/content/events` | GET | Public | Returns upcoming festival events | `200` |
| `/api/content/hotels` | GET | Public | Returns curated 5-star partner hotels | `200` |
| `/api/content/sponsors` | GET | Public | Returns sponsorship packages & tiers | `200` |
| `/api/tickets/availability`| GET | Public | Live remaining capacity per pass tier | `200` |
| `/api/tickets/request` | POST | Bearer | Reserves pass and creates pending order | `201`, `400`, `409` |
| `/api/tickets/my-tickets` | GET | Bearer | Returns tickets owned by current user | `200`, `401` |
| `/api/tickets/:id/pay-card` | POST | Bearer | Instant card payment via Stripe | `200`, `400`, `404` |
| `/api/tickets/:id/pay-jazzcash` | POST | Bearer | Instant JazzCash wallet deduction | `200`, `400`, `404` |
| `/api/tickets/:id/pay-easypaisa` | POST | Bearer | Instant Easypaisa wallet deduction | `200`, `400`, `404` |
| `/api/tickets/:id/payment-proof` | POST | Bearer | Uploads transfer screenshot (max 5MB) | `200`, `400`, `404` |
| `/api/tickets/verify-qr` | POST | Public | Validates attendee QR cryptographic pass | `200`, `400`, `404` |
| `/api/tickets/admin/pending` | GET | Admin | Lists pending orders awaiting verification | `200`, `403` |
| `/api/tickets/admin/:id/decision` | POST | Admin | Approves or rejects payment submission | `200`, `400`, `403` |

# Ozilla Festival 2026 — Deployment & Testing Guide

---

## 1. Local Development Run Profiles

The project is architected as a decoupled full-stack application (React 18 client on Vite + Node.js/Express backend).

### Prerequisites
- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher
- **MongoDB**: Local MongoDB instance (`mongodb://127.0.0.1:27017`) or free MongoDB Atlas cluster

### Quick Start (Concurrent Boot)

1. **Install Backend Dependencies**:
   ```bash
   cd server
   npm install
   ```

2. **Configure Server Environment**:
   Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

3. **Start Backend Server**:
   ```bash
   npm run dev
   ```
   *Runs on `http://localhost:5000`*.

4. **Install Frontend Dependencies & Run**:
   In a new terminal:
   ```bash
   cd client
   npm install
   npm run dev
   ```
   *Runs on `http://localhost:8080`*.

---

## 2. Production Deployment Guide

### Option A: Frontend on GitHub Pages / Vercel / Netlify
1. **GitHub Pages Build**:
   ```bash
   cd client
   node scripts/build-client.mjs
   ```
   This compiles assets into the root `/docs` folder configured with base path `/ozillafest/`.
2. **Vercel / Netlify Deployment**:
   - Set Build Command: `cd client && npm install && npm run build`
   - Set Output Directory: `client/dist`
   - Set Environment Variables:
     - `VITE_API_BASE_URL`: `https://your-backend-domain.com/api`

### Option B: Backend on Render / Railway / Ubuntu VPS
1. Set Root Directory to `server/`.
2. Set Start Command: `node src/server.js`.
3. Add Environment Variables:
   - `PORT`: `5000` (or dynamic `$PORT`)
   - `MONGODB_URI`: `mongodb+srv://<user>:<password>@cluster.mongodb.net/ozilla?retryWrites=true&w=majority`
   - `JWT_SECRET`: `<generate-strong-64-char-random-string>`
   - `CORS_ORIGIN`: `https://ubair-naeem-28.github.io,https://your-custom-domain.com`
   - `ADMIN_EMAILS`: `ubair1100@gmail.com,admin@ozillafestival.com`
   - `ALLOW_NO_DB_FALLBACK`: `false`

---

## 3. Comprehensive Phase-by-Phase Test Evidence Matrix

| Phase | Module Name | Scope & Test Cases | Status | Verification Evidence |
| :---: | :--- | :--- | :---: | :--- |
| **0** | Baseline Stabilization | Clean server boot on `:5000`, client on `:8080`, dual-mode DB fallback, zero blank screens. | **PASS** | Verified Express startup, CORS policies, and React mount with error boundaries. |
| **1** | Public Route Policy | Public access to all landing sections, lineup, schedule, hotels, sponsors. Auth enforced only at booking checkout. | **PASS** | Verified unauthenticated browsing of all content routes; auth modal activates on Ticket CTA. |
| **2** | Authentication Rebuild | Email/Password, 6-digit OTP verification with TTL indexes, Google OAuth 2.0 GIS, `returnTo` redirect preserve. | **PASS** | Tested OTP dispatch/verification, bcrypt hashing, JWT issuance, and Google GIS callback. |
| **3** | Ticket Portal UX | Profile pre-filling from DB, General/VIP/Premium capacity lock, IBAN details + screenshot proof upload. | **PASS** | Tested capacity check, booking submission, IBAN account details display, and Multer file upload. |
| **4** | Admin Verification | Admin review dashboard, pending orders queue, status transition (`pending` -> `approved` / `rejected`). | **PASS** | Tested `/api/tickets/admin/pending` endpoint and decision status updates. |
| **5** | Ticket & QR Generation | Ticket serial generator (`OZ-2026-XXXXX`), tamper-resistant QR payload, printable luxury ticket card, scanner validation. | **PASS** | Tested dynamic SVG QR code generation, `/verification/:id` route, and payload validation. |
| **6** | Content & Navigation | Dedicated `/hotels` route, streamlined Dock navigation, mobile Ticket Portal CTA, clean page layouts. | **PASS** | Tested hotel concierge view, mobile navbar buttons, and responsive breakpoints. |
| **7** | Data Model Upgrade | Mongoose schemas for `Event`, `Hotel`, `Sponsor`, `Facility` with automatic DB seeding on boot. | **PASS** | Schemas created in `models/`, `seedDatabase.js` initialized, and controller fallback verified. |
| **8** | Notification System | Rich HTML transactional emails: OTP code, welcome email, payment received, ticket approved, ticket rejected. | **PASS** | Verified `email.js` luxury gold templates, integrated in auth and payment controllers. |
| **9** | UI/UX & Mobile Polish | Fixed Framer Motion hover overlaps, 2x2 grid pills, condensed mobile typography, removed duplicate hotel sections. | **PASS** | Tested mobile viewport (375px - 768px), smooth card hover states, and responsive navbar. |
| **10** | Security Hardening | Rate limiting (`express-rate-limit`), Multer MIME & 5MB file guards, production `.env.example` templates. | **PASS** | Verified global, auth, and ticket rate limiters, input sanitization, and sample envs created. |
| **11** | SRS & Final Delivery | Software Requirements Specification, Mermaid sequence diagrams, System Architecture, Deployment & Test packs. | **PASS** | Complete SRS and Deployment guides published in `documentation/`. |

---

## 4. Runbook & Troubleshooting

### Issue: "MongoDB connection is missing database handle"
- **Cause**: Network timeout or IP not whitelisted in MongoDB Atlas.
- **Resolution**: Whitelist your IP in MongoDB Atlas Security -> Network Access, or set `ALLOW_NO_DB_FALLBACK=true` in `server/.env` for local mock testing.

### Issue: "Google Login Button does not render"
- **Cause**: `VITE_GOOGLE_CLIENT_ID` not populated in client `.env`.
- **Resolution**: Ensure your Google Client ID is configured in `client/.env`. A dev fallback mock is automatically provided when client ID is omitted in local dev mode.

### Issue: "OTP Email not received"
- **Cause**: Google App Password not set for Gmail SMTP.
- **Resolution**: Generate an App Password in your Google Account Security settings and put it in `SMTP_PASS` in `server/.env`.

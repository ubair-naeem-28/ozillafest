# Prism Event and Tour - Client

A modern React-based web application for event management and ticketing.

## Features

- User authentication (login, registration, OTP verification)
- Dashboard for user management
- Event browsing and ticket purchasing
- Ticket verification with QR codes
- Brand collaboration and sponsorship pages
- Responsive design with modern UI

## Tech Stack

- React 18
- Vite
- React Router
- Axios
- QR Code generation

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
Copy `.env.example` to `.env` and configure your API base URL.

3. Start development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## Project Structure

```
client/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable components
│   ├── pages/          # Page components
│   ├── layouts/        # Layout components
│   ├── routes/         # Route definitions
│   ├── context/        # React context
│   ├── hooks/          # Custom hooks
│   ├── services/       # API services
│   ├── utils/          # Utility functions
│   ├── constants/      # Constants
│   └── assets/         # Images and styles
```

## Environment Variables

- `VITE_API_BASE_URL`: Backend API base URL
- `VITE_APP_NAME`: Application name
- `VITE_APP_URL`: Application URL

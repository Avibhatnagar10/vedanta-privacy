# Vedanta Systems Privacy

**Official Privacy Policy Website for Vedanta Systems**

A lightweight, publicly accessible privacy-policy website built with Next.js for the Vedanta Systems mobile application, designed for administrators and field staff.

The website provides users, employees, and Google Play reviewers with access to the application's privacy practices, including data collection, processing, storage, permissions, security, and user privacy rights.

## Overview

Vedanta Systems is a Field Service Management (FSM) platform designed to streamline IT service operations, ticket management, staff coordination, and customer support.

This repository contains the standalone public-facing privacy policy website associated with the Vedanta Systems mobile application.

The website is designed to be independently deployed, publicly accessible, and suitable for integration with Google Play Store application requirements.

## Technology Stack

- **Framework:** Next.js
- **Language:** TypeScript
- **Runtime:** Node.js
- **Deployment:** Vercel
- **Protocol:** HTTPS

## Features

- Publicly accessible privacy policy.
- Responsive design for mobile, tablet, and desktop.
- Dedicated privacy policy page.
- Lightweight architecture with no backend dependencies.
- No database or environment configuration required.
- Compatible with Vercel deployment.
- Suitable for linking in Google Play Console.

## Project Structure

```text
vedanta-privacy/
├── public/
├── src/
│   └── app/
│       ├── privacy/
│       │   └── page.tsx
│       ├── layout.tsx
│       └── page.tsx
├── package.json
├── package-lock.json
├── next.config.ts
└── README.md
```

*The structure above represents the expected organization; actual files may vary.*

## Getting Started

### Prerequisites

Ensure the following are installed:

- Node.js (LTS recommended)
- npm
- Git

### Installation

Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/vedanta-privacy.git
```

Navigate to the project directory:

```bash
cd vedanta-privacy
```

Install dependencies:

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open `http://localhost:3000`. Production verification: `npm run build` then `npm start`.

## Deploy to Vercel

1. Push this project to a Git repository.
2. Import the repository in Vercel.
3. Keep the detected Next.js settings and deploy.
4. Configure the production domain and ensure HTTPS is active.
5. Review `PRIVACY_AUDIT.md` and obtain legal and technical approval before linking the URL in Google Play.

No environment variables, backend, or database are required.

## Content Review

The policy avoids claims that cannot be verified from the source code. Confirm the items in `PRIVACY_AUDIT.md` against the released applications and deployed services before publishing.

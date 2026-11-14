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

Open the application:

```text
http://localhost:3000
```

### Production Build

Verify the production build:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

## Deployment

The project is intended to be deployed using [Vercel](https://vercel.com/).

### Deployment Steps

1. Push the repository to GitHub.
2. Log in to Vercel.
3. Import the `vedanta-privacy` repository.
4. Allow Vercel to detect the Next.js framework automatically.
5. Deploy the application.
6. Configure a production domain if required.
7. Verify that HTTPS is enabled and the privacy policy is publicly accessible.

No environment variables, backend services, or database connections are required for the current implementation.

## Google Play Store Compliance

Before submitting the privacy policy URL to Google Play Console:

- Complete all policy placeholders.
- Verify every data collection and processing disclosure against the actual mobile application implementation.
- Review Android permissions and third-party SDK integrations.
- Ensure the policy accurately describes data retention, sharing, security, and deletion practices.
- Verify that the published URL is publicly accessible without authentication.
- Complete the internal privacy audit.
- Obtain the necessary legal and technical approval.

**Important:** Publishing a privacy policy does not automatically guarantee Google Play compliance. The policy must accurately reflect the application's actual behavior and applicable legal requirements.

## Content Review

The repository intentionally uses placeholders for information that requires verification.

Before production publication:

1. Review the `PRIVACY_AUDIT.md` document.
2. Replace all bracketed placeholders with verified information.
3. Confirm the effective date.
4. Validate the policy against the production application.
5. Obtain final approval before submitting the URL to Google Play Console.

Do not publish unverified statements about data collection, storage, security, or third-party sharing.

## Maintenance

The privacy policy should be reviewed whenever there are significant changes to:

- Application functionality.
- Data collection practices.
- Android permissions.
- Third-party integrations.
- Data storage or processing infrastructure.
- Applicable privacy regulations.

Keep the published policy synchronized with the production application.

## License

This repository contains proprietary materials belonging to Vedanta Systems. Unauthorized reproduction, redistribution, or commercial use is not permitted without appropriate authorization.

---

**Vedanta Systems**  
*Technology for Smarter Service Operations.*

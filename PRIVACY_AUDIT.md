# Privacy policy audit report

Audit date: 2026-11-14

## Scope reviewed

This repository contains the Next.js privacy-policy website only. It does not contain the Vedanta Systems Admin or Staff source code, Android manifests, backend services, database schema, deployment configuration, or third-party service configuration. As a result, no mobile or backend implementation claim was independently verified from code.

## Files modified

- `app/privacy/page.tsx` — rewrote the public policy; preserved the route, table of contents, responsive layout, and back-to-top link.
- `app/components.tsx` — replaced placeholder contact text with an actionable privacy email link and removed an unverified company-detail statement.
- `app/page.tsx` — replaced the public placeholder contact block with an actionable email link while preserving the landing-page layout.
- `app/globals.css` — removed styling used only for public placeholders.
- `README.md` — updated publication guidance.

## Policy sections corrected

- Removed public audit banners, bracketed placeholders, and development commentary.
- Clearly separated the Admin and Staff application functions.
- Added plain-language disclosures for account, customer, employee, ticket, attendance, attachment, notification, and location information described in the product brief.
- Added an explicit statement that background-location behavior and device/diagnostic collection require confirmation for the released application.
- Added a `mailto:` privacy contact action and effective/last-updated dates.
- Described organization-admin routing for privacy and deletion requests without promising automatic deletion or fixed retention periods.

## Claims verified from available implementation

The following website-level items were verified:

- Routes `/` and `/privacy` exist.
- The policy table of contents links to each policy section and the back-to-top link targets the page root.
- Privacy contact actions use `mailto:vedantasystems.support@gmail.com`.
- The public policy identifies the two application package names: `com.vedantasystems.admin` and `com.vedantasystems.staff`.

No claims about mobile data collection, Android permissions, backend controls, vendors, retention, deletion, or security controls were verified from application implementation because that implementation was not present.

## Company confirmation required

- Confirm that Vedanta Systems is the correct responsible publisher identity and that `vedantasystems.support@gmail.com` is a monitored privacy contact.
- Confirm whether the Udaipur, Rajasthan, India location is appropriate to publish and provide a legal business address if one is required.
- Confirm the effective date before publication.
- Confirm all actual data categories, collection triggers, Android permissions, and whether Staff location can be collected in the background.
- Confirm authentication, storage, access-control, security, retention, deletion, backup, and international-transfer practices.
- Identify all hosting, file storage, push notification, analytics, crash reporting, maps, and other third-party providers.

## Remaining Google Play compliance gaps

- The Google Play Data safety form cannot be completed accurately without inspecting the released Android builds, manifests, SDKs, and backend data flows.
- If either application supports account creation, Google Play may require an in-app and web-based account-deletion path; confirm the applicable policy and implement or document the verified path.
- If location, photos/files, notifications, or any sensitive data are collected, the published policy and Data safety answers must describe the actual purpose, sharing, optionality, and permission behavior.
- Before release, test the final public HTTPS URL without authentication and ensure it remains available from each Play Store listing.

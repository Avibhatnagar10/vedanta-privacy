# Privacy implementation audit

## Audit status

**Incomplete — source code unavailable.** This workspace was empty when reviewed on 2026-11-14. No Admin application, Staff application, backend, database schema, Android manifests, package manifests, or deployment configuration was available. The policy is therefore deliberately conservative and contains publication-blocking placeholders.

## Product-description inventory (not implementation-verified)

| Category | Indicated by brief | Collection mechanism / status |
| --- | --- | --- |
| Account and identity | names, emails, phone numbers, roles, organization membership, credentials/tokens | Authentication and user-management behavior not inspected |
| Customer and employee data | names, company/contact data, service addresses/history | Forms, APIs, and database storage not inspected |
| Location | technician GPS, staff updates, service-visit location | Timing, Android permissions, background behavior, and controls not inspected |
| Operations | tickets, assignments, statuses, attendance, check-ins/outs, feedback, notifications | API/database implementation not inspected |
| Files | photos, documents, attachments | Upload provider, scanning, access, and deletion not inspected |
| Technical | potential device IDs, push tokens, diagnostics, usage/network data | No SDK/dependency/manifest review possible |

## Third-party services

None verified. The brief mentions NestJS/Node.js, PostgreSQL, Prisma, Redis, JWT, and real-time/push capabilities; these are technologies or capabilities, not verified external processors. Identify actual hosting, storage, push, analytics, crash-reporting, mapping, and authentication providers before publication.

## Permissions

No Android `AndroidManifest.xml` files were available. Verify every runtime and declared permission, especially location (coarse/fine/background), camera, media/files, notifications, network, and biometric permissions.

## Retention and deletion

No retention rules, backup practices, account-deletion endpoint, deletion workflow, or data-purge jobs were available. Establish and document retention criteria, requester verification, deletion scope, timelines, exceptions, and backup handling.

## Required confirmation before publishing

- Legal company name and, where relevant, registered address.
- A monitored privacy contact email and data-protection contact if applicable.
- Effective date and policy owner.
- Actual collection, transmission, security, access-control, retention, and deletion behaviors.
- Location collection triggers, permission rationale, and user controls.
- All third-party processors and international data-transfer locations/safeguards.
- Verified Google Play Data safety disclosures aligned with the audited behavior.

## Recommended source review checklist

Review both mobile app manifests and dependency manifests; backend Prisma schema and migrations; authentication, location, upload, notification, logging, analytics, and deletion modules; environment/deployment configuration; storage buckets; job queues; privacy settings; and vendor agreements. Record source paths and evidence for every final policy claim.

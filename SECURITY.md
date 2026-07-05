# Security Policy

## Overview

Sofa2 implements enterprise-grade security measures to protect user data and maintain system integrity.

## Authentication & Authorization

### JWT (JSON Web Tokens)
- Tokens expire after 7 days by default
- Tokens are securely stored in localStorage
- Automatic token refresh on API requests
- Auto-logout on 401 responses

### Password Security
- Minimum 6 characters (enforced on frontend & backend)
- Bcrypt hashing with 10 salt rounds
- Passwords never sent in plain text
- Password reset via email (to be implemented)

### Role-Based Access Control (RBAC)
- Two roles: CUSTOMER, ADMIN
- Admin endpoints protected with middleware
- Role verification on every protected route

## Data Protection

### Input Validation
- Email validation with RFC standards
- Password strength requirements
- SQL injection prevention via Prisma ORM
- XSS protection via React sanitization
- Request body size limits (10MB max)

### Database Security
- PostgreSQL with encrypted connections
- Prisma ORM prevents SQL injection
- Row-level security where applicable
- Database backups and encryption at rest

## Network Security

### CORS (Cross-Origin Resource Sharing)
- Frontend origin only allowed
- Specific HTTP methods whitelisted
- Credentials allowed only for same-origin

### Rate Limiting
- General API: 100 requests per 15 minutes per IP
- Authentication: 5 attempts per 15 minutes per IP
- Prevents brute force and DDoS attacks

### HTTPS
- All production connections encrypted
- SSL/TLS certificates required
- HSTS headers enabled

## Headers Security

### Helmet.js
- X-Content-Type-Options: nosniff
- X-Frame-Options: SAMEORIGIN
- X-XSS-Protection: 1; mode=block
- Strict-Transport-Security enabled
- CSP (Content Security Policy) configured

## Error Handling

- Generic error messages to users
- Detailed logs for debugging (dev only)
- No sensitive data in error responses
- 500 errors don't expose stack traces in production

## Compliance

### Data Protection
- GDPR compliance considerations
- User consent for data collection
- Data export functionality (to be implemented)
- Right to be forgotten (to be implemented)

### Payment Security
- Stripe PCI DSS Level 1 compliance
- No credit card data stored locally
- Tokenized payment processing

## Vulnerability Scanning

### CI/CD Security
- npm audit on every build
- Trivy vulnerability scanning
- Snyk security checks
- OWASP dependency checking

## Best Practices

### Environment Variables
- All secrets in .env (never in git)
- Different secrets for dev/prod
- Secrets rotation recommended
- Access control for env files

### Code Security
- Regular dependency updates
- Security patches applied immediately
- Code reviews before merge
- TypeScript for type safety

### Monitoring & Logging
- Error logging and tracking
- Failed login attempts logged
- API request logging
- Performance monitoring (to be implemented)

## Incident Response

In case of security breach:
1. Immediately revoke compromised tokens
2. Force password reset for affected users
3. Investigate and patch vulnerability
4. Notify users of incident
5. Document and review

## Future Enhancements

- Two-factor authentication (2FA)
- OAuth 2.0 integration (Google, GitHub)
- Advanced fraud detection
- DDoS protection service
- Web Application Firewall (WAF)
- Bug bounty program

## Contact

Security concerns should be reported to: security@sofa2.com (to be configured)

---

**Last Updated**: July 2026
**Version**: 1.0.0

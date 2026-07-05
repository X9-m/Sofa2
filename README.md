# Sofa2 - Premium Furniture E-Commerce Platform

A full-stack e-commerce application for selling sofas and furniture with comprehensive security features, built with Next.js, Node.js/Express, and PostgreSQL.

## Features

- 🛋️ Product Catalog with Advanced Filtering
- 🛒 Shopping Cart Management
- 👤 User Authentication & Authorization
- 💳 Payment Integration (Stripe)
- 📦 Order Management
- 👨‍💼 Admin Dashboard
- 🔒 Enterprise-Grade Security
- 📊 Analytics & Reporting
- 🚀 CI/CD Pipeline

## Tech Stack

- **Frontend**: Next.js 14+ with React
- **Backend**: Node.js/Express
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: JWT (JSON Web Tokens)
- **Payment**: Stripe API
- **Security**: Helmet.js, bcrypt, CORS, Rate Limiting

## Project Structure

```
Sofa2/
├── frontend/           # Next.js application
├── backend/            # Node.js/Express API
├── .github/workflows/  # CI/CD pipelines
└── docs/              # Documentation
```

## Getting Started

See individual README files in `frontend/` and `backend/` directories for setup instructions.

## Security

This project implements enterprise-grade security:
- JWT-based authentication
- Password hashing with bcrypt
- SQL injection prevention via Prisma ORM
- CORS configuration
- Rate limiting on API endpoints
- Input validation and sanitization
- Secure HTTP headers
- Environment variable protection

## License

MIT

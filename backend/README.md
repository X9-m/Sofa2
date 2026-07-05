# Backend README

## Setup

### Prerequisites
- Node.js 18+
- PostgreSQL 14+

### Installation

```bash
cd backend
npm install
```

### Environment Variables

Create a `.env` file based on `.env.example`:

```bash
cp .env.example .env
```

Update with your actual credentials.

### Database Setup

```bash
# Run migrations
npm run migrate

# Generate Prisma Client
npx prisma generate
```

### Development

```bash
npm run dev
```

Server will run on `http://localhost:3001`

### Production Build

```bash
npm run build
npm start
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get single product

### Orders
- `POST /api/orders` - Create order (authenticated)
- `GET /api/orders` - Get user orders (authenticated)

### Users
- `GET /api/users/profile` - Get user profile (authenticated)
- `PUT /api/users/profile` - Update profile (authenticated)

### Admin
- `POST /api/admin/products` - Create product (admin only)
- `PUT /api/admin/products/:id` - Update product (admin only)
- `DELETE /api/admin/products/:id` - Delete product (admin only)
- `GET /api/admin/stats` - Get dashboard stats (admin only)

## Security Features

✅ JWT Authentication
✅ Password Hashing (bcrypt)
✅ CORS Configuration
✅ Rate Limiting
✅ Input Validation
✅ SQL Injection Prevention (Prisma ORM)
✅ Helmet.js Security Headers
✅ Error Handling

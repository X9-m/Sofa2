# Setup Guide

## Prerequisites

- Node.js 18+ ([Download](https://nodejs.org/))
- PostgreSQL 14+ ([Download](https://www.postgresql.org/))
- Git ([Download](https://git-scm.com/))

## Backend Setup

### 1. Navigate to backend directory

```bash
cd backend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create environment file

```bash
cp .env.example .env
```

### 4. Configure environment variables

Edit `.env` and set:

```
DATABASE_URL=postgresql://user:password@localhost:5432/sofa2
JWT_SECRET=your-secret-key-min-32-chars
JWT_EXPIRE=7d
STRIPE_SECRET_KEY=sk_test_xxx
STRIPE_PUBLISHABLE_KEY=pk_test_xxx
NODE_ENV=development
PORT=3001
FRONTEND_URL=http://localhost:3000
```

### 5. Setup database

```bash
# Create database
creatodb sofa2

# Run migrations
npm run migrate
```

### 6. Start development server

```bash
npm run dev
```

Server runs on `http://localhost:3001`

## Frontend Setup

### 1. Navigate to frontend directory

```bash
cd frontend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create environment file

```bash
cp .env.example .env.local
```

### 4. Configure environment variables

Edit `.env.local` and set:

```
NEXT_PUBLIC_API_URL=http://localhost:3001/api
NEXT_PUBLIC_STRIPE_KEY=pk_test_xxx
```

### 5. Start development server

```bash
npm run dev
```

App runs on `http://localhost:3000`

## Database Setup Details

### PostgreSQL Installation

#### macOS (Homebrew)

```bash
brew install postgresql
brew services start postgresql
```

#### Linux (Ubuntu/Debian)

```bash
sudo apt-get install postgresql postgresql-contrib
sudo systemctl start postgresql
```

#### Windows

Download from [postgresql.org](https://www.postgresql.org/download/windows/)

### Create Database

```bash
# Connect to PostgreSQL
psql -U postgres

# Create database
CREATE DATABASE sofa2;

# Exit
\q
```

## Stripe Integration

1. Create account at [stripe.com](https://stripe.com)
2. Get test keys from Dashboard
3. Add to `.env` files (backend and frontend)

## Verification

### Backend Health Check

```bash
curl http://localhost:3001/health
```

Expected response:

```json
{"status":"OK","timestamp":"2026-07-05T..."}
```

### Frontend

Visit `http://localhost:3000` - should see Sofa2 homepage

## Troubleshooting

### Database Connection Error

```bash
# Check PostgreSQL is running
psql -U postgres -d sofa2 -c "SELECT 1"

# If error, restart PostgreSQL
sudo systemctl restart postgresql  # Linux
brew services restart postgresql   # macOS
```

### Port Already in Use

```bash
# Find process using port
lsof -i :3001   # Backend
lsof -i :3000   # Frontend

# Kill process
kill -9 <PID>
```

### Module Not Found

```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Build Errors

```bash
# Clear build cache
rm -rf dist .next

# Rebuild
npm run build
```

## Development Commands

### Backend

```bash
npm run dev          # Start dev server
npm run build        # Build for production
npm start            # Run production build
npm run lint         # Run linter
npm test             # Run tests
npm run migrate      # Create migration
```

### Frontend

```bash
npm run dev          # Start dev server
npm run build        # Build for production
npm start            # Run production build
npm run lint         # Run linter
npm test             # Run tests
```

## Production Deployment

### Environment Setup

1. Create production `.env` file
2. Set `NODE_ENV=production`
3. Use strong JWT_SECRET (min 32 chars)
4. Enable HTTPS
5. Configure CDN for static assets

### Backend Deployment

```bash
npm run build
npm start
```

### Frontend Deployment

Options:
- Vercel (recommended for Next.js)
- Heroku
- AWS Amplify
- Docker

## Docker Setup (Optional)

### Backend Dockerfile

```dockerfile
FROM node:18
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3001
CMD ["npm", "start"]
```

### Docker Compose

```yaml
version: '3.8'
services:
  postgres:
    image: postgres:15
    environment:
      POSTGRES_DB: sofa2
      POSTGRES_PASSWORD: password
    ports:
      - "5432:5432"
  
  backend:
    build: ./backend
    ports:
      - "3001:3001"
    depends_on:
      - postgres
```

Run with: `docker-compose up`

## Next Steps

1. ✅ Install dependencies
2. ✅ Configure databases
3. ✅ Set environment variables
4. ✅ Run migrations
5. Start building!

---

**Need help?** Check the individual README files in `/backend` and `/frontend` directories.

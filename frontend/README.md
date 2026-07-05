# Frontend README

## Setup

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
cd frontend
npm install
```

### Environment Variables

Create a `.env.local` file based on `.env.example`:

```bash
cp .env.example .env.local
```

Update with your API URL and Stripe key.

### Development

```bash
npm run dev
```

App will run on `http://localhost:3000`

### Build

```bash
npm run build
npm start
```

## Features

- 🏪 Product Catalog
- 🛒 Shopping Cart
- 💳 Stripe Payment Integration
- 👤 User Authentication
- 📱 Responsive Design
- 🚀 Server-Side Rendering (Next.js)

## Pages

- `/` - Home page
- `/products` - Product listing
- `/products/:id` - Product detail
- `/cart` - Shopping cart
- `/checkout` - Checkout page
- `/account` - User account
- `/admin` - Admin dashboard (admin only)

## Tech Stack

- Next.js 14
- React 18
- Tailwind CSS
- Stripe.js
- Axios
- Zustand (State Management)

## Styling

This project uses Tailwind CSS for styling. Update `tailwind.config.js` for custom configuration.

import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY || '');

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Elements stripe={stripePromise}>
      <Component {...pageProps} />
    </Elements>
  );
}

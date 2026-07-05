import Head from 'next/head';
import Link from 'next/link';

export default function Checkout() {
  return (
    <>
      <Head>
        <title>Checkout - Sofa2</title>
      </Head>
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8">Checkout</h1>

          <div className="bg-white rounded-lg shadow p-8">
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Shipping Information</h2>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-600"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-600"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-600"
                />
                <input
                  type="text"
                  placeholder="Address"
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-600"
                />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <input
                    type="text"
                    placeholder="City"
                    className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-600"
                  />
                  <input
                    type="text"
                    placeholder="State"
                    className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-600"
                  />
                  <input
                    type="text"
                    placeholder="ZIP Code"
                    className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-600"
                  />
                </div>
              </form>
            </div>

            <div className="border-t pt-8">
              <h2 className="text-2xl font-semibold mb-4">Payment Method</h2>
              <div className="bg-gray-100 p-4 rounded text-center text-gray-600">
                Stripe payment integration coming soon
              </div>
            </div>

            <div className="mt-8 flex gap-4">
              <Link href="/cart" className="flex-1 border border-blue-600 text-blue-600 py-3 rounded text-center hover:bg-blue-50">
                Back to Cart
              </Link>
              <button className="flex-1 bg-blue-600 text-white py-3 rounded hover:bg-blue-700">
                Complete Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

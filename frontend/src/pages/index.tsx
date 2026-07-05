import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Sofa2 - Premium Furniture Store</title>
        <meta name="description" content="Shop premium sofas and furniture" />
      </Head>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
        {/* Navigation */}
        <nav className="bg-white shadow">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="text-2xl font-bold text-blue-600">Sofa2</div>
              <div className="flex gap-4">
                <Link href="/products" className="text-gray-700 hover:text-blue-600">
                  Shop
                </Link>
                <Link href="/cart" className="text-gray-700 hover:text-blue-600">
                  Cart
                </Link>
                <Link href="/account" className="text-gray-700 hover:text-blue-600">
                  Account
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Premium Sofas & Furniture
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Discover our collection of premium, comfortable, and stylish furniture
            </p>
            <Link href="/products" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700">
              Shop Now
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}

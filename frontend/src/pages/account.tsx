import Head from 'next/head';
import Link from 'next/link';
import { useAuth } from '@/stores/authStore';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Account() {
  const auth = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!auth.isAuthenticated()) {
      router.push('/login');
    }
  }, [auth, router]);

  if (!auth.user) return null;

  return (
    <>
      <Head>
        <title>Account - Sofa2</title>
      </Head>
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Sidebar */}
            <div className="md:col-span-1">
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-xl font-semibold mb-4">Account Menu</h3>
                <nav className="space-y-2">
                  <Link href="#profile" className="block text-blue-600 hover:underline">
                    Profile
                  </Link>
                  <Link href="#orders" className="block text-gray-600 hover:text-blue-600">
                    Orders
                  </Link>
                  <Link href="#settings" className="block text-gray-600 hover:text-blue-600">
                    Settings
                  </Link>
                  {auth.user?.role === 'ADMIN' && (
                    <Link href="/admin" className="block text-gray-600 hover:text-blue-600">
                      Admin Dashboard
                    </Link>
                  )}
                  <button
                    onClick={() => {
                      auth.logout();
                      router.push('/');
                    }}
                    className="w-full text-left text-red-600 hover:text-red-700 mt-4 pt-4 border-t"
                  >
                    Logout
                  </button>
                </nav>
              </div>
            </div>

            {/* Main Content */}
            <div className="md:col-span-2">
              {/* Profile */}
              <div id="profile" className="bg-white rounded-lg shadow p-6 mb-6">
                <h2 className="text-2xl font-bold mb-4">Profile</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-600 text-sm">Name</label>
                    <p className="text-lg font-semibold">{auth.user?.name}</p>
                  </div>
                  <div>
                    <label className="block text-gray-600 text-sm">Email</label>
                    <p className="text-lg font-semibold">{auth.user?.email}</p>
                  </div>
                  <div>
                    <label className="block text-gray-600 text-sm">Role</label>
                    <p className="text-lg font-semibold capitalize">{auth.user?.role.toLowerCase()}</p>
                  </div>
                  <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
                    Edit Profile
                  </button>
                </div>
              </div>

              {/* Orders */}
              <div id="orders" className="bg-white rounded-lg shadow p-6">
                <h2 className="text-2xl font-bold mb-4">Recent Orders</h2>
                <div className="text-center py-8">
                  <p className="text-gray-600">No orders yet</p>
                  <Link href="/products" className="inline-block mt-4 bg-blue-600 text-white px-6 py-2 rounded">
                    Start Shopping
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

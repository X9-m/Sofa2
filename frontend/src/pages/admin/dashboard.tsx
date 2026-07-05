import Head from 'next/head';
import { useAuth } from '@/stores/authStore';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { adminAPI } from '@/lib/api-client';

interface Stats {
  totalOrders: number;
  totalRevenue: number;
  totalProducts: number;
  totalUsers: number;
}

export default function AdminDashboard() {
  const auth = useAuth();
  const router = useRouter();
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!auth.isAuthenticated() || auth.user?.role !== 'ADMIN') {
      router.push('/');
      return;
    }

    const fetchStats = async () => {
      try {
        const response = await adminAPI.getStats();
        setStats(response.data);
      } catch (error) {
        console.error('Failed to fetch stats:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, [auth, router]);

  if (!auth.isAuthenticated() || auth.user?.role !== 'ADMIN') {
    return null;
  }

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <>
      <Head>
        <title>Admin Dashboard - Sofa2</title>
      </Head>
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold mb-8">Admin Dashboard</h1>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-gray-600 text-sm font-semibold">Total Orders</h3>
              <p className="text-3xl font-bold mt-2">{stats?.totalOrders || 0}</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-gray-600 text-sm font-semibold">Total Revenue</h3>
              <p className="text-3xl font-bold mt-2">${stats?.totalRevenue?.toFixed(2) || 0}</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-gray-600 text-sm font-semibold">Total Products</h3>
              <p className="text-3xl font-bold mt-2">{stats?.totalProducts || 0}</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-gray-600 text-sm font-semibold">Total Users</h3>
              <p className="text-3xl font-bold mt-2">{stats?.totalUsers || 0}</p>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-bold mb-4">Product Management</h3>
              <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
                Manage Products
              </button>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-bold mb-4">Order Management</h3>
              <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
                View Orders
              </button>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-bold mb-4">User Management</h3>
              <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
                Manage Users
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

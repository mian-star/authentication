'use client';
import { signOut } from 'next-auth/react';
import { useSession } from 'next-auth/react';

const Home = () => {
  const { data: session } = useSession();

  return (
    <div className="min-h-screen flex flex-col items-center justify-between px-4 py-6 md:px-12 bg-gray-50 text-gray-800">
      {/* Header */}
      <header className="text-center mb-6">
        <h1 className="text-2xl md:text-4xl font-bold mb-2">
          {session?.user?.name} Welcome to Home Page
        </h1>
        <p className="text-sm md:text-base text-gray-600">Email: {session?.user?.email}</p>
      </header>

      {/* Features Section */}
      <section className="grid gap-6 md:grid-cols-3 w-full max-w-5xl mb-8">
        <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition">
          <h2 className="text-lg font-semibold mb-2">Feature 1</h2>
          <p className="text-sm text-gray-600">Connect with MongoDB Atlas</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition">
          <h2 className="text-lg font-semibold mb-2">Feature 2</h2>
          <p className="text-sm text-gray-600">Secure routing concept (protecting routes)</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition">
          <h2 className="text-lg font-semibold mb-2">Feature 3</h2>
          <p className="text-sm text-gray-600">Complete Authentication with NextAuth</p>
        </div>
      </section>

      {/* Logout Button */}
      <button
        onClick={() => signOut()}
        className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 transition"
      >
        Log Out
      </button>

      {/* Footer */}
      <footer className="mt-10 text-sm text-gray-500">
        <p>&copy; 2024 My Next.js App</p>
      </footer>
    </div>
  );
};

export default Home;

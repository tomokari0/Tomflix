'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Play, Info } from 'lucide-react';
import { useAuth } from '@/components/auth/AuthProvider';

export default function LandingPage() {
  const router = useRouter();
  const { user, loading } = useAuth();

  useEffect(() => {
    if (!loading && user) {
      router.push('/profiles');
    }
  }, [user, loading, router]);

  if (loading) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-red-600 rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-red-600 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-3 h-3 bg-red-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="text-red-600 text-2xl font-bold">
              TOMFLIX
            </div>
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                className="text-white hover:text-gray-300"
                onClick={() => router.push('/login')}
              >
                Sign In
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Netflix Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Unlimited movies, TV shows, and more
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Watch anywhere. Cancel anytime.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg font-semibold"
              onClick={() => router.push('/register')}
            >
              Get Started
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-black px-8 py-3 text-lg"
              onClick={() => router.push('/login')}
            >
              Sign In
            </Button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Play className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Watch Anywhere</h3>
              <p className="text-gray-400">
                Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Info className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">No Ads</h3>
              <p className="text-gray-400">
                Watch your shows without interruptions. No ads, no commitments.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Play className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Cancel Anytime</h3>
              <p className="text-gray-400">
                No commitments. Cancel your subscription at any time.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-red-600 text-xl font-bold mb-4 md:mb-0">
              TOMFLIX
            </div>
            <div className="flex space-x-6 text-gray-400">
              <a href="#" className="hover:text-white">Privacy</a>
              <a href="#" className="hover:text-white">Terms</a>
              <a href="#" className="hover:text-white">Help</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
'use client';

import { RegisterForm } from '@/components/auth/RegisterForm';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';

export default function RegisterPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-black flex flex-col">
      {/* Navigation */}
      <nav className="p-4">
        <div className="flex items-center justify-between">
          <Button
            variant="ghost"
            className="text-white hover:text-gray-300"
            onClick={() => router.push('/')}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
          <div className="text-red-600 text-2xl font-bold">
            TOMFLIX
          </div>
        </div>
      </nav>

      {/* Background */}
      <div className="flex-1 relative">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Netflix Background"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Register Form */}
        <div className="relative z-10 flex items-center justify-center min-h-full p-4">
          <div className="w-full max-w-md">
            <RegisterForm />
            <div className="mt-6 text-center">
              <p className="text-gray-400">
                Already have an account?{' '}
                <button
                  onClick={() => router.push('/login')}
                  className="text-white hover:underline"
                >
                  Sign in
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
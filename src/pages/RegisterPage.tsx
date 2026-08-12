import React, { useState } from 'react';
import TextField from '../components/Ui/TextField';
import Button from '../components/Ui/Button';

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="flex items-center justify-center flex-col min-h-screen w-full bg-neutral-50 dark:bg-[#0a0a0a] px-4 sm:px-6 py-10">
      <div className="w-full max-w-4xl bg-white dark:bg-[#0a0a0a] rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-sm overflow-hidden grid grid-cols-1 md:grid-cols-2">

        <div className="flex flex-col p-6 sm:p-8 md:p-10">
          <div className="text-center space-y-1.5 mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white">
              Create your account
            </h1>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              Enter your email below to create your account
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1.5 text-neutral-700 dark:text-neutral-300">
                Name
              </label>
              <TextField
                name="name"
                type="text"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1.5 text-neutral-700 dark:text-neutral-300">
                Email
              </label>
              <TextField
                name="email"
                type="email"
                placeholder="m@example.com"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1.5 text-neutral-700 dark:text-neutral-300">
                Password
              </label>
              <TextField
                name="password"
                type="password"
                placeholder=""
                value={formData.password}
                onChange={handleChange}
              />
            </div>

            <Button
              type="submit"
              className="w-full mt-4 bg-neutral-900 hover:bg-neutral-800 text-white dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-200 py-2.5 rounded-lg font-medium transition-colors"
            >
              Create Account
            </Button>
          </form>

          <div className="text-center mt-6 text-sm text-neutral-500 dark:text-neutral-400">
            Already have an account?
            <a
              href="/login"
              className="underline font-medium text-neutral-900 dark:text-neutral-100 hover:opacity-80 transition-opacity"
            >
              Sign in
            </a>
          </div>
        </div>

        

        <div className="hidden md:flex flex-col items-center justify-center p-8 bg-neutral-100/60 dark:bg-[#1a1a1e] border-l border-neutral-200 dark:border-neutral-800/80" />

      </div>






      <p className="mt-6 text-xs text-center text-neutral-500 dark:text-neutral-400 max-w-md px-4">
        By clicking continue, you agree to our
        <a href="#" className="underline hover:text-neutral-800 dark:hover:text-neutral-200">
          Terms of Service
        </a>
        and
        <a href="#" className="underline hover:text-neutral-800 dark:hover:text-neutral-200">
          Privacy Policy
        </a>
      </p>
    </div>
  );
}

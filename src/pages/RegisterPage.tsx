import { useState, type ChangeEvent } from "react";
import TextField from "../components/Ui/TextField";
import Button from "../components/Ui/Button";
import { useRegisterMutation } from "../hooks/useRegisterMutation";
import { Link, useNavigate } from "react-router";
import toast from "react-hot-toast";
import axios from "axios";
import { UserPlus } from "lucide-react";

export default function RegisterPage() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {
    mutate: registerMutation,
    isPending,
    isError,
  } = useRegisterMutation();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    registerMutation(
      { name, email, password },
      {
        onSuccess: () => {
          toast.success("Account created successfully!");
          navigate("/");
        },
        onError: (error) => {
          if (axios.isAxiosError(error)) {
            toast.error(error.response?.data?.error ?? "Registration failed");
          } else {
            toast.error("Something went wrong");
          }
        },
      }
    );
  };

  return (
    <div className="min-h-svh flex items-center justify-center bg-secondary-50 dark:bg-[#0a0a0a] px-4 sm:px-6 lg:px-8 py-8 dark:text-white">
      <div className="flex flex-col items-center w-full max-w-4xl gap-6">
        
        <div className="w-full grid grid-cols-1 md:grid-cols-2 rounded-xl border border-[#E5E5E5] dark:border-[#2e2e2e] shadow-sm overflow-hidden bg-secondary-0 dark:bg-[#262626]">
          
          <div className="p-6 md:p-8 bg-white dark:bg-[#0a0a0a] flex flex-col justify-center">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="flex flex-col gap-2 items-center text-center">
                <h1 className="text-2xl font-bold text-secondary-900 dark:text-white">
                  Create your account
                </h1>
                <p className="text-[#737373] dark:text-[#A3A3A3]">
                  Enter your details below to create your account
                </p>
              </div>

              {isError && (
                <p className="text-sm text-red-500 text-center font-medium">
                  Registration failed. Please try again.
                </p>
              )}

              <div className="flex flex-col gap-6">
                <TextField
                  label="Name"
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  dir="ltr"
                  value={name}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setName(e.target.value)
                  }
                  className="h-9 dark:bg-[#222222] border shadow-sm border-[#E5E5E5] dark:border-[#424141] font-medium mt-2 focus-visible:outline-none focus-visible:border-neutral-500 dark:focus-visible:border-neutral-600 focus-visible:ring-[3px] focus-visible:ring-neutral-500/20 dark:focus-visible:ring-neutral-600/20"
                />
                <TextField
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="m@example.com"
                  dir="ltr"
                  value={email}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setEmail(e.target.value)
                  }
                  className="h-9 dark:bg-[#222222] border shadow-sm border-[#E5E5E5] dark:border-[#424141] font-medium mt-2 focus-visible:outline-none focus-visible:border-neutral-500 dark:focus-visible:border-neutral-600 focus-visible:ring-[3px] focus-visible:ring-neutral-500/20 dark:focus-visible:ring-neutral-600/20"
                />
                <TextField
                  label="Password"
                  name="password"
                  type="password"
                  placeholder="*********"
                  dir="ltr"
                  value={password}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setPassword(e.target.value)
                  }
                  className="h-9 dark:bg-[#222222] border shadow-sm border-[#E5E5E5] dark:border-[#424141] font-medium mt-2 focus-visible:outline-none focus-visible:border-neutral-500 dark:focus-visible:border-neutral-600 focus-visible:ring-[3px] focus-visible:ring-neutral-500/20 dark:focus-visible:ring-neutral-600/20"
                />
              </div>

              <Button
                type="submit"
                disabled={isPending}
                className={`border p-2 rounded-lg bg-black text-white mt-3 md:mb-4 w-full dark:bg-white dark:text-black hover:bg-gray-900 dark:hover:bg-gray-200 disabled:bg-gray-800 disabled:cursor-not-allowed disabled:text-black`}
              >
                {isPending ? <p className="spinner-mini"></p> : "Create Account"}
              </Button>

              <p className="text-center text-[#737373] dark:text-[#A3A3A3] text-sm">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="underline underline-offset-4 hover:text-secondary-900 dark:hover:text-white transition-colors"
                >
                  Sign in
                </Link>
              </p>
            </form>
          </div>

          <div className="hidden md:flex flex-col items-center justify-center p-12 bg-linear-to-br from-blue-600/20 to-purple-600/20 border-l border-gray-100 dark:border-gray-800">
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-linear-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg">
                <UserPlus className="w-16 h-16 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-2">
                Get Started Today
              </h2>
              <p className="text-secondary-500 dark:text-gray-400">
                Join our community and start your journey
              </p>
            </div>
          </div>

        </div>

        <p className="text-center text-sm text-[#737373] dark:text-[#A3A3A3] px-6 leading-relaxed">
          By clicking continue, you agree to our{" "}
          <a
            href="#"
            className="underline underline-offset-4 hover:text-secondary-900 dark:hover:text-white transition-colors"
          >
            Terms of Service
          </a>{" "}
          and{" "}
          <a
            href="#"
            className="underline underline-offset-4 hover:text-secondary-900 dark:hover:text-white transition-colors"
          >
            Privacy Policy
          </a>
          .
        </p>

      </div>
    </div>
  );
}
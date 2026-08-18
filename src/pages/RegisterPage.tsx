import { useState, type ChangeEvent } from "react";
import TextField from "../components/Ui/TextField";
import Button from "../components/Ui/Button";
import { useRegisterMutation } from '../hooks/useRegisterMutation';
import { Link, useNavigate } from "react-router";
import toast from "react-hot-toast";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { mutate : registerMutation , isPending, isError } = useRegisterMutation();
  const navigate = useNavigate();


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    registerMutation ({ name, email, password}, {
      onSuccess: () => {
        toast.success ("Account created successfully!");
        navigate("/login");
      },
      onError: (error) =>  {
        console.error("Registration failed:", error);
        toast.error("Please try again ...");
      },
    });
  };

  return (
    <div className="flex items-center justify-center flex-col min-h-screen w-full bg-neutral-50 dark:text-white dark:bg-[#0a0a0a] px-4 sm:px-6 py-10">
      <div className="w-full max-w-4xl bg-white dark:bg-[#0a0a0a] rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-sm overflow-hidden grid grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col p-6 sm:p-8 md:p-10">
          <div className="text-center space-y-1.5 mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white">
              Create your account
            </h1>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              Enter your email below to create your account
            </p>
            {isError && (
              <p className="text-sm text-red-500 text-center font-medium mt-2">
                Registration failed. Please try again.
              </p>
            )}
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <TextField
                label="Name"
                name="name"
                type="text"
                placeholder="Enter your name"
                dir="ltr"
                value={name}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                className="h-9 dark:bg-[#222222] border shadow-sm border-[#E5E5E5] dark:border-[#424141] font-medium mt-2 focus-visible:outline-none focus-visible:border-neutral-500 dark:focus-visible:border-neutral-600 focus-visible:ring-[3px] focus-visible:ring-neutral-500/20 dark:focus-visible:ring-neutral-600/20"
              />
            </div>

            <div>
              <TextField
                label="Email"
                name="email"
                type="email"
                placeholder="m@example.com"
                dir="ltr"
                value={email}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                className="h-9 dark:bg-[#222222] border shadow-sm border-[#E5E5E5] dark:border-[#424141] font-medium mt-2 focus-visible:outline-none focus-visible:border-neutral-500 dark:focus-visible:border-neutral-600 focus-visible:ring-[3px] focus-visible:ring-neutral-500/20 dark:focus-visible:ring-neutral-600/20"
              />
            </div>

            <div>
              <TextField
                label="Password"
                name="password"
                type="password"
                placeholder=""
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
              className={`w-full mt-4 bg-neutral-900 hover:bg-neutral-800 text-white dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-200 py-2.5 rounded-lg font-medium transition-colors`}
            >
                {isPending ? "Creating Account..." : "Create Account"}
            </Button>
          </form>

          <div className="text-center mt-6 text-sm text-neutral-500 dark:text-neutral-400">
            Already have an account?
            <Link
              to="/login"
              className="underline font-medium text-neutral-900 dark:text-neutral-100 hover:opacity-80 transition-opacity"
            >
            {"  "}Sign in
            </Link>
          </div>
        </div>

        <div className="hidden md:flex flex-col items-center justify-center p-8 bg-neutral-100/60 dark:bg-[#1a1a1e] border-l border-neutral-200 dark:border-neutral-800/80" />
      </div>

      <p className="mt-6 text-xs text-center text-neutral-500 dark:text-neutral-400 max-w-md px-4">
        By clicking continue, you agree to our
        <a
          href="#"
          className="underline hover:text-neutral-800 dark:hover:text-neutral-200"
        >
          Terms of Service
        </a>
        and
        <a
          href="#"
          className="underline hover:text-neutral-800 dark:hover:text-neutral-200"
        >
          Privacy Policy
        </a>
      </p>
    </div>
  );
}

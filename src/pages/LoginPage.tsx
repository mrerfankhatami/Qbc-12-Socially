import TextField from "../components/Ui/TextField";
import Button from "../components/Ui/Button";
export default function LoginPage() {
  return (
    <div className="min-h-svh flex flex-col items-center justify-center bg-secondary-50 dark:bg-[#262626] px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col gap-6 w-full max-w-sm md:max-w-4xl">
        <div id="card" className="bg-secondary-0 dark:bg-[#262626] grid grid-cols-1 md:grid-cols-2 p-0 shadow-sm rounded-xl border border-[#E5E5E5] dark:border-[#2e2e2e] overflow-hidden">
          <form className="p-6 md:p-8 bg-white dark:bg-[#171717]">
            <div className="flex flex-col gap-6 dark:text-[rgb(var(--color-secondary-0))]">
              <div className="flex flex-col gap-2 items-center text-center">
                <h1 className="text-2xl font-bold">Welcome back</h1>
                <p className="text-[#737373] dark:text-[#A3A3A3]">Login to your Socially account</p>
              </div>
              <div className="flex flex-col gap-6 font-800 ">
              <TextField 
                label="Email"
                name="email"
                type="email"
                placeholder="m@example.com"
                dir="ltr"
                className="h-9 dark:bg-[#222222] border shadow-sm border-[#E5E5E5] dark:border-[#424141] font-medium mt-2 focus-visible:outline-none focus-visible:border-neutral-500 dark:focus-visible:border-neutral-600 focus-visible:ring-[3px] focus-visible:ring-neutral-500/20 dark:focus-visible:ring-neutral-600/20"
              />
              <TextField 
                label="Password"
                name="password"
                type="password"
                placeholder=""
                dir="ltr"
                className="h-9 dark:bg-[#222222] border shadow-sm border-[#E5E5E5] dark:border-[#424141] font-medium mt-2 focus-visible:outline-none focus-visible:border-neutral-500 dark:focus-visible:border-neutral-600 focus-visible:ring-[3px] focus-visible:ring-neutral-500/20 dark:focus-visible:ring-neutral-600/20"
              />
              </div>
              <Button 
                type="button" 
                className="w-full h-9 flex items-center justify-center bg-black text-white py-3 mt-2 bg-secondary-900 dark:bg-[#E5E5E5] dark:text-black border rounded-lg font-medium text-sm hover:opacity-90 transition-opacity"
              >
                Login
              </Button>
              <p className="items-center text-center text-[#737373] dark:text-[#A3A3A3] text-sm">Don't have an account? <a href="#" className="underline underline-offset-4 dark:hover:text-white">Sign up</a></p>
            </div>
          </form>
        </div>
        <p className="text-center text-sm text-secondary-500 mt-2 text-[#737373] dark:text-[#A3A3A3] px-6 leading-relaxed">By clicking continue, you agree to our <a className="underline underline-offset-4 dark:hover:text-white">Terms of Service</a> and <a className="underline underline-offset-4 dark:hover:text-white">Privacy Policy</a>.</p>
      </div>
    </div>
  )
}

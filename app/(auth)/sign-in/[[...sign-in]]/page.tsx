import Image from "next/image";
import { Loader2 } from "lucide-react";
import { SignIn, ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
// import { Button } from '@/components/radian/button'
// import { GradientBackground } from '@/components/radian/gradient'
// import { Link } from '@/components/radian/link'
// import { Checkbox, Field, Input, Label } from '@headlessui/react'
// import { CheckIcon } from '@heroicons/react/16/solid'
// import { clsx } from 'clsx'
// import type { Metadata } from 'next'

export default function Page() {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      <div className="h-full lg:flex flex-col items-center justify-center px-4">
        <div className="text-center space-y-4 pt-16">
          <h1 className="font-bold text-3xl text-[#2E2A47]">
            Welcome Back!
          </h1>
          <p className="text-base text-[#7E8CA0]">
            Log in or Create account to get back to your dashboard!
          </p>
        </div>
        <div className="flex items-center justify-center mt-8">
          <ClerkLoaded>
            <SignIn path="/sign-in" />
          </ClerkLoaded>
          <ClerkLoading>
            <Loader2 className="animate-spin text-muted-foreground" />
          </ClerkLoading>
        </div>
      </div>
      <div className="h-full bg-blue-600 hidden lg:flex items-center justify-center">
        <Image src="/logo.svg" height={100} width={100} alt="Logo" />
      </div>
    </div>
  );
}

// import { Button } from '@/components/radian/button'
// import { GradientBackground } from '@/components/radian/gradient'
// import { Link } from '@/components/radian/link'
// import { Checkbox, Field, Input, Label } from '@headlessui/react'
// import { CheckIcon } from '@heroicons/react/16/solid'
// import { clsx } from 'clsx'
// import type { Metadata } from 'next'
// import Image from 'next/image'

// export const metadata: Metadata = {
//   title: 'Login',
//   description: 'Sign in to your account to continue.',
// }

// export default function Login() {
//   return (
//     <main className="overflow-hidden bg-gray-50">
//       <GradientBackground />
//       <div className="isolate flex min-h-dvh items-center justify-center p-6 lg:p-8">
//         <div className="w-full max-w-md rounded-xl bg-white shadow-md ring-1 ring-black/5">
//           <form action="#" method="POST" className="p-7 sm:p-11">
//             <div className="flex items-start">
//               <Link href="/" title="Home">
//                  <Image src="/assets/logo1.png" alt="Radian" width={48} height={48} />
//               </Link>
//             </div>
//             <h1 className="mt-8 text-base/6 font-medium">Welcome back!</h1>
//             <p className="mt-1 text-sm/5 text-gray-600">
//               Sign in to your account to continue.
//             </p>
//             <Field className="mt-8 space-y-3">
//               <Label className="text-sm/5 font-medium">Email</Label>
//               <Input
//                 required
//                 autoFocus
//                 type="email"
//                 name="email"
//                 className={clsx(
//                   'block w-full rounded-lg border border-transparent shadow ring-1 ring-black/10',
//                   'px-[calc(theme(spacing.2)-1px)] py-[calc(theme(spacing[1.5])-1px)] text-base/6 sm:text-sm/6',
//                   'data-[focus]:outline data-[focus]:outline-2 data-[focus]:-outline-offset-1 data-[focus]:outline-black',
//                 )}
//               />
//             </Field>
//             <Field className="mt-8 space-y-3">
//               <Label className="text-sm/5 font-medium">Password</Label>
//               <Input
//                 required
//                 type="password"
//                 name="password"
//                 className={clsx(
//                   'block w-full rounded-lg border border-transparent shadow ring-1 ring-black/10',
//                   'px-[calc(theme(spacing.2)-1px)] py-[calc(theme(spacing[1.5])-1px)] text-base/6 sm:text-sm/6',
//                   'data-[focus]:outline data-[focus]:outline-2 data-[focus]:-outline-offset-1 data-[focus]:outline-black',
//                 )}
//               />
//             </Field>
//             <div className="mt-8 flex items-center justify-between text-sm/5">
//               <Field className="flex items-center gap-3">
//                 <Checkbox
//                   name="remember-me"
//                   className={clsx(
//                     'group block size-4 rounded border border-transparent shadow ring-1 ring-black/10 focus:outline-none',
//                     'data-[checked]:bg-black data-[checked]:ring-black',
//                     'data-[focus]:outline data-[focus]:outline-2 data-[focus]:outline-offset-2 data-[focus]:outline-black',
//                   )}
//                 >
//                   <CheckIcon className="fill-white opacity-0 group-data-[checked]:opacity-100" />
//                 </Checkbox>
//                 <Label>Remember me</Label>
//               </Field>
//               <Link href="#" className="font-medium hover:text-gray-600">
//                 Forgot password?
//               </Link>
//             </div>
//             <div className="mt-8">
//               <Button type="submit" className="w-full">
//                 Sign in
//               </Button>
//             </div>
//           </form>
//           <div className="m-1.5 rounded-lg bg-gray-50 py-4 text-center text-sm/5 ring-1 ring-black/5">
//             Not a member?{' '}
//             <Link href="#" className="font-medium hover:text-gray-600">
//               Create an account
//             </Link>
//           </div>
//         </div>
//       </div>
//     </main>
//   )
// }

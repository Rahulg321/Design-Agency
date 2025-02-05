import LoginForm from "@/components/forms/login-form"
import SigninWithGoogleForm from "@/components/SigninGoogleForm";
import { GalleryVerticalEnd } from "lucide-react"
import Link from "next/link"
import { Suspense } from "react";


export default function LoginPage() {
    return (
      <div className="flex h-full items-center justify-center bg-gray-50">
        <div className="w-full max-w-md space-y-6 px-8 py-12">
          <h2 className="text-center">
            Welcome to Pixora Labs
          </h2>
          <Suspense fallback={<p>Loading...</p>}>
            <div className="justify-center">
              <SigninWithGoogleForm />
            </div>
          </Suspense>

          <p className="text-center text-xs text-gray-500">
            Only authorized members of the organization can access this
            platform.
          </p>
        </div>
      </div>
    );
}

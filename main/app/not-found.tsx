import Link from "next/link";
import BackgroundPattern from "@/components/BackgroundPattern";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full bg-white relative flex items-center justify-center p-4">
      <BackgroundPattern />
      
      <div className="relative z-10 text-center space-y-6">
        <div className="space-y-2">
          <h1 className="text-6xl md:text-8xl font-bold text-gray-900">404</h1>
          <p className="text-xl md:text-2xl text-gray-600">page not found</p>
        </div>
        
        <p className="text-sm text-gray-500 max-w-md mx-auto">
          looks like you wandered off the beaten path. this page doesn&apos;t exist.
        </p>
        
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-gray-900 text-white hover:bg-gray-800 transition-colors"
        >
          back to home
        </Link>
      </div>
    </div>
  );
}

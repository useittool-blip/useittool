import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-9xl font-bold text-zinc-200">404</h1>
      <h2 className="text-3xl font-semibold text-zinc-900 mt-4 mb-2">Page Not Found</h2>
      <p className="text-zinc-600 mb-8 max-w-md">
        Sorry, the page you are looking for does not exist or has been moved.
      </p>
      <Link 
        href="/" 
        className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors"
      >
        Go Back Home
      </Link>
    </div>
  );
}
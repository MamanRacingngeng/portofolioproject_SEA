import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-6">
      <div className="text-center">
        <p className="text-6xl font-display font-semibold text-fresh-200 mb-4">
          404
        </p>
        <h1 className="font-display text-2xl font-semibold text-earth-700 mb-2">
          Page Not Found
        </h1>
        <p className="text-earth-500 mb-6">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-fresh-600 text-white rounded-full text-sm font-medium hover:bg-fresh-700 transition-colors"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}

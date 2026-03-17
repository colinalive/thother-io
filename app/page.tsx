import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold text-gray-900">
          Welcome to <span className="text-blue-600">thother.io</span>
        </h1>

        <p className="mt-3 text-2xl text-gray-700">
          Your AI-powered Next.js site, built with Cloudflare Workers, D1, and R2.
        </p>

        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          <Link
            href="/about"
            className="mt-4 p-6 text-left border border-gray-200 rounded-xl hover:text-blue-600 hover:border-blue-600"
          >
            <h3 className="text-2xl font-bold">About Us &rarr;</h3>
            <p className="mt-4 text-xl">Learn more about our mission and team.</p>
          </Link>

          <Link
            href="/api/hello"
            className="mt-4 p-6 text-left border border-gray-200 rounded-xl hover:text-blue-600 hover:border-blue-600"
          >
            <h3 className="text-2xl font-bold">API Example &rarr;</h3>
            <p className="mt-4 text-xl">See how our Cloudflare Worker API works.</p>
          </Link>
        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <p className="flex items-center justify-center gap-2">
          Powered by OpenClaw & Next.js on Cloudflare
        </p>
      </footer>
    </div>
  );
}

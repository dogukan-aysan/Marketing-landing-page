import Link from "next/link";

function NotFound() {
  return (
    <main className="text-center space-y-6 mt-4 absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4">
      <h1 className="text-3xl font-semibold text-neutral-900">This page could not be found :(</h1>
      <Link href="/" className="inline-block bg-indigo-700 text-white px-6 py-3 text-lg rounded">
        Go back home
      </Link>
    </main>
  );
}

export default NotFound;

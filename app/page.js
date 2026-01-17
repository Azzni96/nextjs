import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <h1>My Next.js Learning App</h1>
      <p>
        This project is for practicing Next.js basics: pages, routing, and
        navigation.
      </p>

      <Link href="/about">Go to About Page</Link>
    </main>
  );
}

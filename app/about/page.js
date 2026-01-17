import Link from "next/link";
import Navigation from "../components/Navigation";

export default function AboutPage() {
  return (
    <main>
      <Navigation />

      <h1>About this course</h1>
      <p>This course teaches the basics of Next.js step by step.</p>

      <Link href="/">Back to Home</Link>
    </main>
  );
}

import Link from "next/link";
import Navigation from "../../components/Navigation";

export default function BlogPostPage() {
  return (
    <main>
      <Navigation />

      <h1>Blog Post Page</h1>
      <p>This page is a nested route inside blog/post.</p>

      <Link href="/">Back to Home</Link>
    </main>
  );
}

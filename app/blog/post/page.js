import Link from "next/link";

export default function BlogPostPage() {
    return (
        <main>
            <h1>Blog Post Page</h1>
            <p>This is a blog post page in the Next.js application.</p>
            <Link href="/" >Go to Home Page</Link>
        </main>
    );
}

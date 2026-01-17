import Link from "next/link";

export default function HomePage() {
    return (
        <main>
            <h1>Welcome to Our Application</h1>
            <p>This is the home page of our Next.js application.</p>
            <Link href="/about">Go to About Page</Link>
        </main>
    );
} 
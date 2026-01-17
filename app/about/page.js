import Link from "next/link";
export default function AboutPage() {
    return (
        <main>
            <h1>About Us</h1>
            <p>Welcome to our application! We are dedicated to providing the best service possible.</p>
            <p>Our team is passionate about technology and innovation, striving to create solutions that make a difference.</p>
            <p>Thank you for visiting our about page. We hope to connect with you soon!</p>

            <Link href="/">Back to Home Page</Link>
        </main>
    );
}
import Link from "next/link";
import styles from "./home/home.module.css";
import Navigation from "./components/Navigation";
import Title from "./components/Title";

export default function HomePage() {
  return (
    <main>
      <Navigation />

      <Title>Styling Assignment 1</Title>

      <p className={styles.text}>
        This project is for practicing Next.js basics: pages, routing, navigation,
        and styling with CSS Modules.
      </p>

      <Link className={styles.link} href="/about">
        Go to About Page
      </Link>
    </main>
  );
}

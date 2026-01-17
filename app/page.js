import Link from "next/link";
import styles from "./home/home.module.css";
import Navigation from "./components/Navigation";

export default function HomePage() {
  return (
    <main>
      <Navigation />

      <h1 className={styles.title}>My Next.js Learning App</h1>
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

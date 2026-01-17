import Link from "next/link";
import style from './home/home.module.css';

export default function HomePage() {
  return (
    <main>
      <h1 className={style.title}>My Next.js Learning App</h1>
      <p className={style.text}>
        This project is for practicing Next.js basics: pages, routing, and
        navigation.
      </p>

      <Link href="/about" className={style.link}>Go to About Page</Link>
    </main>
  );
}

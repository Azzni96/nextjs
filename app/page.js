import Link from "next/link";
import styles from "./home/home.module.css";
import Navigation from "./components/Navigation";
import Title from "./components/Title";
import Button from "./components/Button";
import Card from "./components/Card";
import AppLayout from "./components/AppLayout";
import Alert from "./components/Alert";

export default function HomePage() {
  return (
    <main>
      <Navigation />
      <AppLayout>

      <Title>Styling Assignment 1</Title>


      <p className={styles.text}>
        This project is for practicing Next.js basics: pages, routing, navigation,
        and styling with CSS Modules.
      </p>

      <Link  href="/about">
        <Button>About this course</Button>
      </Link>

      <Card highlighted={true}>
  <p>This card is highlighted</p>
</Card>

<Card highlighted={false}>
  <p>This card is not highlighted</p>
</Card>
      </AppLayout>
      <Alert />
    </main>

  );
}

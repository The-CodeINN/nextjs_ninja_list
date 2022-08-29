import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
    <Head>
      <title>Ninja List || Home</title>
    </Head>
    <div>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo nulla quas
        saepe autem veniam! Consequuntur natus optio necessitatibus excepturi
        eum corporis omnis officia animi. Eius ipsam nemo neque voluptatibus
        dolor.
      </p>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam tenetur
        praesentium deleniti hic voluptatibus assumenda maiores dicta iste modi
        tempore fuga natus, libero nostrum dolores iure vero! Incidunt,
        laboriosam quaerat.
      </p>
      <Link href='/ninja'>
        <a className={styles.btn}>See Ninja Listing</a>
      </Link>
    </div>
    </>
  );
}

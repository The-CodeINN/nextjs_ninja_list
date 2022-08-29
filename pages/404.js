import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 2000);
  }, []);

  return (
    <>
      <Head>
        <title>Ninja List || 404</title>
      </Head>
      <div className='not-found'>
        <h1>Ooops</h1>
        <h2>That page doesn't exist</h2>
        <p>
          Go back to
          <Link href='/'>
            <a>Homepage</a>
          </Link>
        </p>
      </div>
    </>
  );
};

export default NotFound;

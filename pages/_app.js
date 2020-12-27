import '../styles/globals.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>El Rincón Di Calcio</title>
        <link rel="icon" type="image/png" href="/assets/logo.jfif" />
      </Head>
      <div className="background-image fixed w-full" />
      <Component {...pageProps} />
      <style jsx>
        {`
          .background-image {
            background-image: url('assets/02c1c63c-c20e-4f68-8707-810f2563a06f.jfif');
            height: 100vh;
            background-repeat: no-repeat;
            background-size: cover;
            filter: brightness(0.6);
          }
        `}
      </style>
    </>
  );
}

export default MyApp

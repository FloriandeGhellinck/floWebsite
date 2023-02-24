import '../styles/globals.css';
import Head from 'next/head';
import { ThemeProvider } from 'next-themes';
import { useState } from 'react';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title> Florian de Ghellinck</title>
        <meta
          name='description'
          content='Florian de Ghellinck personal website'
        />
        <link
          rel='icon'
          href='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👨‍💻</text></svg>'
        />
        <link rel='stylesheet' href='https://unpkg.com/aos@next/dist/aos.css' />
      </Head>
      {/* <ThemeProvider attribute='class'> */}
      <Component {...pageProps} />
      {/* </ThemeProvider> */}
    </>
  );
}

export default MyApp;

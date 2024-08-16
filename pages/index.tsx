'use client';
import Head from 'next/head';
import { useEffect } from 'react';
import { redirectToAppOrStore } from '../utils/redirect';

export default function Page () {
  useEffect(() => {
    redirectToAppOrStore();
  }, []);

  return (
    <>
      <Head>
        <title>Eatly</title>
        <link rel="icon" href="/logo.png" />
        <meta property="og:title" content="Eatly" />
        <meta property="og:image" content="/logo.png"  />
        <meta property="og:description" content="Vad blir det till middag?" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="apple-touch-icon" href="/logo.png" />
      </Head>
      <div className="bg"></div>
    </>
  );
};
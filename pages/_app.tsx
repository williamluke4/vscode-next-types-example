import { CSSReset, ChakraProvider } from '@chakra-ui/react';
import { css, Global } from '@emotion/react'
import Head from 'next/head';
import React from 'react';
import Layout from '../components/Layout';

const MyApp = ({ Component, pageProps }) => {
  return (
    <ChakraProvider>
      <Head>
        <title>Types Demo</title>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <CSSReset />
      <Global
        styles={css`
          body {
            background-color: #f7fafc;
          }
        `}
      />
    </ChakraProvider>
  );
};

export default MyApp;

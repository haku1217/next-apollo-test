import React, { useState, useEffect } from "react";
import { NextComponentType } from "next";
import { AppContext, AppInitialProps, AppProps } from "next/app";
import Head from "next/head";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "/api",
  cache: new InMemoryCache(),
});

const App: NextComponentType<AppContext, AppInitialProps, AppProps> = ({
  Component,
  pageProps,
}) => {
  return (
    <ApolloProvider client={client}>
      <Head>
        <title>Yadokari</title>
      </Head>
      <Component {...pageProps} />
    </ApolloProvider>
  );
};

export default App;

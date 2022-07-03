import React from 'react';
import Head from 'next/head'
import { PokedexHomepage } from '@components/Home';

const IndexPage = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Rey Mon</title>
      </Head>
      <PokedexHomepage />
    </>
  )
}

export default IndexPage;
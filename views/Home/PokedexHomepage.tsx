import React from 'react';
import { Banner, PokedexList } from '@components/Home';
import { Layout } from '@components/Common';

interface Props {}

const PokedexHomepage = ({ ...rest }: Props): JSX.Element => (
  <React.Fragment>
    <Layout>
      <Banner />
      <PokedexList />
    </Layout>
  </React.Fragment>
);

export default PokedexHomepage;
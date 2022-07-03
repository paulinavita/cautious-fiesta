import { useRouter } from "next/router";
import React, { FC, useEffect } from 'react';
import { Layout, Loader } from '@components/Common';
import ImgSprites from '@components/Detail/ImgSprites';
import StatList from '@components/Detail/StatList';
import { Box, Typography, Container } from '@mui/material'
import useFetch from '@hooks/useFetch';
import TopCard from '@components/Detail/TopCard';
import { PokemonInfo, EvolutionDetail } from 'interfaces';
import EvolutionList from "@components/Detail/EvolutionList";

export type EvoChain = {
  chain: EvolutionDetail[]
}

const PokemonDetail: FC = () => {
  const { query, isReady } = useRouter()
  const url  = `/pokemon/${query.name}`
  const { data, loading, error } = useFetch<PokemonInfo>(url)    

  useEffect(() => {
    if (!isReady) return
  }, [isReady, data, query.name])

  if (!data && error) {
    return (
      <Box>
        <Typography>Error while searching for pokemon</Typography>
      </Box>
    )
  }

  if (loading || !data ) {
    return (
      <Loader />
    )
  }

  return (
    <React.Fragment>
      <Layout>
        <Container maxWidth="md" sx={{ pt: 5 }}>
          <Box display={'flex'} flexDirection={'column'} alignItems={'flex-start'} justifyContent={'center'}>
            {/* Main */}
            <TopCard pokemon={data} />

            {/* Sprites */}
            <Box>
              <Typography variant={'h6'} fontWeight={700}>Other Images :</Typography>
              <ImgSprites sprites={data.sprites}/>
            </Box>

            {/* Stats */}
            <Box>
              <Typography variant={'h6'} fontWeight={700}>Stats :</Typography>
              <StatList stats={data.stats}/>
            </Box>
  
            {/* Evolutions */}
            <Box pt={4}>
              <Typography variant={'h6'} fontWeight={700}>Evolution :</Typography>
              <EvolutionList name={String(query.name) || ''}/>
            </Box>
          </Box>
        </Container>
      </Layout>
    </React.Fragment>
  )
}
export default PokemonDetail
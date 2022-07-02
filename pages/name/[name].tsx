import { useRouter } from "next/router";
import React, { FC, useState, useEffect } from 'react';
import { Layout } from '@components/Common';
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
  const url  = `/pokemon/${query.name || ''}`
  const { data, loading, error } = useFetch<PokemonInfo>(url)    

  useEffect(() => {
    if (!isReady) return
  }, [isReady])

  if (!data && error) {
    return (
      <Box>
        <Typography>Error while searching for pokemon</Typography>
      </Box>
    )
  }

  if (loading) {
    return (
      <Box>
        <Typography>Page is Loading..</Typography>
      </Box>
    )
  }

  if (data?.name) {
    return (
      <React.Fragment>
        <Layout>
          <Container fixed>
              <Box display={'flex'} flexDirection={'column'} alignContent={'center'} justifyContent={'center'}>
                {/* Main */}
                <TopCard pokemon={data} />

                {/* Sprites */}
                <Typography>Other Images</Typography>
                <ImgSprites sprites={data.sprites}/>

                {/* Stats */}
                <Typography>Stats</Typography>
                <StatList stats={data.stats}/>
      
                {/* Evolutions */}
                <Typography>Evolution:</Typography>
                <EvolutionList name={query.name}/>
              </Box>
          </Container>
        </Layout>
      </React.Fragment>
    )
  }
}
export default PokemonDetail
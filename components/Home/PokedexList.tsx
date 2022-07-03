import React, { FC, useState, useEffect } from 'react';
import { Card } from '@components/Home';
import { Container, Loader } from '@components/Common';
import Pagination from '@mui/material/Pagination';
import { Grid, Box, Typography } from '@mui/material'
import axios from 'axios'
// import { dehydrate, QueryClient } from 'react-query';
// import { getPokemons, useFetchPokemons, getPokemon } from '../../api/index';
import useFetch from '@hooks/useFetch';
import { CardModalProps } from '@components/Home/Card'
import { Pokemon, Type, PokemonInfo } from 'interfaces';


export type Pokemons = {
  count: number;
  next: string | null;
  previous: string | null;
  results: {
    name: string;
    url: string;
  }[];
};


const PokedexList: FC = () => {
  const [offset, setOffset] = useState(0);
  const [page, setPage] = useState(1);
  const url  = `/pokemon?offset=${offset}&limit=9`
  const { data } = useFetch<Pokemons>(url);
  const [pokemons, setPokemons] = useState<CardModalProps[]>([])
  
  useEffect(() => {
    const promises: Promise<CardModalProps>[] = [];
    if (data) {
      data.results.forEach(_pokemon => {
        const promise = axios.get<CardModalProps>(_pokemon.url).then((res) => res.data)
        promises.push(promise)
      });
    }

    const resolves = ( pokemons: PromiseSettledResult<CardModalProps>[] ) => {
      pokemons.forEach(pokemon => {
        if (pokemon.status === 'fulfilled') {
          setPokemons(prevState => {
            return [...prevState, pokemon.value]
          })
        }
      });
    };

    Promise.allSettled(promises).then(resolves)
  }, [data])

  const handleChangePagination = (_: any, value: number) => {
    const offset = (value - 1) * 9
    setPokemons([])
    setPage(value)
    setOffset(offset)
  }

  if (!data) return (<Loader></Loader>)

  return (
    <Container maxWidth="false" bgcolor="primary.background">
      <Container>
        <Box px={{xs:4, sm:8, md:12}}>
        <Box sx={{ pb: 7, pt: 3 }} display={'flex'} flexDirection={'column'} textAlign={'center'}>
          <Typography variant="h4" sx={{ pb: 2, 'fontWeight': 700 }}>PokeDex</Typography>
          <Typography> All Generation Totalling </Typography> 
          <Typography> { data.count } pokemons</Typography>
        </Box>
        <Grid 
          container
          direction="row"
          justifyContent="center"
          alignItems="flex-start"
          spacing={{ xs: 1, sm: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          { pokemons.map((item, index) => (
            <Grid item xs={4} key={index}>
              <Card 
                id={item.id}
                name={item.name}
                types={item.types}
                abilities={item.abilities}
                weight={item.weight}
                height={item.height}
              />
            </Grid>
          ))}
        </Grid>
        <Box 
          display={'flex'}
          sx={{ py: 5 }}
          justifyContent={'space-between'}
          textAlign={'center'}
          alignItems={'center'}
        >
          <Typography sx={{ fontWeight: '700', pt: 1 }} color={'text.white'}>Page: {page}</Typography>
          <Pagination
            variant="outlined"
            shape="rounded"
            size="large"
            count={Math.ceil(data.count / 9)}
            page={page}
            showFirstButton
            showLastButton
            onChange={handleChangePagination}
          />
          <Typography sx={{ fontWeight: '700', pt: 1 }} color={'text.white'}>Totals: {data.count}</Typography>
        </Box>
      </Box>
      </Container>
    </Container>
  )
}

// export const getStaticProps: GetStaticProps = async () => {
//   const queryClient = new QueryClient()
//   await queryClient.prefetchQuery('getPokemons', () => getPokemons())

//   console.log(queryClient)
//   return {
//     props: {
//       dehydratedState: dehydrate(queryClient),
//     },
//   }
// }

export default PokedexList
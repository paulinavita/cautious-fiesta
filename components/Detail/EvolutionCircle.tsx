import React from 'react'
import { CircularProgress, Typography, Box } from '@mui/material';
import { SingleSpecies } from 'interfaces'
import getCapFirstLetter from '@utils/getCapitalFirstLetter'
import Image from 'next/image'

interface Props {
  species: SingleSpecies,
}

const EvolutionCircle = ({ species }: Props): JSX.Element => {

  const getId = (uri: string) => {
		let uriArray = uri.split('/')
		const number = Number(uriArray[uriArray.length - 2])
		return number
	}

  return (
    <Box display={'flex'} flexDirection={'column'} position="relative">
      <CircularProgress
        thickness={2} 
        size='15vh'
        variant="determinate"
        value={100} 
      />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 20,
          right: 0,
          position: 'absolute',
          flexDirection: 'column',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%'
        }}
      >
        <Image alt="evo-img" width="70" height="70" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${getId(species.url)}.svg`}/>
      </Box>
      <Typography 
        variant="body1"
        sx={{
          fontWeight: 500,
          flexDirection: 'column',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
        }}  
      > 
        { getCapFirstLetter(species.name) } 
      </Typography>
    </Box>
  )
}

export default EvolutionCircle
import React from 'react'
import { Typography, Box } from '@mui/material'
import { ButtonBase } from '@components/Common'
import { CardModalProps } from '@components/Home/Card'
import getCapFirstLetter from '@utils/getCapitalFirstLetter'
import ChipType from '@components/Common/Chip'
import Image from 'next/image'
import { PokemonInfo } from 'interfaces';

interface Props {
  pokemon: PokemonInfo,
}


const TopCard = ({ pokemon }: Props): JSX.Element => {
  return (
    <Box sx={{}}>
      <Box>
        <Box display={'flex'}>
          {/* Left */}
          <Box pr={{xs:1, sm:3, md:6}}>
            <Image alt="placeholder" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`} height={300} width={300}/>
          </Box>
          {/* Right */}
          <Box>
            <Typography variant={'h4'} sx={{ fontWeight: '700'}} color={'text.primary'}>{ getCapFirstLetter(pokemon?.name) }</Typography>
            <Box pt={4} display={'flex'} justifyContent={'space-between'}>
              <Typography variant={'body1'} sx={{ fontWeight: '700'}}>Weight : </Typography>{ pokemon?.weight }
              <Typography variant={'body1'} sx={{ fontWeight: '700'}}>Height : </Typography>{ pokemon?.height }
            </Box>
            <Box pt={2} display={'flex'}>
              <Typography sx={{ fontWeight: '700'}}>Abilities : </Typography>
              <Box pl={{xs:1, sm:3, md:3}}>
                {
                  pokemon?.abilities?.map((_abl, i) => (
                    <Typography key={i}>
                      {`${i+1}. ${getCapFirstLetter(_abl.ability?.name || '')}`}
                    </Typography>
                  ))
                }
              </Box>
            </Box>
            <Box pt={2} display={'flex'} justifyContent={'space-between'}>
              <Typography sx={{ fontWeight: '700'}}>Type : </Typography>
              <Box pl={{xs:1, sm:3, md:3}} display={'flex'} justifyContent={'flex-start'}>
                { pokemon?.types?.map((_type, index) => (
                    <Box px={1} key={index}>
                      <ChipType
                        key={index}
                        name={_type.type?.name}
                      />
                    </Box>
                    ))
                  }
              </Box>
              </Box>
            </Box>
          </Box>
        </Box>
    </Box>
  )
}

export default TopCard
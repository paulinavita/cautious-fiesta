import React, { useEffect, useState } from 'react'
import { TypeDetail, PokemonInfo } from "interfaces"
import { ChipType } from '@components/Common'
import { TableCell, Typography, Box } from '@mui/material'
import getLeadingZeros from '@utils/getLeadingZeros'
import getCapFirstLetter from '@utils/getCapitalFirstLetter'
import useFetch from '@hooks/useFetch';
import Image from 'next/image'
import Link from 'next/link'
interface Props {
  pokemon: any
}

const PokeCellCard = ({ pokemon }: Props): JSX.Element => {
  const { data } = useFetch<PokemonInfo>(`/pokemon/${getId(pokemon.url)}`)

  function getId (uri: string) {
		let uriArray = uri.split('/')
		const number = Number(uriArray[uriArray.length - 2])
		return number
	}

  function getPathName () {
    return data?.name || ''
  }

  const getNumId = () => {
    return data?.id && (
      <Typography variant="h6" sx={{fontWeight: 500}}>
        #{getLeadingZeros(String(data.id))}
      </Typography>
    )
  }

  const getImage = () => {
    return data?.sprites && (
      <Image
        width={100} height={100} 
        alt={"poke-img"} 
        src={data?.sprites?.front_default || 'https://media.giphy.com/media/PJOkkAIek6s2LJmi8c/giphy.gif'}
      />
    )
  }

  const getName = () => {
    return data?.name && (
      <Typography variant="h5" sx={{ fontWeight: 700 }}>  
        { getCapFirstLetter(data.name) }
      </Typography>
    )
  }

  const getTypeChips = () =>  {
    return data?.types && (<Box pl={{xs:1, sm:3, md:3}}
      display={'flex'}
      justifyContent={'flex-start'}
    >
      { data?.types.map((_type, index) => (
        <Box px={1} key={index}>
          <ChipType
            key={index}
            name={_type.type?.name}
          />
        </Box>
        ))
      }
    </Box>)
  }

  useEffect(() => {}, [data])
  return (
    <Link href={`/name/${getPathName()}`}>
      <a>
        <TableCell sx={{verticalAlign: 'middle'}}>{getImage()}</TableCell>
        <TableCell sx={{verticalAlign: 'middle'}} align={'left'}>{getNumId()}</TableCell>
        <TableCell sx={{verticalAlign: 'middle'}}>{getName()}</TableCell>
        <TableCell sx={{verticalAlign: 'middle'}}>{getTypeChips()}</TableCell>
      </a>
    </Link>
  )
}

export default PokeCellCard
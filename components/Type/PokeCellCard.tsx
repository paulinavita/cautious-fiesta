import React, { useEffect, useState } from 'react'
import { TypeDetail } from "@interfaces"
import { ChipType } from '@components/Common'
import { TableCell, Typography, Box } from '@mui/material'
import getLeadingZeros from '@utils/getLeadingZeros'
import getCapFirstLetter from '@utils/getCapitalFirstLetter'
import useFetch from '@hooks/useFetch';
import Image from 'next/image'
import Link from 'next/link'

interface Props {
  pokemon: TypeDetail[]
}

const PokeCellCard = ({ pokemon }: Props): JSX.Element => {
  const { data } = useFetch<TypeDetail>(`/pokemon/${getId(pokemon.url)}`)

  function getId (uri: string) {
		let uriArray = uri.split('/')
		const number = Number(uriArray[uriArray.length - 2])
		return number
	}

  const getNumId = () => {
    return data?.id && (
      <Typography variant="h6" sx={{fontWeight: 500}}>
        #{getLeadingZeros(data.id)}
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
    
   <React.Fragment>
     <TableCell>{getImage()}</TableCell>
     <TableCell align={'left'}>{getNumId()}</TableCell>
     <TableCell>{getName()}</TableCell>
     <TableCell>{getTypeChips()}</TableCell>
   </React.Fragment>
  )
}

export default PokeCellCard
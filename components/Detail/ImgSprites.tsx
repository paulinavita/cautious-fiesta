import React from 'react'
import { Sprites } from '@interfaces'
import Image from 'next/image'
import { Typography, Box } from '@mui/material'

interface Props {
  sprites: Sprites,
}

const ImgSprites = ({ sprites }: Props): JSX.Element => {

  const getData = () => {
    return (
      sprites && Object.entries(sprites).map(([key, value]) => (
        (value !== 'null') 
        && (typeof value === 'string') 
        && <Image key={value} width="150" height="150" alt="sprite" src={value}></Image>
      )
     )
    )
  }
  return (
    <Box display={'flex'}>
      {
        getData().slice(0,4)
      }
    </Box>
  )
}

export default ImgSprites
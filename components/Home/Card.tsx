
import React from 'react'
import { Box, Typography, Chip, Grid, Paper } from '@mui/material'
import Image from 'next/image'

import getLeadingZeros from '@utils/getLeadingZeros'
import getCapFirstLetter from '@utils/getCapitalFirstLetter'
import { Ability } from 'interfaces'
import DetailModal from '@components/Home/DetailModal'
import ChipType from '@components/Common/Chip'

export type CardModalProps = {
  id: number
  name: string
  types: {
    type: {
      name: string
      url: string
    }
  }[]
  abilities: Ability[]
  weight: number
  height: number
}

const Card = (pokemon: CardModalProps): JSX.Element => {
  const [isOpen, setIsOpen] = React.useState(false)
  const handleOpen = () => setIsOpen(true)
  const handleClose = () => setIsOpen(false)

  return (
    <React.Fragment>
      <Box
        onClick={handleOpen}
      >
        <Paper sx={{ px: 2, py: 4, borderRadius: 2 }} elevation={3}>
          <Box display={'flex'} justifyContent={'center'}>
            <Image alt="placeholder" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`} height={150} width={150}/>
          </Box>
          <Typography sx={{ fontWeight: '700', pt: 1 }} color={'text.light'}>
          #{getLeadingZeros(String(pokemon.id))}
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: '700', pb: 2 }} color={'text.primary'}>
          { getCapFirstLetter(pokemon.name) }
          </Typography>
          <Box>
          <Grid container spacing={{ xs: 2 }} columns={16}>
            {pokemon?.types.map((_type, index) => (
              <Grid item xs={8} key={index}>
                <ChipType
                  key={index}
                  name={_type.type?.name}
                />
              </Grid>
            ))}
          </Grid>
          </Box>
        </Paper>
                  
      </Box>
      <DetailModal
        isOpen={isOpen}
        pokemon={pokemon}
        handleClose={handleClose}
      />
    </React.Fragment>
  )
}


export default Card
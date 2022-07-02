import React from 'react'
import { Modal, Typography, Box, Grid } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import { ButtonBase } from '@components/Common'
import { CardModalProps } from '@components/Home/Card'
import getCapFirstLetter from '@utils/getCapitalFirstLetter'
import ChipType from '@components/Common/Chip'
import Link from 'next/link'
import Image from 'next/image'
interface Props {
  pokemon: CardModalProps,
  isOpen: boolean,
  handleClose: () => void;
}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 730,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  borderRadius: 2,
  boxShadow: 12,
  p: 4,
};

const DetailModal = ({ pokemon, isOpen, handleClose }: Props): JSX.Element => {
  return (
    <Modal
      open={isOpen}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Box display={'flex'} justifyContent={'flex-end'}>
          <CloseIcon onClick={handleClose}></CloseIcon>
        </Box>
        {/* Main Box */}
        <Box>
          <Box display={'flex'}>
            {/* Left */}
            <Box pr={{xs:1, sm:3, md:6}}>
              <Image alt="placeholder" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`} height={300} width={300}/>
            </Box>
            {/* Right */}
            <Box>
              <Typography variant={'h4'} sx={{ fontWeight: '700'}} color={'text.primary'}>{ getCapFirstLetter(pokemon.name) }</Typography>
              <Box pt={4} display={'flex'} justifyContent={'space-between'}>
                <Typography variant={'body1'} sx={{ fontWeight: '700'}}>Weight : </Typography>{ pokemon.weight }
                <Typography variant={'body1'} sx={{ fontWeight: '700'}}>Height : </Typography>{ pokemon.height }
              </Box>
              <Box pt={2} display={'flex'}>
                <Typography sx={{ fontWeight: '700'}}>Abilities : </Typography>
                <Box pl={{xs:1, sm:3, md:3}}>
                  {
                    pokemon.abilities?.map((_abl, i) => (
                      <Typography key={i}>
                        {`${i+1}. ${getCapFirstLetter(_abl.ability.name)}`}
                      </Typography>
                    ))
                  }
                </Box>
              </Box>
              <Box pt={2} display={'flex'} justifyContent={'space-between'}>
                <Typography sx={{ fontWeight: '700'}}>Type : </Typography>
                <Box pl={{xs:1, sm:3, md:3}} display={'flex'} justifyContent={'flex-start'}>
                  { pokemon?.types.map((_type, index) => (
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
                {/* Detail */}
                <Box mt={3}>
                <Link href={`/name/${pokemon.name}`} passHref>
                  <a><ButtonBase
                    sx={{
                      borderRadius: 2,
                      my: 1,
                      py: 1,
                      px: 2,
                      boxShadow: 0,
                    }}
                    text="View Detail"
                  /></a>
                </Link>
                </Box>
              </Box>
            </Box>
          </Box>
      </Box>
    </Modal>
  )
}

export default DetailModal
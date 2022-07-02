import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import { Container, ButtonBase } from '@components/Common'
import { Typography, Grid, Box } from '@mui/material'
import Image from 'next/image'
// import LocalizationContext from '../context/i18nContext';

const Banner = (): JSX.Element => {
  const { t } = useTranslation()

  return (
    <Container sx={{ height: '100vh'}}>
      <Grid
        container
        pt={3} 
        direction="row"
        justifyContent="center"
        alignItems="center"
      > 
        <Grid 
          container
          justifyContent="flex-start"
          item xs={6}
        >
          <Typography fontWeight={700} variant="h3" mx={6}>
            {t('home.banner.title')}
          </Typography>
          <Typography mx={6} my={2}>
            {t('home.banner.desc')}
          </Typography>
          <Box mx={6}>
            <ButtonBase text="Check PokeDex"/>
          </Box>
        </Grid>
        <Grid container justifyContent="center" item xs={6}>
          <Image alt ="home" src="https://i.ibb.co/D74CFL6/home-banner-logo.png" width={'400%'} height={'460%'}/>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Banner;
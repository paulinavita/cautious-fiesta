import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { Container, NavBar } from '@components/Common';
import pages from '../../types/navigation/redirect'

interface Props {
  children: React.ReactNode;
  colorInvert?: boolean;
  bgcolor?: string;
}

const Layout = ({
  children,
  colorInvert = false,
  bgcolor = 'transparent',
}: Props): JSX.Element => {

  const theme = useTheme();

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 38,
  });

  return (
    <Box pb={4}>
      <Box
        bgcolor={bgcolor}
        position={'relative'}
      ></Box>
      <AppBar
        position={'sticky'}
        sx={{
          top: 0,
          backgroundColor: trigger ? theme.palette.background.paper : bgcolor,
        }}
        elevation={trigger ? 1 : 0}
      >
        <Container paddingY={1}>
          <NavBar
            onSidebarOpen={() => {}}
            pages={pages}
            colorInvert={trigger ? false : colorInvert}
          />
        </Container>
      </AppBar>
      <main>
        {children}
      </main>
    </Box>
  );
};

export default Layout;
import React from 'react';
import { useRouter } from 'next/router'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';
import Image from 'next/image';
import Link from 'next/link'
import LanguageSwitcher from './LanguageSwitcher';

interface Props {
  onSidebarOpen: () => void;
  pages: Array<PageItem>;
  colorInvert?: boolean;
}

const NavBar = ({
  onSidebarOpen,
  pages,
}: Props): JSX.Element => {
  const theme = useTheme()
  const router = useRouter()

  return (
    <React.Fragment>
      <Box
        display={'flex'}
        alignItems={'center'}
        justifyContent={'space-between'}
        width={1}
      >
        {/* Left */}
        <Box display={'flex'}>
          <Box
            display={'flex'}
            component="a"
            href="/"
            width={{ xs: 100, md: 120 }}
          >
            <Image alt ="logo-navbar" src="https://i.ibb.co/whjWPh6/navbar-left-logo.png" width={'110%'} height={'40%'}/>
          </Box>
          <Box sx={{ display: { md: 'flex' } }} alignItems={'center'}>
            {pages.map((item, i) => (
              <Box
                key={i}
                display={'flex'}
                alignItems={'center'}
                sx={{ cursor: 'pointer' }}
                marginLeft={4}
              >
                <Link href={item.href} passHref>
                  <a>
                    <Typography 
                      variant="body1"
                      fontWeight={700}
                      color={
                        (router.pathname === item.href) || (router.asPath === item.href)
                        ? 'primary' 
                        : 'text.light'
                      }
                    >
                      {item.title}
                    </Typography>
                  </a>
                </Link>
              </Box>
            ))}
          </Box>

        </Box>
        
        <Box alignItems={'center'}>
          {/* <Button
            onClick={() => onSidebarOpen()}
            aria-label="Menu"
            variant={'outlined'}
            sx={{
              display: { xs: 'flex', md: 'none' },
              borderRadius: 2,
              minWidth: 'auto',
              padding: 1,
              borderColor: alpha(theme.palette.divider, 0.2),
            }}
          >
            <MenuIcon />
          </Button> */}
          <LanguageSwitcher />

        </Box>
      </Box>
    </React.Fragment>
  );
};

export default NavBar;
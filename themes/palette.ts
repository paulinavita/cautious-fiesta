import { PaletteMode } from '@mui/material';

export const light = {
  alternate: {
    main: '#f7faff',
    dark: '#edf1f7',
  },
  zDepthShadows: 'none',
  mode: 'light' as PaletteMode,
  primary: {
    light: '#f9d87d',
    background: '#FFCB3B',
    main: '#E6AB09',
    dark: '##b5953e',
    white:'#fff',
    contrastText: 'rgba(0, 0, 0, 0.87)',
  },
  text: {
    primary: '#42494D',
    secondary: '##7B8082',
    light: '#B3B6B8',
    white: '#fff'
  },
  background: {
    paper: '#ffffff',
    default: '#ffffff',
    level1: '#ffffff',
    level2: '#f5f5f5',
    level3: '#B3B6B8',
  },
}
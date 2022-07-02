import { Theme, responsiveFontSizes } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { light } from './palette';

const getTheme = (): Theme =>
  responsiveFontSizes(
    createTheme({
      palette: light,
      typography: {
        button: {
          textTransform: 'none',
          fontWeight: 'medium' as React.CSSProperties['fontWeight'],
        },
      },
      zIndex: {
        appBar: 3,
      },
      components: {},
    }),
  );

export default getTheme;
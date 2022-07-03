import * as React from 'react';
import type { AppProps } from 'next/app';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import '../lib/i18n';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import createEmotionCache from '../utils/createEmotionCache';
import getTheme from 'themes';
import '../styles/globals.css';
interface PropsPage extends AppProps {
  emotionCache?: EmotionCache;
  Component: React.ReactElement;
}

const clientSideEmotionCache = createEmotionCache();

const App: React.FunctionComponent<PropsPage> = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={getTheme()}>
          <CssBaseline />
          <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  )
}

export default App;
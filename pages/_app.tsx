import * as React from 'react';
import { useState } from 'react';
import type { AppProps } from 'next/app';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { ThemeProvider, CssBaseline, createTheme } from '@mui/material';
import ModalProvider from '../context/modalContext';
import LocalizationProvider from '../context/i18nContext';
import '../lib/i18n';

// import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
// import { ReactQueryDevtools } from 'react-query/devtools';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import createEmotionCache from '../utility/createEmotionCache';
import getTheme from 'themes';
import '../styles/globals.css';
interface PropsPage extends AppProps {
  emotionCache?: EmotionCache;
}

const clientSideEmotionCache = createEmotionCache();

const App: React.FunctionComponent<PropsPage> = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={getTheme()}>
        <LocalizationProvider>
          {/* <ModalProvider> */}
            <CssBaseline />
            <Component {...pageProps} />
          {/* </ModalProvider> */}
        </LocalizationProvider>
      </ThemeProvider>
    </CacheProvider>
  )
}

export default App;
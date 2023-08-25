import { useToast } from 'hooks/useToast';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from 'theme';
import { store } from 'redux/store';
import { Provider } from 'react-redux';
import { HTMLHeader } from 'components';
import { appWithTranslation } from 'next-i18next';
import { CacheProvider } from '@emotion/react';
import { createEmotionCache } from 'theme/utils/emotion-cache';
import { AppPropsWithLayout } from '../interfaces/pages';

const clientSideEmotionCache = createEmotionCache();

function App({ Component, pageProps, ...rest }: AppPropsWithLayout) {
  const { emotionCache = clientSideEmotionCache } = rest;
  const { Toast, handleClick } = useToast();

  const getLayout = Component.getLayout ?? ((page: any) => page);

  return (
    <Provider store={store}>
      <HTMLHeader />
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {getLayout(<Component {...pageProps} showToast={handleClick} />)}
        </ThemeProvider>
      </CacheProvider>
      <Toast />
    </Provider>
  );
}

export default appWithTranslation(App);

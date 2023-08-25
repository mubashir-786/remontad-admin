import Head from 'next/head';
import { memo } from 'react';
// import { APP_NAME } from 'locales';
// import { useI18n } from 'hooks/useI18n';

type Props = {
  heading?: string;
};

function HTMLHeaderComponent({ heading = '' }: Props) {
  // const { translate } = useI18n();
  // const appTitle = !heading
  //   ? translate(APP_NAME)
  //   : `${translate(APP_NAME)} - ${translate(heading)}`;
  return (
    <Head>
      <title>Remontad</title>
    </Head>
  );
}

export const HTMLHeader = memo(HTMLHeaderComponent);

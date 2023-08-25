import { useCallback } from 'react';
import { useTranslation } from 'next-i18next';

export const useI18n = () => {
  const { t } = useTranslation();

  const translate = useCallback(
    (key: string) => {
      return t(key);
    },
    [t],
  );

  return { translate };
};

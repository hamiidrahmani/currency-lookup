import React from 'react';
import { Container } from './assets/styles';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  return <Container>{t('copyright')}</Container>;
};

export default Footer;

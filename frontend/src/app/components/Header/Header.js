import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import locales from '../../locales';
import {
  Container,
  LogoContainer,
  Logo,
  Title,
  LanguageContainer,
  Language,
} from './assets/styles';
import { getAllLanguages, formatLanguageName } from '../../utils';
import LogoSrc from '../../assets/images/header-logo.png';

const languages = getAllLanguages(locales);

const Header = () => {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState(i18n.languages[0]);

  const changeLanguage = (e, selectedLang) => {
    e.preventDefault();
    setLang(selectedLang);
    i18n.changeLanguage(selectedLang);
  };

  return (
    <Container>
      <LogoContainer>
        <Logo src={LogoSrc} alt={t('title')} title={t('title')} />
        <Title>{t('title')}</Title>
      </LogoContainer>
      <LanguageContainer>
        {languages.map((language) => (
          <Language key={language}>
            <a
              href="#en"
              className={lang === language ? 'active' : ''}
              onClick={(e) => changeLanguage(e, language)}
            >
              {formatLanguageName(language)}
            </a>
          </Language>
        ))}
      </LanguageContainer>
    </Container>
  );
};

export default Header;

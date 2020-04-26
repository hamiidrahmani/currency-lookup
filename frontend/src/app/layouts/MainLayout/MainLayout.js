import React from 'react';
import { Container } from './assets/styles';
import { MainWrapper } from '../assets/SharedStyles';

const MainLayout = ({ children }) => {
  return (
    <Container>
      <MainWrapper>{children}</MainWrapper>
    </Container>
  );
};

export default MainLayout;

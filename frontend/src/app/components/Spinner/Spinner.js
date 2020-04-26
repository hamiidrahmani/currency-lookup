import React from 'react';
import PropTypes from 'prop-types';
import { Container, Icon, Text } from './assets/styles';

const Spinner = ({ text = 'Loading...' }) => (
  <Container>
    <Icon />
    <Text>{text}</Text>
  </Container>
);

Spinner.propTypes = {
  text: PropTypes.string,
};
export default Spinner;

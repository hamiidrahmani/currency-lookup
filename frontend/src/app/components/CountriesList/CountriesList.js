import React from 'react';
import { useTranslation } from 'react-i18next';
import { Table, Thead, Tbody, Row, Column } from '../../layouts/assets/SharedStyles';
import CountriesListItem from '../CountriesListItem';

const CountriesList = ({ countries }) => {
  const { t } = useTranslation();
  return (
    <Table>
      <Thead>
        <Row>
          <Column>{t('country')}</Column>
          <Column>{t('population')}</Column>
          <Column>{t('currency')}</Column>
          <Column>SEK</Column>
        </Row>
      </Thead>
      <Tbody>
        {countries.map((country) => {
          return <CountriesListItem key={country.name} country={country}></CountriesListItem>;
        })}
      </Tbody>
    </Table>
  );
};

export default CountriesList;

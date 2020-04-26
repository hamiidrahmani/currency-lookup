import React, { useState } from 'react';
import { SEKInput } from './assets/styles';
import { Row, Column } from '../../layouts/assets/SharedStyles';

const CountriesListItem = ({ country }) => {
  const [base, setBase] = useState(1);
  return (
    <Row key={country.name}>
      <Column>{country.name}</Column>
      <Column>{Number(country.population).toLocaleString()}</Column>
      <Column>
        {country.currencies.map((currency) => {
          return (
            <div key={currency.code}>
              <strong>
                {Number((base * currency.exchangeRateToSEK).toFixed(2)).toLocaleString()}
              </strong>{' '}
              ({currency.code})
            </div>
          );
        })}
      </Column>
      <Column>
        <SEKInput value={base} onChange={(e) => setBase(Number(e.target.value))} />
      </Column>
    </Row>
  );
};

export default CountriesListItem;

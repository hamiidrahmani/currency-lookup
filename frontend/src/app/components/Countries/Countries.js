import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Container, SearchContainer, SearchInput, SearchResult, SearchItem } from './assets/styles';
import Spinner from '../Spinner';
import CountriesList from '../CountriesList';

const Countries = ({ country, fetchCountriesStartAsync }) => {
  const { t } = useTranslation();
  const [keyword, setKeyword] = useState('');
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [selectedCountries, setSelectedCountries] = useState([]);

  useEffect(() => {
    if (keyword.length > 1) {
      const filtered = country.countries.filter(
        (countryItem) => countryItem.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1
      );
      setFilteredCountries(filtered);
    } else {
      setFilteredCountries([]);
    }
  }, [keyword, country.countries]);

  useEffect(() => {
    fetchCountriesStartAsync();
  }, [fetchCountriesStartAsync]);

  if (country.isFetching) {
    return <Spinner />;
  }

  return (
    <Container>
      <SearchContainer>
        <SearchInput
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder={t('search_placeholder')}
        />
        <SearchResult>
          {filteredCountries.map((country) => {
            return (
              <SearchItem
                onClick={() => {
                  if (selectedCountries.filter((item) => item.name === country.name).length === 0) {
                    setSelectedCountries([...selectedCountries, country]);
                  }
                  setKeyword('');
                }}
                key={country.name}
              >
                {country.name}
              </SearchItem>
            );
          })}
        </SearchResult>
      </SearchContainer>
      <CountriesList countries={selectedCountries} />
    </Container>
  );
};

export default Countries;

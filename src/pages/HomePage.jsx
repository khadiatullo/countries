import { useNavigate } from 'react-router-dom';

import { List } from '../components/List';
import { Card } from '../components/Card';
import { Controls } from '../components/Controls';
import { useDispatch, useSelector } from 'react-redux';
import { selectVisableCountries, selectCountriesInfo } from '../store/countries/countries-selectors';
import { useEffect } from 'react';
import { loadCountries } from '../store/countries/countries-actions';
import { selectAllControls } from '../store/controls/controls-selectors';

export const HomePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {search, region} = useSelector(selectAllControls)
  const countries = useSelector(state => selectVisableCountries(state, {search, region}));
  const {status, error, qty} = useSelector(selectCountriesInfo);

  useEffect(() => {
    if(!qty){
      dispatch(loadCountries())
    }
  }, [qty, dispatch])

  return (
    <>
      <Controls />

      {error && <h1>ERROR</h1>}

      {status === 'loading' && <h3>LOADING...</h3>}

      {status === 'received' && 
      (
        <List>
              {countries.map((c) => {
                const countryInfo = {
                  img: c.flags.png,
                  name: c.name,
                  info: [
                    {
                      title: 'Population',
                      description: c.population.toLocaleString(),
                    },
                    {
                      title: 'Region',
                      description: c.region,
                    },
                    {
                      title: 'Capital',
                      description: c.capital,
                    },
                  ],
                };

                return (
                  <Card
                    key={c.name}
                    onClick={() => navigate(`/country/${c.name}`)}
                    {...countryInfo}
                  />
                );
              })}
        </List>
      )
      }

    </>
  );
};

import React from 'react';
import Title from '../components/Title';
import Selector from '../components/Selector';
import Results from '../components/Results';

const TopPage = (props) => {
  return (
    <div className="top-page-container">
      <div>
      <Title />
      <Selector countriesJson={props.countriesJson} setCountry={props.setCountry} getCountryData={props.getCountryData} />
      <Results countryData={props.countryData} />
      </div>
    </div>
  )
}

export default TopPage

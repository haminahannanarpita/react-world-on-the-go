import React, { use } from 'react';
import Country from './Country';

const Countries = ({countriesPromise}) => {
    const countriesData = use(countriesPromise);
    const countires = countriesData.countries;
    console.log(countires);
    return (
        <div>
            <h1>Countires components: {countires.length} </h1>
            {
                countires.map(country => <Country key={country.cca3.cca3} country={country}></Country>)
            }
        </div>
    );
};

export default Countries;
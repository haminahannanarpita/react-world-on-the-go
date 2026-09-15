import React, { use, useState } from 'react';
import Country from './Country';

const Countries = ({ countriesPromise }) => {
    const countriesData = use(countriesPromise);
    const countires = countriesData.countries;

    const [visitedCounties, setVisitedCounties]=useState([]);
    const handleVisitedCountry =(country)=>{
        console.log("country was visited", country);
        const newVisitedCountries = [...visitedCounties, country]
        setVisitedCounties(newVisitedCountries)
    }
    console.log(countires);
    return (
        <div>
            <h1>Countires components: {countires.length} </h1>
            <h3 className='font-semibold'>Total country Visited:{visitedCounties.length}</h3>
            <ol>{
                visitedCounties.map(country => <li key={country.cca3.cca3}>{country.name.common}</li>)
                }</ol>
            <div className='grid grid-cols-3 justify-center items-center gap-6 m-4'>
                {
                    countires.map(country => <Country key={country.cca3.cca3} country={country} handleVisitedCountry={handleVisitedCountry}></Country>)
                }
            </div>

        </div>
    );
};

export default Countries;
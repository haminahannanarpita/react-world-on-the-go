import React, { use, useState } from 'react';
import Country from './Country';

const Countries = ({ countriesPromise }) => {
    const countriesData = use(countriesPromise);
    const countires = countriesData.countries;

    const [visitedCounties, setVisitedCounties] = useState([]);
    const [visitedFlag, setVisitedFlag] = useState([])


    const handleVisitedCountry = (country) => {
        console.log("country was visited", country);
        const newVisitedCountries = [...visitedCounties, country]
        setVisitedCounties(newVisitedCountries);
        setVisitedFlag(visitedFlag)
    }
    const handleVisitedFlag = (flag) => {
        console.log("visited flag need to show", flag);
        const newVisitedFlag = [...visitedFlag, flag]
        setVisitedFlag(newVisitedFlag)

    }
    return (
        <div>
            <h1>Countires components: {countires.length} </h1>
            <h3 className='font-semibold'>Total country Visited:{visitedCounties.length}</h3>
            <h3 className='font-semibold'>Total Visited CountriesFlag:{visitedFlag.length}</h3>

            <ol>{
                visitedCounties.map(country => <li key={country.cca3.cca3}>{country.name.common}</li>)
            }
            </ol>
            <div className='w-[150px] h-[150px] flex justify-between items-center gap-2'>
                {
                    visitedFlag.map(flag => <img src={flag}></img>)
                }
            </div>

            <div className='grid grid-cols-3 justify-center items-center gap-6 m-4'>
                {
                    countires.map(country => <Country key={country.cca3.cca3} country={country} handleVisitedCountry={handleVisitedCountry}
                        handleVisitedFlag={handleVisitedFlag}></Country>)
                }
            </div>

        </div>
    );
};

export default Countries;
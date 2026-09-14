import React, { useState } from 'react';

const Country = ({ country, handleVisitedCountry }) => {
    const Name = country.name.common;
    const Flag = country.flags.flags.png;
    const population = country.population.population;
    const region = country.region.region;
    const area = country.area.area;

    console.log(Name, Flag, population, region);
    const [visited, setVisitede]=useState(false)
    const handleVisited = ()=>{
    //   setVisitede(visited? false:true)
    setVisitede(!visited)
    handleVisitedCountry(country)
       
    }
    return (
        <div className=' border-2 border-blue-600 rounded-2xl shadow-2xl items-center text-center '>
            <div className={`p-2 rounded-2xl ${visited ? "bg-green-400 ": "bg-red-400 text-white"}`}>
                <img src={Flag} alt="" />
                <h1 className='font-semibold'>Name:{Name}</h1>
                <h2>Population:{population}</h2>
                <h3>Region:{region}</h3>
                <h3>Area:{area}
                    <span className='text-blue-500 font-medium'>{area>300000 ?"Big country":"Small country"}</span></h3>

                <button className='border-2 rounded-2xl p-2 bg-blue-600' onClick={handleVisited}>{visited?"Visited":"Not Visited"}</button>
                
            </div>

        </div>
    );
};

export default Country;
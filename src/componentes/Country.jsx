import React from 'react';

const Country = ({country}) => {
    const Name=country.name.common;
    const Flag= country.flags.flags.png;
    const population = country.population.population;
    const region = country.region.region;
    console.log(Name, Flag,population,region);
    return (
        <div>
            <h1>Name:{Name}</h1>
            <h2>Population:{population}</h2>
            <h3>Region:{region}</h3>
            <img src={Flag} alt="" />
        </div>
    );
};

export default Country;
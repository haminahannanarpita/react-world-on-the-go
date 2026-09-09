import React, { use } from 'react';

const Countries = ({countriesPromise}) => {
    const countriesData = use(countriesPromise);
    const countires = countriesData.countries;
    console.log(countires);
    return (
        <div>
            <h1>Countires components: {countires.length} </h1>
        </div>
    );
};

export default Countries;
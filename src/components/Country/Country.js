import React from 'react';
import './Country.css';
const Country = (props) => {
    const {name,population,flag,region} = props.country;
    const addCountry = props.addCountry;
    return (
        <div className="Country">
           <div className="country">
           <img style={{height:'50px'}} src={flag} alt="" srcset=""/>
           <h4>Name : {name}</h4> 
           <p>Population : {population}</p>
           <p>Region name : {region}</p>
           <button onClick={ () =>addCountry(props.country)}>Add Country</button>   
           </div>
        </div>
    );
};

export default Country;
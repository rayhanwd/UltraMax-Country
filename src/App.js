import './App.css';
import { useEffect, useState } from 'react';
import Country from './components/Country/Country';
import Cart from './components/Country/Cart/Cart';

function App() {
  const [countries, setcountries]= useState([]);

const [cart,setCart] = useState([]); 

useEffect(() => {
  fetch('https://restcountries.eu/rest/v2/all')
  .then(res => res.json())
  .then(data=>{
    setcountries(data);
    console.log(data);
    const names = data.map(Country => Country);
    console.log(names);
  })
}, []);

const addCountry = (country) =>{
  const newCart = [...cart, country];
  setCart(newCart);
}
  return (
    <div className="App">
      <div className="text-content">
      <h2>Country loaded : {countries.length}</h2>
      <h3>Country added : {cart.length}</h3>
      <Cart cart={cart}></Cart>
      </div>
        {
          countries.map(country =><Country country = {country} addCountry={addCountry} key={country.alpha3Code}></Country>)
        }
    
      
    </div>
  );
}

export default App;

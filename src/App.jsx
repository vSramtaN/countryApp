import axios from 'axios'
import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [countries, setCountries] = useState([])

  async function getApi() {
    try {
      const response = await axios.get(`https://restcountries.com/v3.1/all`);
      console.log(response);
      setCountries(response.data)
    } catch (error) {
      console.error(error);
    }
  }
  console.log("Country",countries)

  useEffect(() => {
    getApi();
  }, [])


  return (
    <>
    <div className=' flex items-center flex-wrap bg-gray-400 w-[100%] h-[100%] '>
      {countries.map(country => {
        return <div className=' items-center border w-[370px] h-[190px] rounded flex-wrap mt-1 mr-1' key={country.name.common}>
          <h2>Ülke: {country.name.common}</h2>

          <h4>Başkent: {country.capital}</h4>

          <p>
            <img className='item-center w-[42%]' src={country.flags.png} alt={country.flags.alt}></img>
          </p>
      
        </div>
      })}
    </div>
    </>
  )



}

export default App

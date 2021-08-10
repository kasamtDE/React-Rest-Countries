import React,{useEffect,useState} from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Home'
import Details from './Details'

function App() {

  const [countries , setCountries] = useState([])
  const [allData, setAllData] = useState([])

    useEffect(() =>{

      const url = "https://restcountries.eu/rest/v2/all"

      fetch(url)
      .then(response => response.json())
      .then(data => [setCountries(data),setAllData(data)])   
        
    },[])

    const filterCountries = (value) =>{
      const filteredArr = allData.filter((country) => country.name.toLowerCase().includes(`${value.toLowerCase()}`))

      setCountries(filteredArr)

    }

    

    const filterRegions = (region) =>{

      if(region === "All"){
        setCountries(allData)
        return;
      }

      const filteredRegion = allData.filter((country) => country.region === region)

      setCountries(filteredRegion)
    }

    const handleCountryClick = (country) =>{

      localStorage.setItem('country-detailed',JSON.stringify(country))

      setCountries(country)

    }

    

    const backClickCountry = () =>{

      setCountries(allData)
        
    }




  return (
      <div className = "Wrapper">
        <Router>
          <Routes>
            
            <Route exact path = "/details">  
              < Details countries = {countries} allData = {allData} backClickCountry = {backClickCountry}
               
              />                 
            </Route>
            <Route exact path = "/">

              < Home countries = {countries} filterCountries = {filterCountries} filterRegions = {filterRegions} allData = {allData} handleCountryClick = {handleCountryClick}/>
                
            </Route>
          </Routes>
        </Router>
         


    
      </div>
  );
}

export default App;

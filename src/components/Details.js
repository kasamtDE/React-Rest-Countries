import React,{useContext} from 'react'
import Header from './Header'
import {BiLeftArrowAlt} from "react-icons/bi"
import {Link,useParams } from 'react-router-dom'
import {myContext} from "./context"
import "./Details.css"

export default function Details() {


    const {allData,setCountries,isLoading} = useContext(myContext)


    const {name} = useParams()


    const handleBorderCountry = (code) =>{

        const borderCountry = allData.filter(country => country.alpha3Code.includes(`${code}`))
    
        setCountries(borderCountry[0])
  
    }

    const getPath = (code) =>{

        return allData.filter(country => country.alpha3Code.includes(`${code}`))[0].name



    }


    const backClickCountry = () =>{
  
        setCountries(allData)
          
    }
  
  
    return (
        <div>
            <>
             {isLoading ? "Loading..." :
            <>
                {allData.filter(country => country.name === name).map((country,index) =>
                    
                    {

                        return(
                            <div key = {index} >
                                < Header />
                                    <div className="detailed-container">
                                        <button onClick = { () => {backClickCountry()}} className="back-button" >
                                        <Link className ="back-link" to = "/" >

                                            < BiLeftArrowAlt className = "left-arrow" />
                                            Back
                                        </Link>
                                        </button>

                                        <div className = "country-details-container">
                                            <img className ="detailed-flag" src = {country.flag}></img>
                                            <div className = "country-details">

                                                <h3 className = "detailed-country-name">{country.name}</h3>
                                                <div className = "detailed-info">
                                                    <div className = "detailed-info-left">
                                                        <p>Native Name: {country.nativeName} </p>
                                                        <p>Population: {country.population} </p>
                                                        <p>Region: {country.region}  </p>
                                                        <p>Sub Region: {country.subregion}  </p>
                                                        <p>Capital: {country.capital}  </p>
                                                    </div>

                                                    <div className = "detailed-info-right">
                                                        <p>Top Level Domain: {country.topLevelDomain}  </p>
                                                        <div>Currencies: {country.currencies.map(country => 
                                                        <span key = {country.code}> {country.code}  </span> ) }  </div>
                                                        
                                                        <div>Languages: {country.languages.map(country => 
                                                            <span key = {country.name}> {country.name}  </span> ) } 

                                        
                                                        </div>
                                                        
                                                    </div>

                                                </div>
                                                {country.borders.length > 0 ? <div className = "border-container">
                                                    Border Countries:
                                                    {country.borders.map((code) => {
                                                        return(
                                                            
                                                            <Link key = {code} className = "link-to-border" to = 
                                                            {`/details/${getPath(code)}`} >
                                                                
                                                            
                                                                <button className = "borders" onClick = {
                                                                () => handleBorderCountry(`${code}`)} > {code} </button>
                                                            </Link>
                                                            
                                                        )
                                                    })}
                                                </div> : ""}

                                            </div>
                                        </div>
                                    </div>
                            </div>

                        )
                    })}     
                
            </>
            

            }
            </>
            
        </div>
    )
}

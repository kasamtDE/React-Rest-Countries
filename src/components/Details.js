import React,{useState} from 'react'
import Header from './Header'
import {BiLeftArrowAlt} from "react-icons/bi"
import {Link } from 'react-router-dom'
import "./Details.css"

export default function Details({backClickCountry,allData}) {

    const [getCountry, setGetCountry] = useState(JSON.parse(localStorage.getItem('country-detailed')))

    const handleBorderCountry = (code) =>{

        const borderCountry = allData.filter(country => country.alpha3Code.includes(`${code}`))

        localStorage.setItem("country-detailed",JSON.stringify(borderCountry[0]))
  
        setGetCountry(borderCountry[0])
  
    }
    
    return (
        <div>
            < Header />
            <div className="detailed-container">
                    <button onClick = { () => {backClickCountry()}} className="back-button" >
                    <Link className ="back-link" to = "/" >

                        < BiLeftArrowAlt className = "left-arrow" />
                        Back
                    </Link>
                    </button>

                    <div className = "country-details-container">
                        <img className ="detailed-flag" src = {getCountry.flag}></img>
                        <div className = "country-details">

                            <h3 className = "detailed-country-name">{getCountry.name}</h3>
                            <div className = "detailed-info">
                                <div className = "detailed-info-left">
                                    <p>Native Name: {getCountry.nativeName} </p>
                                    <p>Population: {getCountry.population} </p>
                                    <p>Region: {getCountry.region}  </p>
                                    <p>Sub Region: {getCountry.subregion}  </p>
                                    <p>Capital: {getCountry.capital}  </p>
                                </div>

                                <div className = "detailed-info-right">
                                    <p>Top Level Domain: {getCountry.topLevelDomain}  </p>
                                    <div>Currencies: {getCountry.currencies.map(country => 
                                    <span key = {country.code}> {country.code}  </span> ) }  </div>
                                    
                                    <div>Languages: {getCountry.languages.map(country => 
                                        <span key = {country.name}> {country.name}  </span> ) } 

                       
                                     </div>
                                    
                                </div>

                            </div>
                            {getCountry.borders.length > 0 ? <div className = "border-container">
                                Border Countries:
                                {getCountry.borders.map((country) => {
                                    return(
                                        <button key = {country} className = "borders" onClick = {
                                            () => handleBorderCountry(`${country}`)} > {country} </button>
                                    )
                                })}
                            </div> : ""}

                        </div>
                </div>
            </div>
        </div>
    )
}

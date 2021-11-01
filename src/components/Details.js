import React,{useContext} from 'react'
import Header from './Header'
import {BiLeftArrowAlt} from "react-icons/bi"
import {Link,useParams } from 'react-router-dom'
import {myContext} from "./context"
import HashLoader from "react-spinners/HashLoader"
import "./Details.css"

export default function Details() {


    const {allData,setCountries,isLoading,setIsLoading,getDetailsPath} = useContext(myContext)


    const {name} = useParams()


    const handleBorderCountry = (code) =>{

        const borderCountry = allData.filter(country =>country.cca3 === code)[0]
        setCountries(borderCountry)
  
    }

    const getPath = (code) =>{

        const getCountry = allData.filter(country => country.cca3.includes(code))

        return getDetailsPath(getCountry[0].name.common)


    }



    const backClickCountry = () =>{
        setCountries(allData)      
    }
    
    return (
        <div>
            <>
             {isLoading ? <div className = "loader"> <HashLoader color = {"#01F4C4"} loading={isLoading}  size={50} />
                </div> :
            <>
                {allData.filter(country => getDetailsPath(`${country.name.common}`) === name).map((country,index) =>
                    {
                        
                        console.log(country)

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
                                            <img className ="detailed-flag" src = {country.flags.svg} alt = "detailed-country-flag" />
                                            <div className = "country-details">
                                                <h3 className = "detailed-country-name">{country.name.common}</h3>
                                                <div className = "detailed-info">
                                                    <div className = "detailed-info-left">
                                                        <p>Native Name: {country.name.official}</p>
                                                        <p>Population: {country.population} </p>
                                                        <p>Region: {country.region}   </p>
                                                        <p>Sub Region: {country.subregion}  </p>
                                                    </div>

                                                    <div className = "detailed-info-right">
                                                        <div>Capital: {country.capital}  </div>
                                                        
                                                        
                                                        <div>Languages: {Object.values(country.languages).join(", ")}
                                                        </div>
                                                       
                                                        
                                                    </div>

                                                </div>
                                                {country.hasOwnProperty("borders") ? <div className = "border-container">
                                                    Border Countries:
                                                    {country.borders.map((code) => {
                                                        return(
                                                            
                                                            <Link key = {code} className = "link-to-border" to = 
                                                            {`/details/${getPath(`${code}`)}`} >
                                                                
                                                            
                                                                <button className = "borders" onClick = {
                                                                () => handleBorderCountry(`${code}`)} > {code} </button>
                                                            </Link>
                                                            
                                                        )
                                                    })}
                                                </div> : <div className = "border-container"> <strong>No Border</strong> </div>}

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

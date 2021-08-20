import React,{useContext} from 'react'
import {Link} from "react-router-dom"
import {myContext} from "./context"
import "./Country.css"

export default function Country() {

    const {countries,handleCountryClick} = useContext(myContext)

    
    return (
        <div >          
                <div className = "grid-container">
                    {countries.map((country) =>{

                        return( 
                                <div onClick = {() => handleCountryClick(country)} key = {country.name} className = "country-container"> 
                                    <Link  className = "link-to-details" to = {`/details/${country.name}`} >
                                        <img className = "country-flag" src = {country.flag}></img>
                                        <div className = "country-info"> 
                                            <h3>{country.name}</h3>
                                            <p>Population: {country.population} </p> 
                                            <p>Region: {country.region} </p>
                                            <p>Capital: {country.capital} </p> 
                                        </div>
                                    </Link>
                                </div>
                           

                        )


                    })}
                    
                </div>
                            
        </div>
    )


}

import React from 'react'
import Country from "./Country.js"
import Search from "./Search.js"
import Header from './Header.js'
import "./Home.css"

export default function Home({countries,filterCountries,filterRegions,allData,handleCountryClick}) {
    

    return (
        <div>
            <div> 
                < Header  />           
                <main>
                    <div>
                        <Search countries = {countries} filterCountries = {filterCountries} filterRegions = {filterRegions} allData = {allData} />
                    </div>
                    <div className="country-main-container">
                        < Country countries = {countries} handleCountryClick = {handleCountryClick}  />
                    </div>
                </main>
            </div>
        </div>

    )
}

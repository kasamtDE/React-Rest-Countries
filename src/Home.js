import React from 'react'
import Country from "./Country.js"
import Search from "./Search.js"
import Header from './Header.js'
import "./Home.css"

export default function Home() {

    
    

    return (
        <div>
            <div> 
                < Header  />           
                <main>
                    <div>
                        <Search  />
                    </div>
                    <div className="country-main-container">
                        < Country />
                    </div>
                </main>
            </div>
        </div>

    )
}

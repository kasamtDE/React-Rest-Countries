import React,{useContext} from 'react'
import Country from "./Country.js"
import Search from "./Search.js"
import Header from './Header.js'
import "./Home.css"
import { myContext } from './context.js'
import HashLoader from "react-spinners/HashLoader";



export default function Home() {

    const {isLoading} = useContext(myContext)



    return (
        <div>
            <div> 
                {isLoading ? 
                <div className = "loader"> <HashLoader color = {"#01F4C4"} loading={isLoading}  size={50} />
                </div>
                :  
                <>  
                    < Header  />           
                    <main>
                        <div>
                            <Search  />
                        </div>
                        <div className="country-main-container">
                            < Country />
                        </div>
                    </main>
                </>
                }
                
            </div>
        </div>

    )
}

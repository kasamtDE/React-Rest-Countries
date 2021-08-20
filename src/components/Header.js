import React,{useState} from 'react'
import {BsMoon } from "react-icons/bs"

export default function Header() {


    const [mode , setMode] = useState(true)


    const toggleMode = () =>{



        if(mode){

            document.documentElement.classList.toggle("dark-mode")
            setMode(!mode)

        }
        if(!mode){
            document.documentElement.classList.toggle("dark-mode")
            setMode(!mode)

        }

    }

    


    return (
        <div>
            <header>        
                <div className = "navbar">
                    <h2 >Where in the World? </h2>
                        
                    <div className = "mode-container"> <button className ="btn" onClick = { () => toggleMode()}>
                            <BsMoon className = "dark" />
                            <span>Change Mode</span>
                        </button>
                    </div>                      
                </div>              
            </header>           
        </div>
    )
}

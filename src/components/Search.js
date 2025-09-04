import React,{useState,useEffect, useContext} from 'react'
import "./Search.css"
import {AiOutlineSearch,AiOutlineArrowDown} from "react-icons/ai"
import {myContext} from "./context"



export default function Search() {

    const {filterCountries,allData,filterRegions} = useContext(myContext)

    


    const [showItems , setShowItems] = useState(false)

    const [search,setSearch] = useState("")


    const handleInput = (e) =>{

      setSearch(e.target.value)

  
  }

    useEffect(() =>{

        filterCountries(search)


    },[search])

    

    const toggleDropDown = () =>{

        setShowItems(!showItems)



    }

    
    const regions = allData && Array.isArray(allData) 
        ? ["All",...new Set(allData.map((item) => item.region))].filter(region => region.length >1)
        : ["All"]

  
    return (
        <div>
            <div className="search-main-container">            
                <div className = "search-container">
                    <AiOutlineSearch className = "search-icon"/>
                    <input type = "text" placeholder = "Search for a counry..." value = {search} onChange= {handleInput}>
                    
                    </input>

                    
                
                </div>   
                <div className = "dropdown-container">
                        <button onClick = {() => toggleDropDown ()} className = "dropdown-button">Filter by Region
                            < AiOutlineArrowDown className = "arrow-icon"/>
                        </button>
                        {showItems ? <div className = "region-container">{regions.map((region) => 
                        <button key = {region} onClick = {() => filterRegions(region)} className = "region">{region} </button>)} </div> : ""}
                </div> 
            </div>
        </div>
    )
}

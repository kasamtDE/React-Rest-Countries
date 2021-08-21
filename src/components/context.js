import {createContext,useState,useEffect} from 'react'

export const myContext = createContext()


export function AppContext({children}) {


    const [countries , setCountries] = useState([])
    const [allData, setAllData] = useState([])
    const [isLoading , setIsLoading] = useState(false)

    useEffect( () =>{

        setIsLoading(true)
  
        const url = "https://restcountries.eu/rest/v2/all"
  
        fetch(url)
        .then(response => response.json())
        .then(data =>  {return (setCountries(data),setAllData(data))}) 
        setIsLoading(false)
            
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
  
  
        setCountries(country)
  
      }
      
      const getDetailsPath = (countryName) =>{

        let path = countryName.replace(/\s/g,"")

        return path

    }
      
  
      
     

    return (
        <myContext.Provider value = {{
            countries
            ,setCountries
            ,allData
            ,setAllData
            ,handleCountryClick
            ,filterRegions
            ,filterCountries
            ,isLoading
            ,setIsLoading
            ,getDetailsPath
        }}>
          {children}
        </myContext.Provider>
    )
}

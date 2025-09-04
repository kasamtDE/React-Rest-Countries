import {createContext,useState,useEffect} from 'react'

export const myContext = createContext()


export function AppContext({children}) {


    const [countries , setCountries] = useState([])
    const [allData, setAllData] = useState([])
    const [isLoading , setIsLoading] = useState(false)

    const  fetchData =  async () =>{
      setIsLoading(true)  

      const url = "https://restcountries.com/v3.1/all?fields=name,population,region,capital,flags,cca3,subregion,languages,borders"

      try {
        const response = await fetch(url)
        const data = await response.json()
        setAllData(data)
        setCountries(data)
        setIsLoading(false)
        return data
      } catch (error) {
        console.error('Error fetching data:', error)
        setIsLoading(false)
        return []
      }

    }

    useEffect( () =>{

        fetchData()
        

    },[])

      
         

    
    const filterCountries = (value) =>{
        if (!allData || !Array.isArray(allData)) {
            console.log('allData is not ready yet');
            return;
        }
        const filteredArr = allData.filter((country) => country.name.common.toLowerCase().includes(`${value.toLowerCase()}`))
  
        setCountries(filteredArr)
  
      }
  
      
  
      const filterRegions = (region) =>{
        if (!allData || !Array.isArray(allData)) {
            console.log('allData is not ready yet');
            return;
        }
  
        if(region === "All"){
          setCountries(allData)
          return;
        }
  
        const filteredRegion = allData.filter((country) => country.region === region)
  
        setCountries(filteredRegion)
      }
  
      const handleCountryClick = (country) =>{

        // This function seems to be for navigation, not for setting countries
        // The countries state should remain as an array for the map function
        console.log('Country clicked:', country)

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

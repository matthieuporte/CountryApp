import { useState, useEffect } from 'react'
import axios from "axios";
import './style.css';
import CountryList from "./components/CountryList";
import CountryInfo from "./components/CountryInfo";
import countriesService from "./services/countries";

function App() {
  const [searchVal, setSearchVal] = useState('')
    const [countryList, setCountryList] = useState([])
    const [notification, setNotification] = useState("")
    const [country, setCountry] = useState(null)

    useEffect(() => {
        countriesService.get10First(searchVal).then(response => {
                if (typeof response === "string"){
                    setCountryList([])
                    setNotification(response)
                }
                else{
                    setCountryList(response)
                    setNotification("Here are some relevant results")
                }
            })
    }, [searchVal])


    const showData = name => {
        countriesService.getByName(name).then(response => {
            setCountry(response)
        })
    }

  const handleSearchValChange = (event) => {
    setSearchVal(event.target.value)
  }

  return (
      <div>
        <h1 className="center">Country app</h1>
        <p className="center">Get to know more about any country, happy learning !</p>
          <hr/>
          <div id="search">
              <input id="seachInput" value={searchVal} onChange={handleSearchValChange}/>
              <p>{notification}</p>
              <CountryList
                  list={countryList}
                  showData={showData}
              />
          </div>
          <div id="info">
              <CountryInfo data={country}/>
          </div>
      </div>
      )
}

export default App;

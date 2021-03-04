import {Cards, CountryPicker, Chart} from './components'
import {useState, useEffect} from 'react'

import {fetchGlobalData} from './api/index'

import './App.css'

const App = () => {
    const [cardData, setCardData] = useState(null)

    const setGlobalData = async () => {
        try {
            setCardData(await fetchGlobalData()) 
        } catch (error) {
            console.log(error);
        }       
    }

    useEffect(() => {
        setGlobalData()
    }, [])

    return (
        <div className='App'>
            <Cards {...cardData}/>
            <Chart {...cardData}/>
            <CountryPicker setCardData={setCardData}/>
        </div>
    )
}

export default App
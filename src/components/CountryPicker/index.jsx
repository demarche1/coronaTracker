import './countryPicker-modules.css'
import { useState, useEffect } from 'react'
import { fetchCountries, fetchDataFromCountrySelected, fetchGlobalData } from '../../api/index'

const CountryPicker = ({ setCardData }) => {

    const [countries, setCountries] = useState([])

    const setCountriesData = async () => {
        setCountries(await fetchCountries())
    }

    const setGlobalData = async () => {
        setCardData(await fetchGlobalData())
    }

    const setDataFromSelected = async (country) => {
        country === 'global' ? setGlobalData() : setCardData(await fetchDataFromCountrySelected(country))
    }

    useEffect(() => {
        setCountriesData()
    }, [setCountries])

    return (
        <div className='country-picker-container'>
            <select onChange={(e) => { setDataFromSelected(e.target.value) }} className='country-select'>
                <option value='global'>
                    Global
                </option>
                {countries.map((country) => {
                    return (
                        <option key={country} value={country}>{country}</option>
                    )
                })}
            </select>
        </div>
    )
}

export default CountryPicker
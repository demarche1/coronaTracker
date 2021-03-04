import Axios from 'axios'
const URL = 'https://covid19.mathdro.id/api'

export const fetchGlobalData = async () => {
    try {
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await Axios.get(URL);
        return {
            confirmed,
            recovered,
            deaths,
            lastUpdate
        };
    } catch (error) {
        console.log(error);
    }
}

export const fetchCountries = async () => {
    try {
        const { data: { countries } } = await Axios.get(`${URL}/countries`);
        return countries.map(country => country.name);
    } catch (error) {

    }
}


export const fetchDataFromCountrySelected = async (country) => {
    try {
        const { data: { confirmed, deaths, recovered, lastUpdate } } = await Axios.get(`${URL}/countries/${country}`)
        return {
            confirmed,
            deaths,
            recovered,
            lastUpdate
        };
    } catch (error) {
        console.log(error);
    }
}
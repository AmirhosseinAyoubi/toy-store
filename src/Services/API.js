import axios from "axios"

const BASE_URL = "https://mocki.io/v1/4f8e458b-40a5-4a35-a0cc-400f82c471a4"


export const get = async(url) => {

    const response = await axios.get(`${BASE_URL}`)
    return response.data
}
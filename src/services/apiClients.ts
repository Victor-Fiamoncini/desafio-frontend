import axios from 'axios'

export const pokeApi = axios.create({ baseURL: process.env.POKEAPI_URL })

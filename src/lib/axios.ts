import axios from "axios"


const key = 'oRQxmJ5tNJvT6LlL69BoGPr5Uk2LC0imj0E471AJ'

export const apodAPI = axios.create({
    baseURL: `https://api.nasa.gov/planetary/apod?api_key=${key}`
})
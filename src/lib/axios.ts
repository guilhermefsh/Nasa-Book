import axios from "axios"

export const key = 'oRQxmJ5tNJvT6LlL69BoGPr5Uk2LC0imj0E471AJ'

export const apodAPI = axios.create({
    baseURL: `https://api.nasa.gov/planetary/apod?api_key=${key}`
})

export const galleryAPI = axios.create({
    baseURL: 'https://images-api.nasa.gov/search?'
})

export const marsApi = axios.create({
    baseURL: `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos`
})
import axios from "axios"

const token = import.meta.env.VITE_API_KEY

const server = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    Authorization: `Bearer ${token}`
  }
})

export { server }
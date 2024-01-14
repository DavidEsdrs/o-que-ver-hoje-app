import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from "styled-components"
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import { register } from "swiper/element/bundle"

const queryClient = new QueryClient()

register()

const theme = {
  mainColor: "#44355B",
  secondaryColor: "#DEB841",
  neutralColor: "#8D99AE"
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)

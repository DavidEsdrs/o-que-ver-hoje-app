import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from "styled-components"
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import { register } from "swiper/element/bundle"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Movies } from "./pages/Movies/Movies.jsx"
import { Series } from "./pages/Series/Series.jsx"
import { Recomendations } from "./components/Recomendations/Recomendations.jsx"

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
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element={<App />}>
              <Route path="/" element={<Recomendations />} />
              <Route path="/filmes" element={<Movies />} />
              <Route path="/series" element={<Series />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)

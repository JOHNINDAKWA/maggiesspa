import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BookingProvider } from "./Context/BookingContext.jsx";

createRoot(document.getElementById('root')).render(
<BookingProvider> 
    <App />
  </BookingProvider>
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import '../tailwind.config.js'
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { ToastContainer } from 'react-toastify';

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(

  <QueryClientProvider client={queryClient}>
    <ToastContainer autoClose={3000}></ToastContainer>
    <App />
  </QueryClientProvider>

)

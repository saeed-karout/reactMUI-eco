import React from 'react'
import { I18nextProvider } from 'react-i18next';

import ReactDOM from 'react-dom/client'
import i18n from './i18n'
import {BrowserRouter} from "react-router-dom"
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './Redux/store.js'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>

        <Provider store={store}>
         <I18nextProvider i18n={i18n}>

              <App />
          </I18nextProvider>
        </Provider>
        
    </BrowserRouter>
  </React.StrictMode>,
)

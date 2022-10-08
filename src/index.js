import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { render } from 'react-dom'
import { ThemeProvider } from './GloabalComponents/ThemeProvider'
import {CartProvider} from 'react-use-cart'

render(
  <React.StrictMode>
    <ThemeProvider>
      <CartProvider>
        <App />
      </CartProvider>
      
    </ThemeProvider>

  </React.StrictMode>

,document.getElementById('root'))

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <ThemeProvider>
//         <App />
//       </ThemeProvider>

//     </BrowserRouter>


//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

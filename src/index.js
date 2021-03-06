import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import { CartProvider } from './components/Cart';


ReactDOM.render(
  <React.StrictMode>
    <CartProvider>
         <App />
    </CartProvider>   
  </React.StrictMode>,
  document.getElementById('root')
);


import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  // Injeta um HTML ou React component uma função que retorna um HTML (JSX)
  // dentro do elemento especificado
  // nesse caso no elemento com id root
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);



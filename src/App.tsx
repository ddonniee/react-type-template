import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import routes from './routes';
import Sample from './views/Sample';

const App: React.FC = () => {
  
  console.log(routes)
  return (
    <BrowserRouter>
      <Routes>
        {
          routes.map((each, index) => {
            return (
            <Route
              key={`route-${index}`}
              path={each.path}
              Component={each.element}
              />
            )
          })
        }
      </Routes>
    </BrowserRouter>
 )
}

export default App;

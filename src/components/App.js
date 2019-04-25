import React from 'react';
import Header from './Layouts/Header';
import Routers from "./Routers";

const App = () => {
  return (
    <div className="app">
        <Header/>
        <Routers/>
    </div>
  );
};

export default App;

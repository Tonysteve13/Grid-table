import React from 'react';
import './App.css';
import SalesGrid from './components/SalesGrid'; // Import the SalesGrid component


function App() {
  return (
    <div className="App">
      <h1>Sales Grid Tbl</h1>
      <SalesGrid /> {/* Render the SalesGrid component */}
    </div>
  );
}

export default App;

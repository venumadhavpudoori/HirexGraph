import React from "react";
import './App.css';
import LineChart from "./components/LineChart";
//import DataFetching from "./components/DataFetching";


function App() {
  return (
    <div className="App">
      <div className="chart">
        <LineChart />
        {/* <DataFetching /> */}
      </div>
    </div>
  );
}

export default App;

import logo from "./logo.svg";
import "./App.css";
import Papa from "papaparse";
import { useState, useEffect } from "react";

function App() {
  const [carData, setCardata] = useState([]);
  const [year, setYear] = useState(null);

  useEffect(() => {
    console.log(carData);
    // for (let i = 1; i < carData.length; i++) {
    //   console.log(carData[i]);
    // }
  }, [carData]);

  function yearChange(e) {
    setYear(e.target.value);
  }

  function filterCarlist() {
    for (let i = 1; i < carData.length; i++) {
      if (carData[i][0] === year) {
        console.log(carData[i]);
      }
    }
  }

  return (
    <div className="App">
      <input
        type="file"
        accept=".csv,.xlsx,.xls, .txt"
        onChange={(e) => {
          const files = e.target.files;
          console.log(files);
          if (files) {
            console.log(files[0]);
            Papa.parse(files[0], {
              complete: function (results) {
                setCardata(results.data);
              },
            });
          }
        }}
      />
      <input
        type="number"
        onChange={(e) => {
          yearChange(e);
        }}
      />
      <button
        onClick={(e) => {
          filterCarlist();
        }}
      >
        Console cars
      </button>
    </div>
  );
}

export default App;

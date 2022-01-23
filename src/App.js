import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import DataTable from 'react-data-table-component';
import React, { useEffect, useState } from "react";

import styled from 'styled-components';




const columns = [
    {
      name: 'Station ID',
      selector: row => row.StationID,
      sortable: true,

    },
    {
      name: 'Province',
      selector: row => row.Province,
      sortable: true,
    },
    {
      name: 'Address',
      selector: row => row.Address,
      sortable: true,
    },
    {
      name: 'Project',
      selector: row => row.Project,
      sortable: true,
    },
    {
      name: 'Station Type',
      selector: row => row.StationType,
      sortable: true,
    },
    {
      name: 'Server Number',
      selector: row => row.ServerNumber,
      sortable: true,
    },
    {
      name: 'Sim Number',
      selector: row => row.SimNumber,
      sortable: true,
    },
    {
      name: 'IMEI',
      selector: row => row.IMEI,
      sortable: true,
    },
    {
      name: 'Firmware',
      selector: row => row.Firmware,
      sortable: true,
    },
    {
      name: 'Latitude',
      selector: row => row.Latitude,
      sortable: true,
    },
    {
      name: 'Longitude',
      selector: row => row.Longitude,
      sortable: true,
    },
    {
      name: 'Elevation',
      selector: row => row.Elevation,
      sortable: true,
    },
    {
      name: 'Date Installed',
      selector: row => row.DateInstalled,
      sortable: true,
    },
];



function App() {
 
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState([]);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch("https://raw.githubusercontent.com/jokzzz69/snsor/master/masterlist")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setData(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])
if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    


  return (

    <div className="App">
      <header className="App-header">
        <div className="container-fluid">
        <div className="row">
          <div className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">           
              <span className="fs-4">CAR Sensors</span>     
          </div>
        </div>
        <div className="row">
           <div className="col">

             <DataTable
                responsive
                columns={columns}
                data={data}
            />
           </div>
        </div>
      </div>  

      </header>
    </div>
  );
}
}
export default App;

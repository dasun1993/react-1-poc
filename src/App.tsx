import React, {useEffect, useState} from "react";
import logo from "./logo.svg";
import "./App.css";
import DataService from "./service/dataservice";
import {SearchForm} from "./component/SearchForm";


interface Location {
  name: string;
  region: string;
}

interface Current {
  temp_c: number;
}

export interface WhetherData {
  location: Location;
  current: Current;
}

/*const clickme = () => {
  console.log("lloadin..");
  DataService.getdata().then((res) => {
    let whetherData: WhetherData = res.data;
    console.log(whetherData.current.temp_c);
  });
};*/

function App() {

  // const [whetherData, setWhetherData] = useState<WhetherData>();
  // const [isClick, setIsClick] = useState<boolean>(false);
  // const [date, setDate] = useState(new Date());
  //
  //  useEffect(()=>{
  //    DataService.getdata("colombo").then((res) => {
  //      let whetherData: WhetherData = res.data;
  //      setWhetherData(whetherData);
  //      // setIsClick(false)
  //      console.log(whetherData.current.temp_c);
  //    });
  //  },[date])
   return (
    <div className="App">
      {/*{ whetherData? <h2>Whether {JSON.stringify(whetherData)} </h2>:<div>No Data</div>}*/}

      <SearchForm/>


    </div>
  );
}

export default App;

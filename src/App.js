import {useState} from "react";
import React from "react";
import data from "./data";
import Tour from "./components/Tour";

const App = () => {

  const[tours, setTours]=useState(data);


    function removeTour(id)
    {
      const newTour=tours.filter((tour)=>tour.id !== id);
      setTours(newTour);
    }


     if(tours.length===0)
      {
           return(
              <div className="refresh">
              <h2>No Tours Left</h2>
              <button onClick={()=>setTours(data)} className="btn-white">
                  Refresh
              </button>
           </div>
           );

      }

  return (
    <div className="App">
      <Tour tours={tours} removeTour={removeTour} ></Tour>
    </div>
  );
};

export default App;

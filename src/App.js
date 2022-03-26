import './App.css';
import React from "react";
import Home from './Home';

function App() {
  return (
    <div className="App">
      <Home></Home>
    </div>
  );
}



/*getCity("Tel Aviv").then(data => {
  return getWeather(data.Key);
}).then(data => {
  console.log(data);
})
.catch(err => console.log(err));*/


export default App;

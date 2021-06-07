import { useState } from "react";
import Menu from "./components/RestaurantMenu.js"
import './App.css';

import data from "./restaurantdata";

function App() {
  const [restaurantData, setRestaurantData] = useState(data);
  return (
    <>
    <Menu restaurantData={restaurantData}></Menu>
    </>
  );
}



export default App;


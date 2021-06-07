import { useState } from "react";
import Menu from "./components/RestaurantMenu.js"
import './App.css';

import data from "./restaurantdata";

function App() {
  const [restaurantData, setRestaurantData] = useState(data);
  const [selectedRestaurant, setSelectedRestaurant] = useState("");
  return (
    <>
    <Menu restaurantData={restaurantData} setRestaurantData={setRestaurantData} selectedRestaurant={selectedRestaurant} setSelectedRestaurant={setSelectedRestaurant}></Menu>
    </>
  );
}



export default App;


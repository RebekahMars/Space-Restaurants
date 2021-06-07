import React from "react";
import Select from "react-select"

const Menu = (props) => {
    return(
    <Select
        options={props.restaurantData && props.restaurantData.map((restaurant) => ({
            label: restaurant.name,
            value: restaurant.name,
        }))
    }
    />
    )
    /* return(
    <>
    <div>
        {props.restaurantData && props.restaurantData.map((restaurant, index) => {
            return <div key={index}>{restaurant.name}</div> //DO NOT USE INDEX->FIND A ANOTHER KEY BEKAH
        })}
    </div>
    </>
    ) */
}
export default Menu;
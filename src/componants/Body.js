import restList from "../utils/appData";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

const Body = () => {
        // Local state variable
        // const [listRestaurant, setListRestaurant] = useState(restList);
        // Above way( Destructuring ) is equivalent to following code: 

        const arr = useState(restList);
        const listRestaurant = arr[0];
        const setListRestaurant = arr[1];

    return (
        <div className="body">
            <div className="search">
                    Search Bar
            </div>
            <div className="filter">
                <button className="filter-btn"
                    onClick={()=>{
                        const filteredList = listRestaurant.filter(
                            (res) => res.info.avgRating > 4
                        );
                        setListRestaurant(filteredList);
                    }}
                    >
                    Top Rated
                </button>
            </div>
            <div className="rest-container">
                
                    {/* ////Use MAP fun to avoid manually adding multiplerestaurant card*/}
                    {listRestaurant.map((restaurant) => (
                        <RestaurantCard key={restaurant.info.id} restData={restaurant}/> 
                    ))};
            </div>
        </div>

    );
}
export default Body;
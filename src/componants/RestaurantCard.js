// named export is imported like-->
import {IMG_CDN} from "../utils/constant";
// import

const RestaurantCard = (props) => {
    const {restData} = props; //Destructring data in props
    const{cloudinaryImageId,name,avgRating,deliveryTime,cuisines} = restData?.info;
    
    return(
        <div className="rest-card">
            
                <img alt="" className="rest-logo" src={IMG_CDN+cloudinaryImageId}></img>
          

            <div className="card-data">
            <h3>{name}</h3> 
            <h4>{avgRating} stars</h4>
            <h5>{deliveryTime} minutes</h5>
            <h6>{cuisines.join(", ")}</h6>  {/* join js method to join with given symb */}
            
            </div>
        
        </div>
    )

}
export default RestaurantCard;

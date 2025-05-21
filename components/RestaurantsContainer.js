import Restaurant from "./Restaurant";
import { restaurants } from "./data/data.js";

//containers run the logic
function RestaurantsContainer() {
    return (
      <div className="restaurantContainer">
        {restaurants.map(restaurant => <Restaurant  restaurant={restaurant} />)}
      </div>
    );
  }
  
  export default RestaurantsContainer;


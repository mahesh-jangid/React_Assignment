import "./Restaurant.css";
import { RestaurantDetails } from "./RestaurantDetails";

const Restaurant = (props) => {
  return (
    <div className="main_container">
      <div className="Restaurant_details">
        <div className="restaurant_img">
          <img width="160px" height="165px" src={props.src} alt={props.name} />
        </div>
        <RestaurantDetails {...props} />
        <div className="right_div">
          <div className="ratings">{props.rating}</div>
          <div className="votes">{props.votes} votes</div>
          <div className="reviews">{props.reviews} reviews</div>
        </div>
      </div>
      <div className="card_footer">
        <div></div>
        <div className="order_button">
          Order Online <i className="fas fa-chevron-right"></i>
        </div>
      </div>
    </div>
  );
};

export default Restaurant;

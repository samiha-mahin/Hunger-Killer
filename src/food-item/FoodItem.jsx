import { useContext } from "react"
import "./FoodItem.css"
import { StoreContext } from "../context/StoreContext"

const FoodItem = ({id,name,price,description,image}) => {

  const {  cartItems,addToCart,removeFromCart,} = useContext(StoreContext)
  return (

    <div className="food-item">
        <div className="food-item-img-container">
            <img className="food-item-img" src={image} alt=""/>
            {
              !cartItems[id]
              ?<img className="add" onClick={()=>addToCart(id)} src="public/images/add_icon_white.png" alt=""/>
              : <div className="food-item-counter">
                <img onClick={()=>removeFromCart(id)} src="public/images/remove_icon_red.png" alt=""/>
                <p>{cartItems[id]}</p>
                <img onClick={()=>addToCart(id)} src="public/images/add_icon_green.png" alt=""/>

              </div>
            }
        </div>
        <div className="food-item-info">
            
            <div className="food-item-name-rating">
              <p>{name}</p>
              <img src="public/images/rating_starts.png" alt=""/>
            </div>

         <p className="food-item-desc">{description}</p>
         <p className="food-item-price">${price}</p>

        </div>
    </div>
  )
}

export default FoodItem
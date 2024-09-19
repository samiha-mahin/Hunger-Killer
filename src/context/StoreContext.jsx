import { createContext, useState } from "react";
import { food_list } from "../../public/images/assets";

export const StoreContext = createContext (null)

const StoreContextProvider = (props) => {
      
       const [cartItems, setcartItems] = useState({})
       const addToCart =(itemId)=>{
           if(!cartItems[itemId]){
            setcartItems((prev)=>({...prev,[itemId]:1}))
           }
           else {
            setcartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
           }
       } 
       const removeFromCart =(itemId)=>{
        setcartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
       }
        const getTotalCartAmount = () => {
        let totalAmount = 0;
         for (const item in cartItems) {
           if (cartItems[item] > 0) {
            let itemInfo = food_list.find((product) => product._id === item);
             totalAmount += itemInfo.price * cartItems[item];
             }
           }
           return totalAmount;
        }
      
    

    const contextValue = {
      food_list,
      cartItems,
      setcartItems,
      addToCart,
      removeFromCart,
      getTotalCartAmount
    }
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}
export default StoreContextProvider
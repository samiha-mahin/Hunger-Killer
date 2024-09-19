import "./ExploreMenu.css"
import { menu_list } from "../../../public/images/assets"

const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className="explore_menu" id="explore_menu">
        <h1>Explore Our Menu</h1>
        <p className="explore-menu-text">Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise.Our mission is to satisfy your cravings and elevate your dining experience,one delicious meal at a time.</p>
        <div className="explore-menu-list">
         {menu_list.map((item,index)=>{
            return (
            <div onClick={()=>setCategory(prev=>prev==item.menu_name?"All":item.menu_name)} key={index} className="explore-menu-list-items">
             <img className={category==item.menu_name?"active":""} src={item.menu_image} alt=""/>
             <p>{item.menu_name}</p>
            </div>
            )
        })}
        </div>
        <hr/>
    </div>
  )
}

export default ExploreMenu
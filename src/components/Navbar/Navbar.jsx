import { useState } from "react"
import "./Navbar.css"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { StoreContext } from "../../context/StoreContext"
const Navbar = ({setShowLogin}) => {
    const [menu, setMenu] = useState("Home")
    const {getTotalCartAmount} = useContext(StoreContext)
  return (
    <div className='navbar'>
        <Link to='/'><img src ="/images/logo1.png"  alt= "" className='logo'/> </Link>
        <ul className='navbar-menu'>
            <Link to='/' onClick={()=>setMenu("Home")} className={menu=="Home"?"active" : ""}>Home</Link>
            <a href="#explore_menu" onClick={()=>setMenu("Menu")} className={menu=="Menu"?"active" : ""}>Menu</a>
            <a href="#app-download" onClick={()=>setMenu("Mobile-app")} className={menu=="Mobile-app"?"active" : ""}>Mobile-app</a>
            <a href="#footer" onClick={()=>setMenu("Contact-us")} className={menu=="Contact-us"?"active" : ""}>Contact-us</a>
        </ul>
        <div className='navbar-right'>
            <img src ="/images/search_icon.png" alt=""/>
          <div className='navbar-search-icon'>
              <Link to='/Cart'><img src='/images/basket_icon.png' alt=''/></Link>
             <div className={getTotalCartAmount()===0?"":"dot"}></div>
          </div>
          <button onClick={()=>setShowLogin(true)}>Sign in</button>
        </div>
    </div>
  )
}

export default Navbar
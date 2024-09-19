import { useState } from "react"
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu"
import FoodDisplay from "../../components/food-display/FoodDisplay"
import Header from "../../components/Header/Header"
import "./Home.css"
import Appdownload from "../../components/Appdownload/Appdownload"

const Home = () => {
    const [category, setCategory] = useState("All")
  return (
    <div>
        <Header/>
        <ExploreMenu category={category} setCategory={setCategory}/>
        <FoodDisplay category={category}/>
        <Appdownload/>
    </div>
  )
}

export default Home
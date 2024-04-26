import ImageCarousel from "./components/ImageCarousel.jsx"
import NavBar from "./components/NavBar.jsx"
import Menu from "./components/Menu.jsx"
import ProductGroup from "./components/ProductGroup.jsx"
import Footer from "./components/Footer.jsx"

import { product, products1 } from "./objects.js"

function App() {
  const arr = [
    "/src/assets/images/main1.webp",
    "/src/assets/images/main2.webp",
    "/src/assets/images/main3.webp"
  ]



  return(
    <>
    <NavBar/>
    <ImageCarousel imageArray={arr}/>
    <Menu/>
    <ProductGroup itemArray={product} groupTitle={"All Time Favorites"}/>
    <ProductGroup itemArray={products1} groupTitle={"Top Selling Products"}/>
    <Footer/>
    </>
  )
}

export default App

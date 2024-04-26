import ImageCarousel from "./components/ImageCarousel.jsx"
import NavBar from "./components/NavBar.jsx"
import Menu from "./components/Menu.jsx"
import ProductGroup from "./components/ProductGroup.jsx"
import Footer from "./components/Footer.jsx"

import { product, products1 } from "./objects.js"

function App() {
  const arr = [
    "https://assets.kfc.com.np/storage/uploads/images/banner/64c0ae1382bff.webp",
    "https://assets.kfc.com.np/storage/uploads/images/banner/65a3949803a27.webp",
    "https://assets.kfc.com.np/storage/uploads/images/banner/645e265ff3b8f.webp"
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

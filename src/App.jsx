import ImageCarousel from "./components/ImageCarousel.jsx"
import MenuItem from "./components/MenuItem.jsx"
import NavBar from "./components/NavBar.jsx"
import Menu from "./components/Menu.jsx"

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
    </>
  )
}

export default App

import ImageCarousel from "./components/ImageCarousel.jsx"
import NavBar from "./components/NavBar.jsx"


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
    
    </>
  )
}

export default App

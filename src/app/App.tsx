import Header from "../widgets/header/ui/header.tsx";
import HomePage from "../pages/homePage/homePage.tsx";
import Footer from "../widgets/footer/ui/footer.tsx";
import "./styles/global.scss";


const App = () => {

  return (
    <>
        <Header/>
        <HomePage/>
        <Footer/>
    </>
  )
}

export default App
import {Suspense, lazy} from "react";
import Header from "../widgets/header/ui/header";
const HomePage = lazy( () => import("../pages/homePage/homePage"));
import Footer from "../widgets/footer/ui/footer";
import "./styles/global.scss";


const App = () => {

    return (
        <>
            <Header/>
            <Suspense fallback={<h3>Loading...</h3>}>
                <HomePage/>
            </Suspense>
            <Footer/>
        </>
    )
}

export default App
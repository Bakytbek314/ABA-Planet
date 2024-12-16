import {Suspense, lazy, useRef} from "react";
import Header from "../widgets/header/ui/header";
import Footer from "../widgets/footer/ui/footer";
const HomePage = lazy(() => import("../pages/homePage/homePage"));
const Snow = lazy(() => import("../features/snow/snow.tsx"));

import "./styles/global.scss";


const App = () => {

    return (
        <>
            <Snow/>
            <Header/>
            <Suspense fallback={<h3>Loading...</h3>}>
                <HomePage />
            </Suspense>
            <Footer/>
        </>
    )
}

export default App
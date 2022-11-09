import { BrowserRouter, Routes, Route } from "react-router-dom";

import Catalogo from './pages/Catalogo';
import Home from './pages/Home';
import Navbar from "./components/Navbar";


function Rotas(){
    return(
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route exact path='/' element={<Home/>} />
                <Route path="catalogo" element={<Catalogo/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default Rotas
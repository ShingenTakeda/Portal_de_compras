import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

/* Componentes */
import Infos from './components/Infos';
import Footer from './components/Footer';
import Navbar from './components/navbar/Navbar'
import Banner from './components/banner/Banner';
import Sidebar from "./components/sidebar/Sidebar";

/* Páginas */
import Inicio from "./pages/inicio/Inicio";
import Contratacoes from "./pages/contratacoes/Contratacoes";
import Licitacoes from "./pages/licitacoes/Licitacoes";
import ManuaisENormas from "./pages/manuais_e_normas/Manuais_e_normas"; 
import Planejamento from "./pages/planejamento_de_contratacoes/Planejamento_de_contracoes";

/* Hooks, stringtoHtml, etc */

function App() {
    return (
        <Router>
            {/* Rotas estáticas da Navbar */}
            <Navbar/>
                <Routes>
                    <Route exact path="/" element={<>
                        <Banner/>
                        <Infos/>
                        <Inicio  />
                    </>} />
                    <Route exact path="/licitacoes"  element={<Licitacoes />} />
                    <Route exact path="/contratacoes" element={<Contratacoes />} />
                    <Route exact path="/manuais_e_normas" element={<ManuaisENormas/>}/>
                    <Route exact path="/planejamento" element={<Planejamento/>}/>
                </Routes>
           
            {/* */}
            <Sidebar></Sidebar>
            <Footer/>
        </Router>
    );
}

export default App;

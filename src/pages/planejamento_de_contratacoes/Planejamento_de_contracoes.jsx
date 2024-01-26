import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import { StringHTML } from "../../components/StringHTML";
import "../Main.modules.css"

const Planejamento = () => {

    const Cplusplus = require('../../App.css');

    const dado = require('../../json/planejamento_de_contratacoes.json')

    return (
        <div>
            <p class="font-bold text-3xl text-center items-center py-10">
                Aqui está a estrutura da página de Planejamento Contratações
            </p>
            {/* <Sidebar/> */}
            <div className="pagPla">
                <StringHTML htmlString={dado.text.data} />
            </div>
        </div>

    );
}
export default Planejamento;

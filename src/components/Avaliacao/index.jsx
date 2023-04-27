import IProfissional from "../../types/IProfissional";
import styled from "styled-components";
import Botao from "../Botao";
import Card from "./Card"
;


function Avaliacao({ profissionais } : { profissionais: IProfissional[] | null }) {
    return (
        <>
            <SecaoCard>
                {profissionais?.map((profissional) => {
                    return <Card profissional={profissional} />
                })}
            </SecaoCard>
            <Botao>Ver Mais</Botao>
        </>
    )
} 

export default Avaliacao;
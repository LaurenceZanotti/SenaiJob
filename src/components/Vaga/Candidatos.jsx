import React from 'react'
import Candidato from './Candidato'

const candidatos = [
    {
        nome_candidato: "Ana da Silva",
        idade: 33, 
        cidade: "Santana de Parnaíba", 
        ultimo_curso: "Tecnologia da Informação - Excel Completo - 2022"
    },
    {
        nome_candidato: "João Augusto Nogueira",
        idade: 28, 
        cidade: "Santana de Parnaíba", 
        ultimo_curso: "Tecnologia da Informação - Informática Básica - 2019"
    }
]

function Candidatos() {
    return (
        <div className="candidatos_container">
            <div>
                <h2>15 candidatos de 407 alunos vinculados</h2>
            </div>  
            <div id="novos_candidatos">
                <h2>Novos:</h2>
                <p>Ainda não temos nenhum novo candidato.</p>
            </div>
            <div id="candidatos_cadastrados">
                <h2>Vistos:</h2>
                {candidatos.map((candidato, index) => <Candidato 
                    key={index}
                    nome_candidato={candidato.nome_candidato}
                    idade={candidato.idade}
                    cidade={candidato.cidade}
                    ultimo_curso={candidato.ultimo_curso}
                />)}
            </div>
            <hr/>
        </div>
    )
}

export default Candidatos

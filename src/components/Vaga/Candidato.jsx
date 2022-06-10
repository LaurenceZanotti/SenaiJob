import React from 'react'

function Candidato(props) {
    const { nome_candidato, idade, cidade, ultimo_curso } = props

    function handleClick() {
        console.log('aberto', props)
    }

    return (
        <div className="candidato_container" onClick={handleClick}>
            <h3>{ nome_candidato }</h3>
            <p>{idade} anos. Mora em {cidade}.</p>
            <h4>Último curso</h4>
            <p>{ultimo_curso}</p>
            <hr/>
            <div>
                <p><img src="" alt="Ícone detalhes"/>Detalhes</p>
                <p><img src="" alt="Ícone contratei"/>Contratei</p>
            </div>
        </div>
    )
}

export default Candidato

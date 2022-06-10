import React, { useState } from 'react'
import ModalCandidato from './ModalCandidato'


function Candidato(props) {
    const { id, nome_candidato, idade, cidade, ultimo_curso } = props

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
        <div className="candidato_container" onClick={handleShow}>
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
        <ModalCandidato show={show} handleClose={handleClose} indice_candidato={id} />
        </>
        
    )
}

export default Candidato

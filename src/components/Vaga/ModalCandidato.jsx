import React, {useState} from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import candidatos from '../../fake_api/candidatos'

function ModalCandidato(props) {
    const candidato = candidatos[props.indice_candidato]
    
    return (
        <div className="modal_candidato_container">
            <Modal show={props.show} onHide={props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{candidato.nome_candidato}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>{candidato.idade} anos - {candidato.sexo} - {candidato.cidade}</div>
                    { candidato.isEmpregado && <div className="text-primary">Candidato empregado, porém aceitando propostas</div> }
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={props.handleClose}>
                    
                </Button>
                <Button variant="primary" onClick={props.handleClose}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default ModalCandidato

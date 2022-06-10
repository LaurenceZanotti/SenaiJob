import React from 'react'
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
                <Modal.Body>
                    <h4>Cursos</h4>
                    <ul>
                        {candidato.cursos_senai.map((curso, index) => {
                            return <li key={index}>{curso}</li>
                        })}
                    </ul>
                </Modal.Body>
                <Modal.Body>
                    <h4>Currículo</h4>
                    <a role="button">Acessar currículo</a>
                </Modal.Body>
                <Modal.Body>
                    <h4>Contatos</h4>
                    
                    <img src="" alt="Instagram logo"/> Abrir Instagram
                    <img src="" alt="Linkedin logo"/> Abrir Linkedin
                </Modal.Body>

                <Modal.Footer>                
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default ModalCandidato

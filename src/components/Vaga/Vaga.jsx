import React from 'react'
import Candidatos from './Candidatos'

function Vaga() {
    return (
        <div className="vaga_container">
            {/* Header */}
            <div className="header_container">
                <img src="" alt=""/>
                <h1>Emprego - AUXILIAR DE MANUTENÇÃO Manutenção predial / Industrial</h1>
                <p>1 vaga</p>
                <img src="" alt=""/>
            </div>
            {/* Descrição da Vaga */}
            <div className="description_container">
                <div className="desc-col-1" id="desc-col-1">
                    <div>
                        <h2>Responsabilidades e atribuições</h2>
                        <p>https://sesisenaisp.jobs.recrut.ai/job/Y5UR4C</p>
                    </div>
                    <div>
                        <h2>Local de Trabalho</h2>
                        <p>Rua Elton Silva, 905 - Centro, Jandira - SP, 06600-025</p>
                    </div>
                    <div>
                        <h2>Horário</h2>
                        <p>De Segunda a Domingo sendo 8h diárias, com 1h de intervalo e duas folgas semanais conforme escala</p>
                    </div>
                    <div>
                        <h2>Benefícios</h2>
                        <p>Não informado</p>
                    </div>
                </div>
                <div className="desc-col-2" id="desc-col-2">
                    <div>
                        <h2>Pré Requisitos</h2>
                        <p className="red-span">Conhecimentos básicos na área de manutenção predial, podendo compreender as áreas de: Alvenaria, Pintura, Instalações Elétricas e Instalações Hidráulicas.</p>
                        <p className="red-span">https://sesisenaisp.jobs.recrut.ai/job/Y5UR4G</p>
                    </div>
                    <div>
                        <h2>Salário</h2>
                        <p>R$ 1981</p>
                    </div>
                    <div>
                        <h2>Observações</h2>
                        <p>Inscreva-se nesse link: https://sesisenaisp.jobs.recrut.ai/job/Y5UR4G</p>
                    </div>
                </div>
            </div>
            {/* Alunos candidatados */}
            <Candidatos/>
        </div>
    )
}

export default Vaga

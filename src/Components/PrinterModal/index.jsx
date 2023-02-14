import * as React from 'react';
import { useState, useRef } from 'react';
import * as IconsFc from 'react-icons/fc';
import * as S from '../assets/Styles/Components/printerModal';
//import { AuthContext } from '../../context/Auth';
import { toast } from 'react-toastify';
import { useReactToPrint } from 'react-to-print';



export default function PrinterModal({ showPrint, setShowPrint, printService }) {
    const [show, setShow] = useState(true);
    const divStyle = {
        'text-align': 'center',
        'margin': '30px',
    };
    const h2Style = {
        'text-align': 'left',
        'margin': '0px',
    };
    const spanStyle={
        'font-weight':'100',
    }


    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        onAfterPrint: () => { toast.success('Documento impresso com sucesso!👍🏼'); handleClose() },

    });
    let componentRef = useRef(null);
    const handleShow = () => {
        setShow(true);
    };
    const handleClose = () => {
        setShow(false);
        setShowPrint(false);
    };

    if (showPrint) {
        console.log('renderizou')
        return (
            <>

                <S.MyModal show={show} onHide={handleClose}>
                    <S.MyModal.Header className='Header'>
                        <S.MyModal.Title className='Title'><IconsFc.FcReadingEbook size={28} /> DADOS PARA IMPRESSAO</S.MyModal.Title>
                    </S.MyModal.Header>
                    <S.MyModal.Body className='Body'>

                        <div className='containerInput' ref={componentRef} style={divStyle} >

                            <h2>Impressao de chamado</h2><hr />
                            <h3 style={h2Style}>{`Nome : ${printService.userName} `}</h3>
                            <h3 style={h2Style}>{`Endereço : Rua ${printService.rua} Bairro ${printService.bairro} Nº ${printService.numero} `}
                            </h3>
                            <h3 style={h2Style}>{`Cidade: ${printService.cidade} `}</h3>
                            <h3 style={h2Style}>Tipo de serviço: <span style={spanStyle}>{printService.tipoDeServico}</span></h3>

                        </div>

                    </S.MyModal.Body>
                    <S.MyModal.Footer className='Footer'>
                        <S.MyButton className='btn-fechar' variant="secondary" onClick={handleClose}>
                            SAIR
                        </S.MyButton>
                        <S.MyButton className='btn-save' variant="primary" onClick={handlePrint}>
                            Imprimir
                        </S.MyButton>
                    </S.MyModal.Footer>
                </S.MyModal>
            </>

        );
    }
}
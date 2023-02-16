import * as React from 'react';
import { useState, useRef } from 'react';
import * as IconsFc from 'react-icons/fc';
import * as IconsSL from 'react-icons/sl';
import * as S from '../assets/Styles/Components/printerModal';
//import { AuthContext } from '../../context/Auth';
import { toast } from 'react-toastify';
import { useReactToPrint } from 'react-to-print';


export const PrinterModal = ({ showPrint, setShowPrint, printService, tituloButton }) => {
    const [show, setShow] = useState(false);

    const divStyle = {
        'text-align': 'center',
        'margin': '30px',
        
    };
    const h2Style = {
        'text-align': 'left',
        'margin': '0px',
        'font-size': '25px',
        'margin-botton':'20px',
    };
    const spanStyle = {
        'font-weight': '150',
        'margin-right': '1ch',
    }
    const assCliente = {
        'border-top': '1px solid',
        'margin-top': '70px',
        'font-size': '25px',
        'width': '80%',
        'margin-left': '80px',
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

    return (
        <>
            <S.MyButton variant='primary' onClick={handleShow}>
                {tituloButton}
            </S.MyButton>
            <S.MyModal show={show} onHide={handleClose}>
                <S.MyModal.Header className='Header'>
                    <S.MyModal.Title className='Title'><IconsFc.FcReadingEbook size={28} /> DADOS PARA IMPRESSAO</S.MyModal.Title>
                </S.MyModal.Header>
                <S.MyModal.Body className='Body'>

                    <div className='containerInput' ref={componentRef} style={divStyle} >

                        <h2>Impressao de chamado</h2><hr />
                        <h3 style={h2Style}>Nome: <span style={spanStyle}>{printService.userName}
                        </span>   Pedido: <span style={spanStyle}>{printService.dataPedido}
                            </span><br /> Agendado: <span style={spanStyle}>{printService.dataService}</span>
                            Bairro: <span style={spanStyle}>{printService.bairro}</span>
                        </h3>
                        <h3 style={h2Style}>Endereço : <span style={spanStyle}>{`Rua ${printService.rua}`}</span>Nº: <span style={spanStyle}>{printService.numero} </span>
                        </h3>
                        <h3 style={h2Style}>
                            Cidade: <span style={spanStyle}>{printService.cidade} </span>
                            Contato: <span style={spanStyle}>{printService.telefone} </span>
                        </h3>
                        <h3 style={h2Style}>Tipo de serviço: <span style={spanStyle}>{printService.tipoDeServico}</span></h3>
                        <div style={assCliente}>Assinatura do cliente</div>
                        <hr />
                    </div>

                </S.MyModal.Body>
                <S.MyModal.Footer className='Footer'>
                    <S.MyButton className='btn-fechar' variant="secondary" onClick={handleClose}>
                        SAIR
                    </S.MyButton>
                    <S.MyButton className='btn-save' variant="primary" onClick={handlePrint}>
                        <IconsSL.SlPrinter size={25}/>
                    </S.MyButton>
                </S.MyModal.Footer>
            </S.MyModal>
        </>
    );
}
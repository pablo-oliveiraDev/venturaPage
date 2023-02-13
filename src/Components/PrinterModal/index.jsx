import * as React from 'react';
import { useState, useRef } from 'react';
import * as IconsFc from 'react-icons/fc';
import * as S from '../assets/Styles/Components/printerModal';
//import { AuthContext } from '../../context/Auth';
import { toast } from 'react-toastify';
import { useReactToPrint } from 'react-to-print';



export default function PrinterModal({ showPrint, setShowPrint,printService }) {
    const [show, setShow] = useState(true);

    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        onAfterPrint: () => { toast.success('Documento impresso com sucesso!👍🏼'); handleClose() },
        pageStyle:()=><styles></styles>
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

                        <div className='containerInput' ref={componentRef}>

                            <h2>Teste de impressao</h2><br />
                            <h3>{printService.userName}</h3>
                            <h3>{printService.rua}</h3>

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
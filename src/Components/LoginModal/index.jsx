import * as React from 'react';
import { useState, useContext } from 'react';
import * as IconsFc from 'react-icons/fc';
import * as S from '../assets/Styles/Components/cadastroModal';
import { AuthContext } from '../../context/Auth';


export default function LoginModal({ showCadastro }) {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const [email, setEmail] = useState('');
    const [senha, setsenha] = useState('');
    const { login } = useContext(AuthContext);

    const handleClose = () => {
        setShow(false);
        setEmail('');
        setsenha('');
    };
    const clickToLogin = (e) => {
        e.preventDefault();
        if (
            email !== '' &&
            senha !== ''
        ) {
            login(
                email,
                senha
            )
            handleClose();
        } else {
            alert('Os Campos nao podem estar vazios!🙁');
            return;
        }

    }



    return (
        <>
            <S.ShowButton onClick={handleShow}>
                Login
            </S.ShowButton>

            <S.MyModal show={show} onHide={handleClose}>
                <S.MyModal.Header className='Header'>
                    <S.MyModal.Title className='Title'><IconsFc.FcReadingEbook size={28} /> LOGIN</S.MyModal.Title>
                </S.MyModal.Header>
                <S.MyModal.Body className='Body'>

                    <div className='containerInput'>

                        <div className='containerSub'>
                            <h3 className='SubTitle'>REFRIGERAÇÃO VENTURA</h3>
                        </div>

                        <label>EMAIL:
                            <input
                                type='text'
                                name='email'
                                placeholder='Digite seu melhor email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </label>
                        <label>SENHA:
                            <input
                                type='password'
                                name='senha'
                                placeholder='Digite aqui sua senha'
                                value={senha}
                                onChange={(e) => setsenha(e.target.value)}
                            />
                        </label>

                    </div>

                </S.MyModal.Body>
                <S.MyModal.Footer className='Footer'>
                    <S.MyButton className='btn-fechar' variant="secondary" onClick={handleClose}>
                        SAIR
                    </S.MyButton>
                    <S.MyButton className='btn-save' variant="primary" onClick={clickToLogin}>
                        ENTRAR
                    </S.MyButton>
                </S.MyModal.Footer>
            </S.MyModal>
        </>

    );
}
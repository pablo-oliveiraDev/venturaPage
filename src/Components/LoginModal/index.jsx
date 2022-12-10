import * as React from 'react';
import { useState, useContext } from 'react';
import * as IconsFc from 'react-icons/fc';
import * as S from '../assets/Styles/Components/cadastroModal';
import IMaskInput from 'react-input-mask';
import { AuthContext } from '../../context/Auth';


export default function LoginModal({ showCadastro }) {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [cpf, setCPF] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [senha, setsenha] = useState('');
    const [cep, setCep] = useState('');
    const [rua, setRua] = useState('');
    const [cidade, setCidade] = useState('');
    const [numero, setNumero] = useState('');
    const [uf, setUf] = useState('');
    const [meuBairro, setMeuBairro] = useState('');
    const [mostrarEndereco, setMostarEndereco] = useState('');


    const [msgError, setMsgError] = useState('');
    const { cadastro } = useContext(AuthContext);

    const handleClose = () => {
        setMostarEndereco('');
        setShow(false);
        setCep('');
        setRua('');
        setCidade('');
        setUf('');
        setMeuBairro('');
        setMsgError('');
    };
    const clickToLogin = (e) => {
        e.preventDefault();
        if (
            email !== '' &&
            senha !== ''
        ) {
            cadastro(
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
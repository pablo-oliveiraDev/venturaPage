import * as React from 'react';
import { useState } from 'react';
import * as S from '../assets/Styles/Components/cadastroModal';
import IMaskInput from 'react-input-mask';
import { toast } from 'react-toastify';

export default function CadastroModal({ showCadastro }) {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const [cep, setCep] = useState('');
    const [rua, setRua] = useState('');
    const [cidade, setCidade] = useState('');
    const [uf, setUf] = useState('');
    const [meuBairro, setMeuBairro] = useState('');
    const [mostrarEndereco, setMostarEndereco] = useState('');
    const [msgError, setMsgError] = useState('');

    const handleClose = () => {
        setMostarEndereco('');
        setShow(false);
        setCep('');
        setRua('');
        setCidade('');
        setUf('');
        setMeuBairro('');
        setMsgError('');
    }

    const loadCep = () => {
        if (cep.length === 9) {
            fetch(`https://viacep.com.br/ws/${cep.replace(/\D/g, '')}/json`)
                .then(res => res.json())
                .then((data) => {
                    if (data.erro !== true) {
                        setMostarEndereco(true);
                        console.log(data);
                        setRua(data.logradouro);
                        setCidade(data.localidade);
                        setUf(data.uf);
                        setMeuBairro(data.bairro);
                    } else {
                        setRua('');
                        setCidade('');
                        setUf('');
                        setMeuBairro('');
                        setMostarEndereco(false);
                        setMsgError('E necessario digitar um cep valido!');
                        return;
                    }

                });

        } else {
            setMsgError('O cep precisa ter 9 digitos');
            setMostarEndereco(false);
            return;
        };

    }

    return (
        <>
            <S.MyButton variant='primary' onClick={handleShow} className='buttonShow'>
                Cadastro
            </S.MyButton>

            <S.MyModal show={show} onHide={handleClose}>
                <S.MyModal.Header closeButton className='Header'>
                    <S.MyModal.Title className='Title'>NOVO CADASTRO</S.MyModal.Title>
                </S.MyModal.Header>
                <S.MyModal.Body className='Body'>
                    <div className='containerInput'>
                        <div className='containerSub'>
                            <label className='SubTitle'>DADOS PESSOAIS</label>
                        </div>
                        <label>NOME:
                            <input type='text' name='nome' />
                        </label>
                        <label>SOBRENOME:
                            <input type='text' name='sobrenome' />
                        </label>
                        <label>TELEFONE:
                            <IMaskInput
                                type='text'
                                name='telefone'
                                mask='(99)99999-9999'
                            />
                            <input
                            type='radio'
                            name='telefona'
                            />
                        </label>
                        <label>CPF/CNPJ:
                            <IMaskInput
                                type='text'
                                name='cpf'
                                mask='999.999.999-99'
                                placeholder='Digite o seu cpf'
                            />
                        </label>
                        <label>EMAIL:
                            <input type='text' name='email' />
                        </label>
                        <label>SENHA:
                            <input type='password' name='senha' />
                        </label>
                        <div className='containerSub'>
                            <label className='SubTitle'>ENDEREÇO</label>
                        </div>
                        <label>CEP:
                            <IMaskInput
                                type='text'
                                name='cep'
                                mask='99999-999'
                                placeholder='Digite o seu cep'
                                value={cep}
                                onChange={(e) => setCep(e.target.value)}
                            /><button onClick={loadCep}>buscar</button>
                        </label>
                        {mostrarEndereco ? (<> <label>RUA:
                            <input
                                type='text'
                                name='rua'
                                value={rua}
                                onChange={(e) => setRua(e.target.value)}
                            />
                        </label>
                            <label>BAIRRO:
                                <input
                                    type='text'
                                    name='rua'
                                    value={meuBairro}
                                    onChange={(e) => setMeuBairro(e.target.value)}
                                />
                            </label>
                            <label>CIDADE:
                                <input
                                    type='text'
                                    name='cidade'
                                    value={cidade + '-' + uf}
                                    onChange={(e) => setCidade(e.target.value)}
                                />
                            </label>
                            <label>NUMERO:
                                <input type='text' name='numero' />
                            </label></>) : (<div className='containerSub'>
                                <label className='SubTitle'>{msgError}</label>
                            </div>)}
                    </div>
                </S.MyModal.Body>
                <S.MyModal.Footer className='Footer'>
                    <S.MyButton variant="secondary" onClick={handleClose}>
                        Close
                    </S.MyButton>
                    <S.MyButton variant="primary" onClick={handleClose}>
                        Save Changes
                    </S.MyButton>
                </S.MyModal.Footer>
            </S.MyModal>
        </>

    );
}
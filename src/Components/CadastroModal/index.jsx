import * as React from 'react';
import { useState, useContext } from 'react';
import * as IconsFc from 'react-icons/fc';
import * as S from '../assets/Styles/Components/cadastroModal';
import IMaskInput from 'react-input-mask';
import { AuthContext } from '../../context/Auth';


export default function CadastroModal({ showCadastro }) {
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
    const clickToSave = (e) => {
        e.preventDefault();
        if (nome !== '' &&
            sobrenome !== '' &&
            cpf !== '' &&
            email !== '' &&
            telefone !== '' &&
            senha !== '' &&
            cep !== '' &&
            rua !== '' &&
            cidade !== '' &&
            uf !== '' &&
            meuBairro !== '') {
            cadastro(
                nome,
                sobrenome,
                email,
                cpf,
                telefone,
                senha,
                rua,
                numero,
                cep,
                cidade,
                uf,
                meuBairro
            )
        } else {
            alert('Os Campos nao podem estar vazios!🙁');
            return;
        }

    }
    const handleChange = (valueCep) => {
        setCep(valueCep);
        setRua('');
        setCidade('');
        setUf('');
        setMeuBairro('');
        setMsgError('');
    };

    const loadCep = () => {
        if (cep.length >= 9) {
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
            <S.ShowButton onClick={handleShow}>
                Cadastro
            </S.ShowButton>

            <S.MyModal show={show} onHide={handleClose}>
                <S.MyModal.Header className='Header'>
                    <S.MyModal.Title className='Title'><IconsFc.FcReadingEbook size={28} /> NOVO CADASTRO</S.MyModal.Title>
                </S.MyModal.Header>
                <S.MyModal.Body className='Body'>

                    <div className='containerInput'>

                        <div className='containerSub'>
                            <h3 className='SubTitle'>DADOS PESSOAIS</h3>
                        </div>
                        <label>NOME:
                            <input
                                type='text'
                                name='nome'
                                placeholder='Digite seu nome'
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}
                            />
                        </label>
                        <label>SOBRENOME:
                            <input
                                type='text'
                                name='sobrenome'
                                placeholder='Digite seu sobrenome'
                                value={sobrenome}
                                onChange={(e) => setSobrenome(e.target.value)}
                            />
                        </label>
                        <label>TELEFONE:
                            <IMaskInput
                                type='text'
                                name='telefone'
                                mask='(99)99999-9999'
                                placeholder='Digite seu telefone'
                                value={telefone}
                                onChange={(e) => setTelefone(e.target.value.replace(/\D/g, ''))}
                            />

                        </label>
                        {telefone.substring(2, 3) === '9' && (<label>POSSUI WHATSAPP
                            <input
                                type='radio'
                                name='telefone'

                            />
                        </label>)}
                        {console.log(telefone.substring(2, 3))}
                        <label>CPF/CNPJ:
                            <IMaskInput
                                type='text'
                                name='cpf'
                                mask='999.999.999-99'
                                placeholder='Digite o seu cpf'
                                value={cpf}
                                onChange={(e) => setCPF(e.target.value)}
                            />
                        </label>
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
                        <div className='containerSub'>
                            <h3 className='SubTitle'>ENDEREÇO</h3>
                        </div>
                        <label>CEP:
                            <IMaskInput
                                type='text'
                                name='cep'
                                mask='99999-999'
                                placeholder='Digite o seu cep'
                                value={cep}
                                onChange={(e) => handleChange(e.target.value)}
                            /><button onClick={loadCep}><IconsFc.FcRight className='iconFc' size={25} /></button>
                        </label>
                        {mostrarEndereco ? (<> <label>RUA:
                            <input
                                type='text'
                                name='rua'
                                placeholder='Digite o nome da rua'
                                value={rua}
                                onChange={(e) => setRua(e.target.value)}
                            />
                        </label>
                            <label>BAIRRO:
                                <input
                                    type='text'
                                    name='bairro'
                                    placeholder='Digite o nome da bairro'
                                    value={meuBairro}
                                    onChange={(e) => setMeuBairro(e.target.value)}
                                />
                            </label>
                            <label>CIDADE:
                                <input
                                    type='text'
                                    name='cidade'
                                    placeholder='Digite o nome da sua cidade'
                                    value={cidade + '-' + uf}
                                    onChange={(e) => setCidade(e.target.value)}
                                />
                            </label>
                            <label>NUMERO:
                                <input
                                    type='text'
                                    name='numero'
                                    placeholder='Numero da sua casa'
                                    value={numero}
                                    onChange={(e) => setNumero(e.target.value)}
                                />
                            </label></>) : (<div className='containerSub'>
                                <h3 className='SubTitle'>{msgError}</h3>
                            </div>)}
                    </div>

                </S.MyModal.Body>
                <S.MyModal.Footer className='Footer'>
                    <S.MyButton className='btn-fechar' variant="secondary" onClick={handleClose}>
                        Close
                    </S.MyButton>
                    <S.MyButton className='btn-save' variant="primary" onClick={clickToSave}>
                        Save Changes
                    </S.MyButton>
                </S.MyModal.Footer>
            </S.MyModal>
        </>

    );
}
import * as React from 'react';
import { useState, useContext } from 'react';
import * as IconsFc from 'react-icons/fc';
import * as S from '../assets/Styles/Components/cadastroModal';
import IMaskInput from 'react-input-mask';
import { AuthContext } from '../../context/Auth';


export default function NewService({ tituloButton }) {
    const [show, setShow] = useState(false);
    const [nome, setNome] = useState('');
    const [IdCliente, setIdCliente] = useState('');
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
    const [active, setActive] = useState(false);
    const [msgError, setMsgError] = useState('');
    const { cadastro, user } = useContext(AuthContext);



    const handleClose = () => {
        setMostarEndereco('');
        setShow(false);
        setCep('');
        setRua('');
        setCidade('');
        setUf('');
        setMeuBairro('');
        setMsgError('');
        setActive(false);
    };
    const clickToSave = (e) => {
        e.preventDefault();
        if (nome !== '' &&
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
            handleClose();
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
    const handleShow = () => {
        setShow(true);
        setActive(true);
    };

    return (
        <>
            <S.ShowButton show={true} onClick={handleShow} active={active}>
                {tituloButton}
            </S.ShowButton>

            <S.MyModal show={show} onHide={handleClose}>
                <S.MyModal.Header className='Header'>
                    <S.MyModal.Title className='Title'><IconsFc.FcReadingEbook size={28} />AGENDAR SERVIÇO</S.MyModal.Title>
                </S.MyModal.Header>
                <S.MyModal.Body className='Body'>

                    <div className='containerInput'>

                        <div className='containerSub'>
                            <h3 className='SubTitle'>DADOS PESSOAIS</h3>
                        </div>
                        <label for='select'>SERVIÇO :
                            <select placeholder='teste' 
                            defaultValue={'Serviço desejado'}                                
                            >
                                <option disabled >Serviço desejado</option>
                                <option>Visita tecnica</option>
                                <option>Manutenção de AR</option>
                                <option>Outros</option>
                            </select>
                        </label>
                        <label>DATA :
                            <input type='date'
                                placeholder='DD/MM/YYYY'
                            />
                        </label>
                        {telefone.substring(2, 3) === '9' && (<label>POSSUI WHATSAPP
                            <input
                                type='radio'
                                name='telefone'
                            />
                        </label>)}

                        <label>CPF/CNPJ:
                            <IMaskInput
                                type='text'
                                name='cpf'
                                mask='999.999.999-99'
                                placeholder='Digite o seu cpf'
                                value={user.cpf}
                                onChange={(e) => setCPF(e.target.value)}
                                disabled
                            />
                        </label>
                        <label>EMAIL:
                            <input
                                type='text'
                                name='email'
                                placeholder='Digite seu melhor email'
                                value={user.email}
                                onChange={(e) => setEmail(e.target.value)}
                                disabled
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
                                value={user.cep}
                                onChange={(e) => handleChange(e.target.value)}
                                disabled
                            />
                        </label>
                        <label>RUA:
                            <input
                                type='text'
                                name='rua'
                                placeholder='Digite o nome da rua'
                                value={user.rua}
                                onChange={(e) => setRua(e.target.value)}
                                disabled
                            />
                        </label>
                        <label>BAIRRO:
                            <input
                                type='text'
                                name='bairro'
                                placeholder='Digite o nome da bairro'
                                value={user.meuBairro}
                                onChange={(e) => setMeuBairro(e.target.value)}
                                disabled
                            />
                        </label>
                        <label>CIDADE:
                            <input
                                type='text'
                                name='cidade'
                                placeholder='Digite o nome da sua cidade'
                                value={user.cidade + '-' + user.uf}
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
                        </label>
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
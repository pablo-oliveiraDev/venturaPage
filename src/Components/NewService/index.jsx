import * as React from 'react';
import { useState, useContext } from 'react';
import * as IconsFc from 'react-icons/fc';
import * as S from '../assets/Styles/Components/newServices';
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
    const [countTextarea, setCountTextarea] = useState('');



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

    function textareaChange(e) {
        e.preventDefault();
        
   
        setCountTextarea(e.target.value);
        
    }

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
                        <label className='problema'>Relatar problema :
                            <textarea
                                value={countTextarea}
                                onChange={textareaChange}
                                rows={5}
                                maxLength={200}
                                placeholder='Digite aqui uma breve descrição do seu problema'
                            >
                            </textarea>
                            <span>{200 - countTextarea.length}</span>
                        </label>
                        <label >OBS :
                            <textarea disabled
                                rows={5}
                            >Todos os pedidos serão avaliados e
                                e confirmada a data junto ao nossos clientes
                            </textarea>
                        </label>

                    </div>

                </S.MyModal.Body>
                <S.MyModal.Footer className='Footer'>
                    <S.MyButton className='btn-fechar' variant="secondary" onClick={handleClose}>
                        Cancelar
                    </S.MyButton>
                    <S.MyButton className='btn-save' variant="primary" onClick={clickToSave}>
                        Solicitar
                    </S.MyButton>
                </S.MyModal.Footer>
            </S.MyModal>
        </>

    );
}
import * as React from 'react';
import { useState, useContext } from 'react';
import * as IconsFc from 'react-icons/fc';
import * as S from '../assets/Styles/Components/newServices';
import { AuthContext } from '../../context/Auth';
import { ServicesContext } from '../../context/Services';


export default function NewService({ tituloButton }) {
    const [show, setShow] = useState(false);
    const [descricao, setDescricao] = useState('');
    const [dataServico, setDataServico] = useState('');
    const [tipoServico, setTipoServico] = useState('');
    const [active, setActive] = useState(false);
    const { user } = useContext(AuthContext);
    const { newService,reload,setReload  } = useContext(ServicesContext);

    const handleClose = () => {
        setShow(false);
        setDescricao('');
        setDataServico('');
        setTipoServico('');
    };
    const clickToSave = (e) => {
        e.preventDefault();
        if (descricao !== '' &&
            tipoServico !== '' &&
            dataServico !== '') {
            newService(
                user.id,
                user.nome,
                user.email,
                user.cpf,
                user.telefone,
                user.cidade,
                user.rua,
                user.numero,
                user.cep,
                user.uf,
                user.meuBairro,
                tipoServico,
                descricao,
                dataServico
            )
            handleClose();
            setReload(!reload);
        } else {
            alert('Os Campos nao podem estar vazios!🙁');
            return;
        }
    };
    const handleShow = () => {
        setShow(true);
        setActive(true);
    };
    function textareaChange(e) {
        e.preventDefault();
        setDescricao(e.target.value);
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
                                defaultValue={'Selecione o serviço desejado'}
                                onChange={(e) => setTipoServico(e.target.value)}
                            >
                                <option disabled >Selecione o serviço desejado</option>
                                <option value='visita tecnica'>Visita tecnica</option>
                                <option value='manutencao de ar'>Manutenção de AR</option>
                                <option value='outros'>Outros</option>
                            </select>
                        </label>
                        <label>AGENDAR P/ :
                            <input type='date'
                                placeholder='DD/MM/YYYY'
                                value={dataServico}
                                onChange={(e) => setDataServico(e.target.value)}
                            />
                        </label>
                        <label className='problema'>Relatar problema :
                            <textarea
                                value={descricao}
                                onChange={textareaChange}
                                rows={5}
                                maxLength={200}
                                placeholder='Digite aqui uma breve descrição do problema do seu equipamanto'
                            >
                            </textarea>
                            <span>{200 - descricao.length + ' '}caracteres</span>
                        </label>
                        <label className='obs'>OBSERVAÇÕES :
                            <textarea disabled
                                rows={5}
                                value={'Todos os pedidos serão avaliados e confirmada a data junto ao nossos clientes'.toUpperCase()}
                            >
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
};
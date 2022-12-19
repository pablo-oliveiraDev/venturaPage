import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from '../assets/Styles/Components/sideBar';
import CadastroModal from '../CadastroModal';
import LoginModal from '../LoginModal';


const SideBAr = () => {
    const [effectMenu, setEffectMenu] = React.useState('');
    const history = useNavigate();
    const [myMenu, setMyMenu] = React.useState(false);
    const [eventKeyClick, setEventKeyClick] = React.useState('');


    const handleClickMenu = (eventKey) => {
        if (eventKey !== '') {
            setEventKeyClick(eventKey);

        }
    };
    React.useEffect(() => {
        setEffectMenu(eventKeyClick);
        if (eventKeyClick !== '') {
            history(eventKeyClick);
        }
    }, [eventKeyClick, effectMenu, history]);

    return (
        <S.MyNav variant='pills' className="flex-column" onSelect={handleClickMenu}  effect={effectMenu} >

            <S.MyNav.Link eventKey="disabled" disabled className='textMenu' >
                MENU
            </S.MyNav.Link>
            <S.MyNav.Link eventKey='/' className='btn-menu' >HOME</S.MyNav.Link>
            <S.MyNav.Link eventKey='/Dashboard' className='btn-menu'>DASHBOARD</S.MyNav.Link>
            <S.MyNav.Link eventKey='' className='btn-menu' onClick={() => setMyMenu(!myMenu)} >SERVIÇOS</S.MyNav.Link>
            {
                myMenu &&
                <>
                    <S.MyNav.Link eventKey='' className='btn-menu' >AGENDAR NOVO</S.MyNav.Link>
                    <S.MyNav.Link eventKey='/services' className='btn-menu' >AGENDADOS/REALIZADOS</S.MyNav.Link>
                </>
            }
            <CadastroModal tituloButton={'CADASTRO'} />
            <LoginModal tituloButton={'LOGIN'} />

        </S.MyNav >
    );
};
export default SideBAr;
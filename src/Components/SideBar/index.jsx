import * as React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from '../assets/Styles/Components/sideBar';
import CadastroModal from '../CadastroModal';
import LoginModal from '../LoginModal';



export default function SideBAr() {
    const [effectMenu, setEffectMenu] = useState('');
    const history = useNavigate();
    const [myMenu,setMyMenu] = useState(false);

    const handleClickMenu = async(eventKey) => {
         setEffectMenu(eventKey);
      
     await effectMenu !== '' && history(eventKey);
       

       
    };
       
    console.log(effectMenu);


    return (

        <S.MyNav variant='pills' className="flex-column" onSelect={handleClickMenu} effect={effectMenu} >

            <S.MyNav.Link eventKey="disabled" disabled  >
                MENU
            </S.MyNav.Link>
            <S.MyNav.Link eventKey='/' >HOME</S.MyNav.Link>
            <S.MyNav.Link eventKey='/Dashboard' >DASHBOARD</S.MyNav.Link>
            <S.MyNav.Link eventKey='/services' onClick={()=>setMyMenu(!myMenu)} >SERVIÇOS</S.MyNav.Link>
            {myMenu && <>
                <S.MyNav.Link eventKey='/agendar' >AGENDAR NOVO</S.MyNav.Link>
                <S.MyNav.Link eventKey='/agendados' >AGENDADOS/REALIZADOS</S.MyNav.Link>
                </>
            }
            <CadastroModal tituloButton={'CADASTRO'} />
            <LoginModal tituloButton={'LOGIN'} />

        </S.MyNav >

    );
}
import * as React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from '../assets/Styles/Components/sideBar';
import Cadastro from '../CadastroModal';



export default function SideBAr() {
    const [effectMenu, setEffectMenu] = useState('');
    const [showCadastro, setShowCadastro] = useState(null);
    const history = useNavigate();

    const handleClickMenu = async(eventKey) => {
         setEffectMenu(eventKey);
      
     await effectMenu !== '' && history(eventKey);
       

       
    };
       
    console.log(effectMenu);


    return (

        <S.MyNav variant='pills' className="flex-column" onSelect={handleClickMenu} effect={effectMenu} >

            <S.MyNav.Link eventKey="disabled" disabled  >
                Menu
            </S.MyNav.Link>
            <S.MyNav.Link eventKey='/' >Home</S.MyNav.Link>
            <S.MyNav.Link eventKey='/Dashboard' >Dashaboard</S.MyNav.Link>
            <S.MyNav.Link eventKey='/services' >Serviços</S.MyNav.Link>
            <Cadastro value='4' onClick={() => setShowCadastro(true)} showCadastro={showCadastro} />

        </S.MyNav >

    );
}
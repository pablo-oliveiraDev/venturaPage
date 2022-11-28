import React, { useContext } from 'react';
import * as S from '../assets/Styles/Components/header'
import * as IconsGi from 'react-icons/gi';
import * as IconsFA from 'react-icons/fa';
import { AuthContext } from '../../context/Auth';


export default function Header() {
    const { user, logOut } = useContext(AuthContext);
    const signed = true;

    return (
        <>
            <S.MyNavbar bg="primary" variant="dark">
                <S.MyContainer>
                    <S.MyNavbar.Brand className='brand'>Ventura Refrigeração</S.MyNavbar.Brand>
                    <div >
                        <span  onClick={()=>alert('clicou')}>Bem Vindo:<br /> {'PABLO'}
                            <IconsFA.FaRegUserCircle color={signed ? '#06b133' : '#F00'} size={25} className='iconUser' />
                        </span>
                        {signed && (<button onClick={logOut}>
                            <IconsGi.GiExitDoor className='iconHeader' size={30} color='#fff' />
                        </button>)}
                    </div>
                </S.MyContainer>
            </S.MyNavbar>

        </>
    );
}
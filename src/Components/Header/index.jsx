import React, { useContext } from 'react';
import * as S from '../assets/Styles/Components/header'
import * as IconsGi from 'react-icons/gi';
import * as IconsFA from 'react-icons/fa';
import LoginModal from '../LoginModal';
import { AuthContext } from '../../context/Auth';


export default function Header() {
    const { signed, user, logOut } = useContext(AuthContext);
    const nome = user ? user.nome : 'DESLOGADO';
    return (
        <>
            <S.MyNavbar bg="primary" variant="dark">
                <S.MyContainer>
                    <S.MyNavbar.Brand className='brand'>Ventura Refrigeração</S.MyNavbar.Brand>
                    <div >
                        <span >Bem Vindo:<br />
                            {signed ?
                                (
                                    <>
                                        <span className='spanNome' >{nome.toUpperCase()}
                                            <IconsFA.FaRegUserCircle color={signed ? '#06b133' : '#F00'} size={25} className='iconUser' />
                                            <button onClick={logOut}>
                                                <IconsGi.GiExitDoor className='iconHeader' size={30} color='#fff' />
                                            </button>
                                        </span>

                                    </>
                                )
                                :
                                (
                                    <LoginModal tituloButton={
                                        <>
                                            <span className='spanNome'>{nome}
                                                <IconsFA.FaRegUserCircle color={signed ? '#06b133' : '#F00'} size={25} className='iconUser' />
                                            </span>

                                        </>
                                    } />
                                )

                            }

                        </span>

                    </div>
                </S.MyContainer>
            </S.MyNavbar>
        </>
    );
}
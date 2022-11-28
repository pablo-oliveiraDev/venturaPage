import React from 'react';
//import Header from '../Header';
import SideBar from '../SideBar';
//import Footer from '../Footer'
import * as S from '../assets/Styles/Components/layout';
import MainHeader from '../MainHeader';


export default function Layout({ children }) {
    return (

        <S.MyMain>
            <SideBar />
            <div className='layout-main'>
                <MainHeader />
                {children}
            </div>
        </S.MyMain>
    );

}
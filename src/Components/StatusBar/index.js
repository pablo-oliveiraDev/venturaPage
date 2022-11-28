import React from 'react';
import * as S from '../assets/Styles/Components/header'

export default function StatusBar() {
    return (
        <>
            <S.MyNavbar bg="secondary" variant="dark">
                <S.MyContainer>
                    <S.MyNavbar.Brand href="#home"></S.MyNavbar.Brand>
                    <S.MyNav className="me-auto">
                      
                    </S.MyNav>
                </S.MyContainer>
            </S.MyNavbar>

        </>
    );
}
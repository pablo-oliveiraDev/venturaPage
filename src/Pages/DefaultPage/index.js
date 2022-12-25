import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../../Components/Layout';
import * as S from '../../Components/assets/Styles/Components/defaultPages';

export default function DefaultPage() {
    const history = useNavigate();
    const [countTime, setCountTime] = useState(10);
    const local = window.location.href;
    

    // setTimeout(() => history('/'), 11000);
    // setInterval(() => setCountTime(countTime - 1), 1000);

    return (
        <Layout>
            <S.Container>
                <h1>Pagina não existe! <br />
                    Por favor selecione uma page que exita em nosso menu🙁
                </h1>

                <h2>
                    
                    Redirecionando para a nossa home em :<div>{countTime}</div>
                </h2>
            </S.Container>
        </Layout>

    );
}
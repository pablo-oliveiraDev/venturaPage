import styled from 'styled-components';


export const DivGrafico = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap:nowrap;
    border: solid 2px #09fe;
    margin:10px;
    width:100%;
    h1{
        margin:10px;
    }
    @media(max-width:1024px){
       width:80%; 
       
    }
     @media(max-width:688px){
        .composedChart{
        width:300px;
       }
     }
`;

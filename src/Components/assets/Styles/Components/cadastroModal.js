import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export const MyButton = styled(Button)`
      font-weight:700;
        color:#00ff;
        margin: 20px 0;
        :hover{
        color:#fff;
        background:#00ff;
        width:100%;
        text-align:center;
    } 
    .buttonShow {
        font-size:800;
        color:#fff;
    }

`;
export const MyModal = styled(Modal)`
    .Title,
    .Body,
    .Footer,
    .Header {
        background:#00C;
        color:#fff;
    }
    label{
        margin: 10px 0;
        font-weight:700;
    
    }
    input{
        font-size:20px
    }

    .Body{
        display: flex;
        align-items:center;
        justify-content:center;
       
    }
    label .subTitle{
        
        text-align:center;
    }
    .containerSub{
        width: 250px;
        display: flex;
        flex-direction:row;
        align-items:center;
        justify-content:center;
    }
    .containerInput{
        
        display: flex;
        flex-direction:column;
        align-items:flex-end;
        justify-content:center;
    }
    
`;
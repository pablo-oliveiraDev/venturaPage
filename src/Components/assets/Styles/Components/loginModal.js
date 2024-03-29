import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';




export const MyButton = styled(Button)`
    
     .btn-save,
     .btn-close{
        font-weight:700;
        color:#00ff;
        width:150px;
        margin: 20px 0;
     }
     
   .cadastro{
    
        width:250px;
        text-decoration:none;
        list-style:none;
        text-align:center;
        margin: 20px 0;
        
        :hover{
        color:#fff;
        background:#00ff;
    }
   }

`;
export const ShowButton = styled.button`
       
    list-style:none;
    background:none;
    border:none;
    
    font-size:${props => props.active ? '2rem' : '1.25rem'};
    font-weight:${props => props.active ? 700 : 500};
    color:${props => props.active ? '#308efe' : '#555555'};
    transition: color 0.3s ease-in-out;            
    
     @media(max-width:360px){
        
     }
    
`;

export const MyModal = styled(Modal)`
    margin-top:200px;
    .Title,
    .Body,
    .Footer,
    .Header {
        background: #09fe;
        color:#fff;
        
             
    }
    .Body,
    .Footer,
    .Header {
        background-image: url(flocoDeNeve.png);
        background-size:80px;
        background-repeat:no-repeat;
        background-position:right center;

    }
   
    .Title{
        margin:0;
        display:flex;
        justify-content:center;
        align-items:center;
    }
    label{
        margin: 10px 0;
        font-weight:700;
        border: 1.5px solid #fff;
        padding-left:1ch;
       
        
    }
    input{
        font-size:20px;
        margin-left:1ch;
    }

    .Body{
        display: flex;
        align-items:center;
        justify-content:center;
       
    }
    h3 .subTitle{
        font-weight:700;        
        text-align:center;
        font-size:20px;
    }
    .containerSub{
        width: 100%;
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
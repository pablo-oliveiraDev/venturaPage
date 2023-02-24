import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export const MyContainer = styled(Container)`
    display:flex;
    justify-content:space-evenly;
    align-items:center;
    margin-right:0;
    .brand{
        font-size:25px;
        font-weight:700;
    }
   
    button{
      color:none;
      background:none;
      border:none;
   
      
    }
    @media(max-width:1024px){
    width:100%;
    margin-right:0;
  }
  @media(max-width:688px){
    div {
      justify-content: center;
    }
   
    button{
      margin-right:20px;
      width:65px
    }
    .brand{
      padding:0;
      display:flex;
      flex-direction: column;
      flex-wrap: nowrap;
      font-size:20px;
      font-weight:500;
      width:200px;      
    } 
  }
`;
export const MyNav = styled(Nav)``;
export const MyNavbar = styled(Navbar)`
  color:#fff;
  .iconUser{
      margin-left :1ch;
      margin-right :4ch;
    }
    span{
      font-size:18px;
    }
    span .spanNome{
      
      font-weight:700;
      font-size:18px;
      color:#fff;      
      display:flex;
      flex-direction:row;
      align-items:center;
      justify-content:center;
    }
    @media(max-width:688px){
   
   span .spanNome {
     font-size: 12px;
     width: 120px;           
   } 
   .iconUser {
      display:none;
     }
  }
`;
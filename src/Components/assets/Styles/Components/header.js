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
`;
export const MyNav = styled(Nav)``;
export const MyNavbar = styled(Navbar)`
  color:#fff;
  .iconUser{
      margin-left :1ch;
      margin-right :4ch;
    }

    span .spanNome{
      font-weight:800;
      color:${props => props.status ? '#06b133' : '#fff'};
    }
`;
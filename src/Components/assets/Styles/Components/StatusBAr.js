import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export const MyContainer = styled(Container)`
    @media(max-width:1024px){
    width:70%;
    margin-right:0;
  }
`;
export const MyNav = styled(Nav)`
    @media(max-width:1024px){
    width:70%;
    margin-right:0;
  }
`;
export const MyNavbar = styled(Navbar)``;
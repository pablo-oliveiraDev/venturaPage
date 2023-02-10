import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export const MyContainer = styled(Container)`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-right: 0;
  margin-top: 0px;
  height: 40px;

  .brand {
    float: flex-start;
    font-size: 25px;
    font-weight: 700;
  }

  button {
    display: flex;
    flex-direction: row;
    color: none;
    background: none;
    border: none;
  }
  @media(max-width:688px){
    .brand {
      display:none;
    }
  }
  @media(max-width:414px){
      margin-left:100px;
    }
`;
export const MyNav = styled(Nav)``;
export const MyNavbar = styled(Navbar)`
  margin: 0;
  margin-top: -20px;
  color: #fff;
  .iconUser {
    margin-left: 1ch;
    margin-right: 4ch;
  }
  span {
  }
  span .spanNome {
    font-weight: 500;
    font-size: 18px;
    color: #fff;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
 
`;

export const Header = styled.div`
  padding: 0;
  padding-top: 0;
  margin: 0;
  width: 50%;
  height: 80px;

  display: flex;
  align-items: center;
  justify-content: center;
`;
export const MyButton = styled.button`
  width: 25px;
  font-weight: bolder;
  color: #fff;
    
`;
export const MySpan = styled.span`
  font-size: 20px;
  margin-right: 1ch;
  margin-left:0;
  width: 20%;
  @media(max-width:414px){
   display:none;
  }
`;
export const MyPages = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
 button:first-child{
  margin :0;
 }
  button{
    margin-left: 20px;
    text-align: center;
  }
  @media(max-width:414px){
   
  }
`;

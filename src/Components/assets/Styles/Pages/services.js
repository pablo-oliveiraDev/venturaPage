import styled from "styled-components";
import Button from "react-bootstrap/esm/Button";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items:center;
    flex-direction: column;
  
`;
export const ItensTitulo = styled.div`
    margin-top:10px;
    margin-bottom:0;       
`;
export const Itens = styled.div`
    display: flex;
    justify-content: center;
    align-items:center;
    flex-direction: column;
    
    width:1300px;
    height:700px;
    margin-top:0;
    .titulo{
        margin:0;
        width:100%;
        height:100%;
    }

`;
export const MyButton = styled(Button)`

`;
export const MyScrool = styled.div`

  width: 100%;
  height: 700px;
  overflow-y: scroll;
  position: relative;
  scroll-behavior: auto;
  
  position:relative;
  //overflow: ${(props) => (props.setScroll === 1 ? 0 : "hidden")};
  div {
    background:#555555;
    margin-bottom:7px;
    width:95%;
    border-radius:15px;
    height:100px;
    text-align:center;
}
 @media(max-width:1024px){
  margin-top:-570px;
  height:600px;
 }
 @media(max-width:688px){
  margin-top:-350px;
  height:600px;
 }
 @media(max-width:414px){
  margin-left:15px;
  margin-top:-500px;
  }
 @media(max-width:375px){
  margin-top:-700px;
  height:480px;
  }
 @media(max-width:360px){
  margin-top:-850px;
  height:300px;
  }
  `;
import styled from "styled-components";
import Button from "react-bootstrap/esm/Button";


export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items:center;
    flex-direction: column;
 
    @media (max-width:414px ) {     
        width:200px;
    
  }
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
    margin-top:20px;
    .titulo{
        margin:0;
        width:100%;
        height:100%;
    }
    h2 {
        margin-top:20px;
    }
    @media(max-width:414px){
        flex-direction:row;
    }
`;
export const MyButton = styled(Button)`
${props => props.status === 'cancelado' && 'display:none !important'};
${props => props.status === 'andamento' && 'display:none !important'};
${props => props.status === 'finalizado' && 'display:none !important'};
margin-bottom:5px;
.icons{
    margin-right:1ch;
}
 
 @media(max-width:414px){
    
     :nth-child(n+1){
        margin-right:1ch;
     }
   
   
    span{
        display:none;
    }
    .icons{
        margin: 0;
        font-size:30px;
    }
 }
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
    background: rgba(4,4,0,0.48);
    margin-bottom:7px;
    width:95%;
    border-radius:15px;
    height:200px;
    text-align:center;
  
    .itensServices {
        margin-top:-80px;
        display: flex;
        align-items:center;
        justify-content:space-around;
        flex-direction: row;
        flex-wrap: wrap;
        width:100%;
        height:50px;
        background:none;
    }
    .itenDescricao{
        margin-top:-110px;
        display: flex;
        align-items:center;
        justify-content:space-evenly;
        margin-left:40px;
        flex-direction: row;
        flex-wrap: wrap;
        width:100%;
        height:50px;
        background:none;
    }

div .boxButtons {
    display: flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    flex-wrap:wrap;
    width:10%;
    padding:0;
    margin-bottom:40px;
    background:none;

}

label {
    border:2px solid #fff;
    padding: 0;
    border-radius: 5px;
    margin-left:10px;
    padding-left:5px;
    font-weight:500;   
    :first-child{
        margin-left:0;
    }
}
label span {
    background: #fff;
    margin-left:1ch;
    width:100%;
    height:100%;
    border-top-left-radius:6px;
    border-bottom-left-radius:6px;
    padding: 2px 2px;
    
}
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
    margin-left:110px;
    margin-top:-80px;
    width:300px;
    height:600px;
 
  div{
     height:500px;
     flex-direction:column;
      
        .itensServices{
            display:flex;
            flex-direction:column;
            justify-content:space-around;
            flex-wrap:nowrap;
           margin-top:-200px;
            //margin-bottom:20px;

        }
        label{
            margin-top:15px;
            flex-direction:column;
            margin-bottom:20px;
        }
        label span{
             margin-top:-700px;
            flex-direction:column;
            margin-bottom:10px;
             
        }
        .itensServices  label{
            margin-top:15px;
            flex-direction:column;
            
        }
    }
    div .boxButtons{
        width:250px !important;
              margin-top:00px;      
          flex-direction:row !important;
           position:static;
           top:500px;
        }
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
export const Status = styled.label`
    z-index:2;
    border:2px solid #fff;
    padding: 0;
    border-radius: 5px;
    margin-left:10px;
    padding-left:5px;   
    
  .status {
    margin:3px 3px;
    border-radius: 5px;
    z-index:-1;
    ${props => props.Status === 'aberto' && 'background:#00f;color:#fff'};
    ${props => props.Status === 'cancelado' && 'background:#f00;color:#fff'};
    ${props => props.Status === 'andamento' && 'background:#FF8C00;color:#fff'};
    ${props => props.Status === 'finalizado' && 'background:#00FF00;color:#fff'};
    
}

    @media(max-width:414px){
        position:inherit;
        bottom:-300px;
        
         .status {   
        position:static;
        bottom:-300px;         
            //margin-top:100px; 
         }
      
    }
  `;
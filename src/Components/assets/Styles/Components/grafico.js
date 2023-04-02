import styled from 'styled-components';


export const DivGrafico = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap:nowrap;
    border: solid 2px #09fe;
    margin:10px;
    margin-top:100px;
    width:50%;
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
     h3{
        margin-left:10px;
        text-align:center;      
     }
     .qntdClientes{
        display: inherit;
       margin-right:1ch;
       text-align:center;
       border: solid 1px #09fe; 
       background-color:#FFD700;
       width:40px;   
       margin-bottom:15px; 
     };
     div .tituloRel{
      text-align:center;
     }
    
         
`;
export const FormClientes = styled.form`
 display:flex !important;
        flex-direction:column; 
        align-items:center; 
        background:#09fe;   
        margin-top:80px; 
      label{
         display:flex;
         justify-content:space-between;
         width:220px;
         background:#fff;
         margin-bottom:20px;
         font-weight:bold;
         :first-child{
         margin-top:20px;
      }
     };
     span{
      display:flex;
      text-align:center;
      align-items:center;
      justify-content:center;
      position:flex-end;

       background:#FFD700;
       width:30px;
       
     };
   .tituloRel{
      margin-top:50px !important;
     }

`;
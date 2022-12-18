import styled from 'styled-components';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';



export const MyNav = styled(Nav)`
 background-color: rgba(4,4,4,0.1) ;
 
   height:800px;
    margin: 0 ;
    padding:0;
    font-weight:800;
    font-size:20px;
  .textMenu{
    margin-top:30px;
    margin-bottom:40px;
  };
   
`;

export const MyLink = styled(Link)`
        width:250px;
        text-decoration:none;
        list-style:none;
        text-align:center;
        margin: 20px 0;       
        :hover{
        color:#fff;
        background:#00ff;
    }; 

 a{
      
 
       
    }

span{
    
    font-weight:800;   
   
    :hover{
        font-size:20px;
        color:#fff;
        background:#00ff;
    }  
};

`;


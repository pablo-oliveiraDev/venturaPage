import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 * {
    margin: 0;
    padding:0;
    box-sizing:border-box;
    text-decoration:none;
    list-style:none;
    outline:none;
   
   }
   
  
   a,
   button{
      cursor: pointer;
      transition:ease-in-out .15s;
      
   }
   

   body {
      width:100%;
      margin: 0;
      padding:0;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      background:#fff;
      width:100%;
      height:100%;
     
   }
`;
export default GlobalStyle;
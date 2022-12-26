import styled from "styled-components";
import Carousel from 'react-bootstrap/Carousel';


export const MyContainer = styled('div')`
    height:600px;
`;
export const MyCarousel = styled(Carousel)`
   .imgItem{
    height:700px;
    
   }
   .caption{
    font-size:20px;
    background:#000;
    z-index:99;
   
   }
`;
  


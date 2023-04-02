import styled from "styled-components";
import Carousel from 'react-bootstrap/Carousel';


export const MyContainer = styled('div')`
    height:600px;
    .titulo{
        text-align:center;
        margin-top:10px;
    }
    @media(max-width:1024px){
        .titulo {
        margin-top:200px;
        margin-bottom:0;
        text-align:center;
     }
      @media(max-width:688px){
        .titulo {
            margin-top:100px;
        }
        
      }
       @media(max-width:375px){
            .titulo {
                
                margin-top:50px;
            }
       }
       @media(max-width:360px){
        .titulo {
            margin-top:50px;
        }        
      }
      @media(max-height:667px){
            .titulo {
            margin-top:20px;
        }
         }
   }
`;
export const MyCarousel = styled(Carousel)`
   .imgItem img{
    height:700px;
    
   }
   .caption{
    font-size:20px;
    background:#000;
    z-index:99;
   
   }
   @media(max-width:1024px){
    margin-top:20px;     
   }
    @media(max-width:414px){
        .imgItem{
            height:300px;
        }
        .caption{
            font-size:14px;
            height:80px;
        }
        h3{
            display:none;
        }
    }

    @media(max-height:667px){
            .imgItem{
            height:250px;
        }
        .caption{
            font-size:14px;
            height:80px;
        }
        h3{
            display:none;
        }
     }
     
     @media(max-width:375px){
        .imgItem{
            height:300px;
        }
        
    }
      
`;



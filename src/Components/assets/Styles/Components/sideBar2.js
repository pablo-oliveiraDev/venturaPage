import styled from 'styled-components';



export const MySideMenu = styled.div`
height:1200px;
width: 380px;
background-color: rgba(4,4,4,0.1);

@media (max-width:1024px ) {
    width:120px;
    height:1300px;
   
  }
   @media (max-height:667px) {
    height:600px;
  }
   
  @media (max-width:412px ) {
 
    width:100px;
    .sidebar__logo{
      margin-bottom:0rem;
    }
  }
   @media (max-width:375px ) {
    height:815px;
  }
  @media (max-width:360px ) {
    width:80px;
  }
.sidebar {
   
    position: fixed;
    top: 0;
    left: 0;
    height: 800vh;
    width: 380px;
    background-color: #000;
    list-style: none;
    text-decoration:none;
    

    &__logo {
        display: grid;
        place-items: center;
        height: 120px;
        font-size: 1.5rem;
        font-weight: 700;
        font-family: 'Mochiy Pop P one', sans-serif;
        margin-bottom:3rem;
        span{
          display:none;
        }
        @media (max-width:688px) {
          margin-bottom:0rem;
           i{
            display:none;
          }          
          span{
            display:flex;
          } 
        }        
         @media (max-width:412px) {
           margin-bottom:0rem;
           i{
            display:none;
          }          
          span{
            display:flex;
          }         
         }
        @media (max-width:360px) { 
          margin-bottom:0rem;
          i{
            display:none;
          }          
          span{
            display:flex;
          }         
          
         
        }
    }

    &__menu {
        
        position: relative;
        

        &__item {
            height:3rem;
            display: flex;
            align-items: center;
            justify-content:center;
            place-content: flex-start;
            padding: 3rem 3rem;
            font-size: 1.25rem;
            font-weight: 500;
            color: #555555;
            transition: color 0.3s ease-in-out;
            z-index:99;
            

            &.active {
                color: #fff;
                font-size: 1.75rem;
            }

            &__icon {
                margin-right: 1rem;
                 margin-bottom:5px;
                i {
                    font-size: 1.75rem;
                   
                }
            }
        }

        &__indicator {
            position: absolute;
            top: 0;
            left: 50%;
            width: calc(100% - 40px);
            border-radius: 10px;
            background-color: #308efe;
            z-index: -99;
            transform: translateX(-50%);
            transition: 0.3s ease-in-out;
        }
        @media(max-width:1024px){
          
          .sidebar{
           
          }
          
          .sidebar__menu{
          
          }
          .sidebar__menu__item__icon{
          margin:2px;
          size: 1.75rem;
          
          }
          .sidebar__menu__item{
         padding:3rem 2rem;
          
          }
          .sidebar__menu__item__text {
            display:none;
          }
          .sidebar__menu__indicator{
            width: calc(120% - 30px);
            
            
          }
        }
        @media (max-width:688px ) {
            .sidebar__menu__indicator{            
            width: calc(120% - 25px);                       
          }
        }
         @media (max-width:412px ) {
          
          
          .sidebar__menu__indicator{            
            width: calc(130% - 30px);                       
          }
          
          }
        
        @media (max-width:375px ) {
          .sidebar__menu__indicator{            
            width: calc(120% - 30px);                       
          }
          .sidebar__menu__item{
         padding:2rem 2rem;
          
        }
        }
        @media (max-width:360px) { 
          .sidebar{
            margin-top:-200px; 
            
          }        
          .sidebar__menu__item{
         padding:1.8rem 1.8rem;
          
        }
        .sidebar__logo {
        margin-bottom:0px;
        }
        
        }
    }
}
`;


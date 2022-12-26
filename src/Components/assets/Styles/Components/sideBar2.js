import styled from 'styled-components';



export const MySideMenu = styled.div`
height:800px;
width: 380px;
background-color: rgba(4,4,4,0.1);

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
    }
}
`;


import { useContext, useEffect, useRef, useState } from 'react';
import { Link, Navigate, useLocation } from 'react-router-dom';
import * as S from '../assets/Styles/Components/sideBar2';
import CadastroModal from '../CadastroModal';
import LoginModal from '../LoginModal';
import * as IconsMenu from 'react-icons/tb';
import { AuthContext } from '../../context/Auth';


const sidebarNavItems = [
    {
        display: 'Home',
        icon: <i className='bx bx-home'><IconsMenu.TbHome size={30} /></i>,
        to: '/',
        section: ''
    },
    {
        display: 'Dashboard',
        icon: <i className='bx bx-star'><IconsMenu.TbLayoutDashboard size={30} /></i>,
        num: 2,
        to: '/Dashboard',
        section: 'Dashboard'
    },
    {
        display: 'Serviços',
        icon: <i className='bx bx-calendar'><IconsMenu.TbShoppingCartPlus size={30} /></i>,
        num: 3,
        to: '/services',
        section: 'services'
    },
    {
        display: <CadastroModal tituloButton={'Cadastro'} />,
        icon: <i className='bx bx-receipt'><CadastroModal tituloButton={<IconsMenu.TbListCheck size={30} />} /></i>,

        section: '/cadastro',
        new: 5,

    },
    {
        display: <LoginModal tituloButton={'Login'} />,
        icon: <i className='bx bx-receipt'  ><LoginModal tituloButton={<IconsMenu.TbDoorEnter size={30} />} /></i>,

        section: 'login'
    },
]

const Sidebar = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [stepHeight, setStepHeight] = useState(0);
    const sidebarRef = useRef();
    const indicatorRef = useRef();
    const location = useLocation();
    const { signed } = useContext(AuthContext);



    useEffect(() => {
        setTimeout(() => {
            const sidebarItem = sidebarRef.current.querySelector('.sidebar__menu__item');
            indicatorRef.current.style.height = `${sidebarItem.clientHeight}px`;
            setStepHeight(sidebarItem.clientHeight);
        }, 50);
    }, []);

    // change active index
    useEffect(() => {
        const curPath = window.location.pathname.split('/')[1];
        const activeItem = sidebarNavItems.findIndex(item => item.section === curPath);
        setActiveIndex(curPath.length === 0 ? 0 : activeItem);
    }, [location]);


    return (
        <S.MySideMenu className='sidebar'>

            <div className="sidebar__logo">
                <span><IconsMenu.TbMenu2 size={25} /></span><i>MENU</i>
            </div>
            <div ref={sidebarRef} className="sidebar__menu">
                <div
                    ref={indicatorRef}
                    className="sidebar__menu__indicator"
                    style={{
                        transform: `translateX(-50%) translateY(${activeIndex * stepHeight}px)`
                    }}
                ></div>
                {sidebarNavItems.map((item, index) => (
                    <Link to={item.to} key={index} >

                        <div className={`sidebar__menu__item ${activeIndex === index ? 'active' : ''}`}>

                            <div className="sidebar__menu__item__icon">
                                {item.icon}
                            </div>
                            <div className="sidebar__menu__item__text">
                                {item.display}
                            </div>
                        </div>
                    </Link>
                ))
                }
            </div>
        </S.MySideMenu >
    )
};

export default Sidebar;
import { useEffect, useRef, useState } from 'react';
import { Link, Navigate, useLocation } from 'react-router-dom';
import * as S from '../assets/Styles/Components/sideBar2';
import CadastroModal from '../CadastroModal';
import LoginModal from '../LoginModal';
import * as IconsMenu from 'react-icons/tb';


const sidebarNavItems = [
    {
        display: 'Home',
        icon: <i className='bx bx-home'><IconsMenu.TbHome size={20} /></i>,
        num: 1,
        to: '/',
        section: ''
    },
    {
        display: 'Dashboard',
        icon: <i className='bx bx-star'><IconsMenu.TbLayoutDashboard size={20} /></i>,
        num: 2,
        to: '/Dashboard',
        section: 'Dashboard'
    },
    {
        display: 'Serviços',
        icon: <i className='bx bx-calendar'><IconsMenu.TbLayoutDashboard size={20} /></i>,
        num: 3,
        to: '/services',
        section: 'services'
    },
    {
        display: 'User',
        icon: <i className='bx bx-user'><IconsMenu.TbLayoutDashboard size={20} /></i>,
        num: 4,
        to: '/user',
        section: 'user'
    },
    {
        display: 'Orders',
        icon: <i className='bx bx-receipt'><IconsMenu.TbLayoutDashboard size={20} /></i>,
        num: 5,
        to: '/order',
        section: 'order'
    },
    {
        display: <CadastroModal as={Link} tituloButton={'Cadastro'} className="sidebar__menu__item__text" />,
        icon: <i className='bx bx-receipt'><IconsMenu.TbLayoutDashboard size={20} /></i>,
        num: 6,
        //to: 'cadastro',
        section: 'cadastro'
    },
    {
        display: <LoginModal as={Link} className="sidebar__menu__item__text" tituloButton={'Login'} />,
        icon: <i className='bx bx-receipt'><IconsMenu.TbUser size={20} /></i>,
        num: 7,
       // to: 'login',
        section: 'login'
    },
]

const Sidebar = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [stepHeight, setStepHeight] = useState(0);

    const sidebarRef = useRef();
    const indicatorRef = useRef();
    const location = useLocation();



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
                MENU
            </div>
            <div ref={sidebarRef} className="sidebar__menu">
                <div
                    ref={indicatorRef}
                    className="sidebar__menu__indicator"
                    style={{
                        transform: `translateX(-50%) translateY(${activeIndex * stepHeight}px)`
                    }}
                ></div>
                {
                    sidebarNavItems.map((item, index) => (
                        <Link to={item.to} key={index}>
                            <div className={`sidebar__menu__item ${activeIndex === index ? 'active' : ''}`}>
                                {item.icon}
                                <div className="sidebar__menu__item__icon">

                                </div>
                                <div className="sidebar__menu__item__text">
                                    {item.display}
                                </div>
                            </div>
                        </Link>
                    ))
                }

            </div>

        </S.MySideMenu>
    )
};

export default Sidebar;
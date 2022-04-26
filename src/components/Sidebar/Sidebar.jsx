import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { FiSidebar } from "react-icons/fi";
import { FiShoppingBag } from "react-icons/fi";
import { FiTrendingUp } from "react-icons/fi";
import { FiThumbsUp } from "react-icons/fi";
import './Sidebar.scss';

const sidebarNavItems = [
    {
        display: 'Dashboard',
        icon: <FiSidebar />,
        to: '/',
        section: ''
    },
    {
        display: 'Income',
        icon: <FiTrendingUp />,
        to: '/incomes',
        section: 'incomes'
    },
    {
        display: 'Expense',
        icon: <FiShoppingBag />,
        to: '/expenses',
        section: 'expenses'
    },
    {
        display: 'Goals',
        icon: <FiThumbsUp />,
        to: '/goals',
        section: 'goals'
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

    return <div className='sidebar'>
        <div className="sidebar__logo">
            Monefy
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
    </div>;
};

export default Sidebar;

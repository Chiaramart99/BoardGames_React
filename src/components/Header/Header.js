import React, { useState } from 'react';
import {
    Collapse,
    Nav,
    Navbar,
    NavbarToggler,
    NavItem
} from 'reactstrap';

import {NavLink as RouterLink} from "react-router-dom";
import style from "./Header.module.css";

function Header(props) {
    const {logo, navItems} = props;

    // menu mobile, se il menu è espanso (non mobile) non hanno effetto
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const itemList = navItems.map((item) => {
        return (
            <NavItem key={item.url} className={style.navItem}>
                <RouterLink
                            className={({ isActive }) =>
                                isActive ? style.active : undefined
                            }
                            to={item.url}
                            >
                              {item.text}
                </RouterLink>
            </NavItem>
        )
    });

    return (
        <div className={style.navBar}>

            <Navbar expand="md" light >
                <div className="container">

                    <RouterLink to="/">
                        <img className={style.logo} src={logo} alt="" />
                    </RouterLink>


                    <NavbarToggler onClick={toggle} id={style.collapse}/>

                    <Collapse isOpen={isOpen} navbar>

                        <Nav className={`mr-auto ${style.voci}`} navbar>

                            {itemList}

                        </Nav>

                    </Collapse>

                </div>

            </Navbar>

        </div>

    );
}

export default Header;
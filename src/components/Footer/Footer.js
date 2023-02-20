import React from "react";
import style from "./Footer.module.css";
import unimib from "../../assets/images/unimib.png";
import {NavLink} from "react-router-dom";

function Footer(props) {
    const {courseName, courseLink, navItems} = props;

    const itemList = navItems.map((item) => {
        return (
            <li key={item.url}>
                <NavLink
                         className={({ isActive }) =>
                             isActive ? style.active : undefined}
                         to={item.url}>
                    {item.text}
                </NavLink>
            </li>
        )
    });


    return (
        <footer className={style.footer}>

            <div className="container-fluid">

                <div className="row">

                    <div className="col">
                        <nav className={style.footerNav}>

                            <ul className="nav flex-column">
                                {itemList}
                            </ul>
                        </nav>
                    </div>

                   <div className="col-md-auto">

                       <div className={`d-flex ${style.copyright}`}>

                          <div id={style.course}>
                              <a href={courseLink} target="_blank">
                                  {courseName}
                              </a>
                          </div>

                           <div className={style.logo}>
                               <a href="https://www.unimib.it/" target="_blank">
                                   <img src={unimib} alt="unimib"/>
                               </a>

                           </div>

                       </div>

                   </div>

                </div>

            </div>

        </footer>
    )
}

export default Footer;
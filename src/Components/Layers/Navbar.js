import React from 'react';
import logo from '../../Misc/logo.png';
import { NavLink  } from "react-router-dom";
function Navbar(props) {
    const [isTop, setIsTop] = React.useState(true)
    React.useEffect(()=>{
        document.addEventListener('scroll', () => {
            const isTopEl = window.scrollY < 100;
            if (isTopEl !== isTop) {
                setIsTop(isTopEl)
            } else{
                setIsTop(true)
            }
          });
    },[])
    return (
        <>  
            <header className="App-header" style={isTop?{display:'block'}:{display:'none'}}>
                <img src={logo} className="App-logo" alt="logo" /> 
            </header>
            <div className={isTop?'navbar-header':'navbar-fixed'} >
            <nav>
                <div className="nav-wrapper container">
                    <a href="#!" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                    <ul  className="right hide-on-med-and-down">
                        <li><NavLink exact={true} activeClassName='active' className="waves-effect waves-light" to="/">О компании</NavLink ></li>
                        <li><NavLink  className="waves-effect waves-light" to="/products">Продукция</NavLink ></li>
                        <li><NavLink  className="waves-effect waves-light" to="/news">Информация</NavLink ></li>
                        <li><NavLink  className="waves-effect waves-light" to="/contacts">Контакты</NavLink ></li>
                    </ul>
                </div>
            </nav>
            <ul className="sidenav" id="mobile-demo">
                <li><NavLink exact={true} activeClassName='active' to="/">О компании</NavLink ></li>
                <li><NavLink  to="/products">Продукция</NavLink ></li>
                <li><NavLink  to="/news">Информация</NavLink ></li>
                <li><NavLink  to="/contacts">Контакты</NavLink ></li>
            </ul>
        </div>
    </>
    );
}

export default Navbar;
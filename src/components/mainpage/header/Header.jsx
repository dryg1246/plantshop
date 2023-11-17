import React from 'react'
import "./Header.scss"
export const Header = () => {

    const Logo = ({textLogo, imgLogo}) => {
        return (
            <div className="logo">
                <img src={imgLogo} alt="logo"/>
                <p>{textLogo}</p>
            </div>
        )
    }
    const Navigation = ({textHome, textShop, textPlant, textBlogs}) => {
        return (
            <nav className="nav">
                <ul className="nav-list">
                    <li className="nav-list-home">{textHome}</li>
                    <li>{textShop}</li>
                    <li>{textPlant}</li>
                    <li>{textBlogs}</li>
                </ul>
            </nav>
        )
    }
    const Login = ({imgSearch, imgCart, imgLogout, textLogin}) => {
        return (
            <div className="login">
                <img src={imgSearch} alt=""/>
                <img src={imgCart} alt=""/>
                <button className="login-btn" >
                    <img src={imgLogout} alt=""/>
                    <p>{textLogin}</p>
                </button>
            </div>
        )
    }

    return (
        <div className="container">
        <div className="header">
            <Logo
                textLogo="GREENSHOP"
                imgLogo="/img/logo.svg"
            />
            <Navigation
                textHome="Home"
                textShop="Shop"
                textPlant="Plant Care"
                textBlogs="Blogs"
            />
           <Login
               imgSearch="/img/search.svg"
               imgCart="/img/cart.svg"
               imgLogout="/img/Logout.svg"
               textLogin="Login"
           />
        </div>
        </div>
    )
}

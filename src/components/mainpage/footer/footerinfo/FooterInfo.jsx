import React from 'react'
import "./FooterInfo.scss"

export const FooterInfo = () => {
    return (
        <div className="footer-info">
            <div className="footer-info-logo">
                <img width="34" height="34" src="/img/logo.svg" alt=""/>
                <h1>GREENSHOP</h1>
            </div>
            <div className="footer-info-address">
                <img width="20" height="20" src="/img/adres.svg" alt=""/>
                <p>70 West Buckingham Ave. <br />Farmingdale, NY 11735</p>
            </div>
            <div className="footer-info-contact">
                <img width="20" height="20" src="/img/contact.svg" alt=""/>
                <p>contact@greenshop.com</p>
            </div>
            <div className="footer-info-phone">
                <img width="20" height="20" src="/img/telefon.svg" alt=""/>
                <p>+88 01911 717 490</p>
            </div>
        </div>
    )
}

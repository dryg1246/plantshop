import React from 'react'
import "./Footer.scss"
import {FooterInfo} from "./footerinfo/FooterInfo";

export const FooterCard = ({imgMain, textMain, subText}) => {
    return (
        <div className="footer-newsletters-card">
            <img src={imgMain} alt=""/>
            <h2>{textMain}</h2>
            <p>{subText}</p>
        </div>
    )
}

export const FooterLink = ({mainText, subText1, subText2, subText3, subText4, subText5}) => {
    return (
        <div className="link">
            <h2>{mainText}</h2>
            <ul className="link2">
                <li><a href="">{subText1}</a></li>
                <li><a href="">{subText2}</a></li>
                <li><a href="">{subText3}</a></li>
                <li><a href="">{subText4}</a></li>
                <li><a href="">{subText5}</a></li>
            </ul>
        </div>
    )
}


export const Footer = () => {
    return (
        <div className="container">
            <footer className="footer">
                <div className="footer-newsletters">
                    <div className="footer-card">
                        <FooterCard
                            imgMain="/img/garden.png"
                            textMain="Garden Care"
                            subText="We are an online plant shop offering a wide range of cheap and trendy plants."
                        />
                        <FooterCard
                            imgMain="/img/plant-renovation.png"
                            textMain="Plant Renovation"
                            subText="We are an online plant shop offering a wide range of cheap and trendy plants."
                        />
                        <FooterCard
                            imgMain="/img/watering-garden.png"
                            textMain="Watering Graden"
                            subText="We are an online plant shop offering a wide range of cheap and trendy plants."
                        />
                    </div>
                    <div className="footer-email">
                        <h2>Would you like to join newsletters?</h2>
                        <div className="footer-email-input">
                            <input placeholder="enter your email address..." type="text"/>
                            <button>
                                <p>Join</p>
                            </button>
                        </div>
                        <p>We usually post offers and challenges in newsletter. We’re <br/> your online houseplant
                            destination. We offer a wide range of houseplants and accessories sh ipped directly from our
                            (green)house to yours! </p>
                    </div>
                </div>
                <FooterInfo/>
                <div className="footer-mainInformation">
                    <div className="footer-mainInformation-link">
                        <FooterLink
                            mainText="My Account"
                            subText1="My Account"
                            subText2="Our stores"
                            subText3="Contact us"
                            subText4="Career"
                            subText5="Specials"
                        />
                        <FooterLink
                            mainText="Help & Guide"
                            subText1="Help Center"
                            subText2="How to Buy"
                            subText3="Shipping & Delivery"
                            subText4="Product Policy"
                            subText5="How to Return"
                        />
                        <FooterLink
                            mainText="Categories"
                            subText1="House Plants"
                            subText2="Potter Plants"
                            subText3="Seeds"
                            subText4="Small Plants"
                            subText5="Accessories"
                        />
                    <div className="footer-mainInformation-media">
                        <div className="footer-mainInformation-media-social">
                            <h2>Social Media</h2>
                            <div className="footer-mainInformation-media-social-img">
                                <img src="/img/facebook.png" alt=""/>
                                <img src="/img/instagram.png" alt=""/>
                                <img src="/img/twitter.png" alt=""/>
                                <img src="/img/linkedin.png" alt=""/>
                                <img src="/img/union.png" alt=""/>
                            </div>
                        </div>
                        <div className="footer-mainInformation-media-pay">
                            <h2>We accept</h2>
                            <img src="/img/pay.png" alt=""/>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="all-rights">
                    <p className="all-rights-text">© 2021 GreenShop. All Rights Reserved.</p>
                </div>
            </footer>
        </div>
    )
}

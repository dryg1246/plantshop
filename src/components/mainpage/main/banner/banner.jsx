import React from 'react'
import "./banner.scss"


export const BannerLeft = ({textWelcome, bigText, bigTextGreen, subtext, btnText}) => {
    return (
        <div className="banner-left">
            <div className="banner-left-text">
                <p className="banner-left-welcome">{textWelcome}</p>
                <h1 className="banner-left-bigText">{bigText}<span
                    className="banner-left-bigText-green"> {bigTextGreen} </span></h1>
                <p className="banner-left-subtext">{subtext}</p>
            </div>
            <button className="banner-btn">
                <p>{btnText}</p>
            </button>
        </div>
    )
}

export const BannerRight = ({imgPlant}) => {
    return (
        <div className="banner-right">
            <img src={imgPlant} alt=""/>
        </div>
    )
}


export const Banner = () => {
    return (
        <div className="container">
            <div className="banner">
                <BannerLeft
                    textWelcome="Welcome to GreenShop"
                    bigText="Let’s Make a Better"
                    bigTextGreen="Planet"
                    subtext="We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!"
                    btnText="SHOP NOW"
                />
                <BannerRight
                    imgPlant="/img/plant-banner.png"
                />
            </div>
        </div>
    )
}

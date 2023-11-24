import React from 'react'
import "./PlantShopBanner.scss"

export const PlantShopBanner = ({mainTextFour, subtextFour, imgBanner }) => {
    return (
        <div className="plant-shopping-left-banner">
            <h3 className="plant-shopping-left-banner-text">{mainTextFour}</h3>
            <p className="plant-shopping-left-banner-subtext"> {subtextFour} </p>
            <img className="plant-shopping-left-banner-img" src={imgBanner} alt=""/>
        </div>
    )
}

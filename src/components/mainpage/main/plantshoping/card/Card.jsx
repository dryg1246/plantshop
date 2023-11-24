import React from 'react'
import "./Card.scss"

export const Card = ({imgCard, imgWidth, imgHeight, imgAlt, namePlant, pricePlant}) => {
    return (
        <div className="plant-shopping-right-card">
            <div className="plant-shopping-right-card-img">
                <img src={imgCard} width={imgWidth} height={imgHeight} alt={imgAlt}/>
            </div>
            <div className="plant-shopping-right-card-text">
                <p>{namePlant}</p>
                <b>{pricePlant}</b>
            </div>
        </div>
    )
}

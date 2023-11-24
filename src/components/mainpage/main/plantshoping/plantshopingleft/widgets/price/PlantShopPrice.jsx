import React from 'react'
import "./PlantShopPrice.scss"

export const PlantShoppingPrice= ({mainTextTwo, subtextOne, subtextTwo}) => {
    return (
        <div className="plant-shopping-left-price">
            <p className="plant-shopping-left-price-text">{mainTextTwo}</p>
            <input type="range" className="plant-shopping-left-price-range"/>
            <p className="plant-shopping-left-price-dollar">{subtextOne}<b
                className="plant-shopping-left-price-dollar-green">{subtextTwo}</b></p>
            <button className="plant-shopping-left-price-filter">
                <p>Filter</p>
            </button>
        </div>
    )
}

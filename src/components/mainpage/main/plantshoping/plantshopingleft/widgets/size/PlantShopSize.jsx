import React from 'react'
import "./PlantShopSize.scss"
export const PlantShoppingSize = ({mainTextThree}) => {
    const SortingItem = ({mainText, quantity}) => {
        return (
            <ul className="plant-shopping-left-sorting-item">
                <a href="#">{mainText}</a>
                <p>{quantity}</p>
            </ul>
        )
    }
    return (
        <div className="plant-shopping-left-size">
            <p className="plant-shopping-left-size-text">{mainTextThree}</p>
            <SortingItem
                mainText="Small"
                quantity="(12)"
            />
            <SortingItem
                mainText="Medium"
                quantity="(86)"
            />
            <SortingItem
                mainText="Large"
                quantity="(78)"
            />
        </div>
    )
}

import React from "react";
import "./PlantShoppingCategories.scss"
export const PlantShoppingCategories = ({navigationTextOne, navigationTextTwo, navigationTextThree}) => {
    return (
        <div className="plant-shopping-right-sorting-categories">
            <a className="plant-shopping-right-sorting-categories-green" href="">
                {navigationTextOne}
            </a>
            <a href="">
                {navigationTextTwo}
            </a>
            <a href="">
                {navigationTextThree}
            </a>
        </div>
    )
}
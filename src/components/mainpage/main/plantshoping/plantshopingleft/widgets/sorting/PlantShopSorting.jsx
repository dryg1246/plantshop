import React from "react";
import "./PlantShopSorting.scss"
const SortingItem = ({mainText, quantity}) => {
    return (
        <ul className="plant-shopping-left-sorting-item">
            <a href="#">{mainText}</a>
            <p>{quantity}</p>
        </ul>
    )
}

export const PlantShoppingSorting = ({mainTextOne}) => {
    const SortingItems = () => {
        return (
            <div>
                <SortingItem mainText="House Plants" quantity="(33)"/>
                <SortingItem mainText="Potter Plants" quantity="(12)"/>
                <SortingItem mainText="Seeds" quantity="(65)"/>
                <SortingItem mainText="Small Plants" quantity="(39)"/>
                <SortingItem mainText="Big Plants" quantity="(23)"/>
                <SortingItem mainText="Succulents" quantity="(12)"/>
                <SortingItem mainText="Terrariums" quantity="(19)"/>
                <SortingItem mainText="Gardening" quantity="(13)"/>
                <SortingItem mainText="Accessories" quantity="(18)"/>
            </div>
        );
    };
    return (
        <div className="plant-shopping-left-sorting">
            <p className="plant-shopping-left-sorting-categories">{mainTextOne}</p>
            <SortingItems/>
        </div>
    )
}
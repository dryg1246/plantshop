import React from 'react'
import "./PlantShopping.scss"
import {PlantShoppingLeft} from "./plantshopingleft/PlantShoppingLeft";
import {PlantShoppingRight} from "./plantshopingright/PlantShoppingRight";


export const cardData = [
    {
        imgCard: "/img/plant-barberton.png",
        imgWidth: "250",
        imgHeight: "250",
        imgAlt: "barberton",
        namePlant: "Barberton Daisy",
        pricePlant: "$119.00",
    },
    {
        imgCard: "/img/plant-angel.png",
        imgWidth: "250",
        imgHeight: "250",
        imgAlt: "Angel",
        namePlant: "Angel Wing Begonia",
        pricePlant: "$169.00",
    },
    {
        imgCard: "/img/plant-african.png",
        imgWidth: "250",
        imgHeight: "250",
        imgAlt: "African",
        namePlant: "African Violet",
        pricePlant: "$199.00",
    },
    {
        imgCard: "/img/plant.png",
        imgWidth: "250",
        imgHeight: "250",
        imgAlt: "Beach Spider",
        namePlant: "Beach Spider Lily",
        pricePlant: "$129.00",
    },
    {
        imgCard: "/img/plant-blushing.png",
        imgWidth: "250",
        imgHeight: "250",
        imgAlt: "Blushing",
        namePlant: "Blushing Bromeliad",
        pricePlant: "$179.00",
    },
    {
        imgCard: "/img/plant-aluminium.png",
        imgWidth: "250",
        imgHeight: "250",
        imgAlt: "Aluminum Plant",
        namePlant: "Aluminum Plant",
        pricePlant: "$99.00",
    },
    {
        imgCard: "/img/plant-bird's.png",
        imgWidth: "250",
        imgHeight: "250",
        imgAlt: "Bird's Nest Fern",
        namePlant: "Bird's Nest Fern",
        pricePlant: "$179.00",
    },
    {
        imgCard: "/img/plant-broadleaf.png",
        imgWidth: "250",
        imgHeight: "250",
        imgAlt: "Broadleaf Lady Palm",
        namePlant: "Broadleaf Lady Palm",
        pricePlant: "$59.00",
    },
    {
        imgCard: "/img/plant-chinese.png",
        imgWidth: "250",
        imgHeight: "250",
        imgAlt: "Chinese Evergreen",
        namePlant: "Chinese Evergreen",
        pricePlant: "$39.00",
    }
];
export const PlantShopping = () => {
    return (
        <div className="container">
            <div className="plant-shopping">
                <PlantShoppingLeft
                    mainTextOne="Categories"
                    mainTextTwo="Price Range"
                    subtextOne="Price: "
                    subtextTwo="$39 - $1230"
                    subtextThree="Filter"
                    mainTextThree="Size"
                    mainTextFour="Super Sale"
                    subtextFour="UP TO 75% OFF"
                    imgBanner="/img/plant-banner-sale.png"
                />
                <PlantShoppingRight
                    navigationTextOne="All Plants"
                    navigationTextTwo="New Arrivals"
                    navigationTextThree="Sale"
                    sortingTextOne="Short by:"
                    sortingTextTwo="Default sorting"
                    sortingImg="/img/arrow_down.svg"
                    firstPage="1"
                    twicePage="2"
                    thirdPage="3"
                    fourthPage="4"
                    imgArrow="/img/arrow-right-black.svg"
                />
            </div>
        </div>

    )
}

import React from 'react'
import "./PlantShoping.scss"
import {Card} from "./card/Card";

export const SortingItem = ({mainText, quantity}) => {
    return (<ul className="plant-shopping-left-sorting-item">
        <a href="#">{mainText}</a>
        <p>{quantity}</p>
    </ul>)
}
const Sorting = () => {
    return (<div>
        <SortingItem mainText="Potter Plants" quantity="(12)"/>
        <SortingItem mainText="Seeds" quantity="(65)"/>
        <SortingItem mainText="Small Plants" quantity="(39)"/>
        <SortingItem mainText="Big Plants" quantity="(23)"/>
        <SortingItem mainText="Succulents" quantity="(12)"/>
        <SortingItem mainText="Terrariums" quantity="(19)"/>
        <SortingItem mainText="Gardening" quantity="(13)"/>
        <SortingItem mainText="Accessories" quantity="(18)"/>
    </div>);
};

export const PlantShopping = () => {
    return (<div className="container">
            <div className="plant-shopping">
                <div className="plant-shopping-left">
                    <div className="plant-shopping-left-sorting">
                        <p className="plant-shopping-left-sorting-categories">Categories</p>
                        <ul className="plant-shopping-left-sorting-item-green">
                            <a>House Plants</a>
                            <p>(33)</p>
                        </ul>
                        <Sorting/>
                        <div className="plant-shopping-left-price">
                            <p className="plant-shopping-left-price-text">Price Range</p>

                            <input type="range" className="plant-shopping-left-price-range"/>
                            <p className="plant-shopping-left-price-dollar">Price: <b
                                className="plant-shopping-left-price-dollar-green">$39 - $1230</b></p>
                            <button className="plant-shopping-left-price-filter">
                                <p>Filter</p>
                            </button>
                        </div>

                        <div className="plant-shopping-left-size">
                            <p className="plant-shopping-left-size-text">Size</p>
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
                        <div className="plant-shopping-left-banner">
                            <h3 className="plant-shopping-left-banner-text">Super Sale</h3>
                            <p className="plant-shopping-left-banner-subtext"> UP TO 75% OFF </p>
                            <img className="plant-shopping-left-banner-img" src="/img/plant-banner-sale.png" alt=""/>
                        </div>
                    </div>
                </div>
                <div className="plant-shopping-right">
                    <div className="plant-shopping-right-sorting">
                        <div className="plant-shopping-right-sorting-categories">
                            <a href="">
                                All Plants
                            </a>
                            <a href="">
                                New Arrivals
                            </a>
                            <a href="">
                                Sale
                            </a>
                        </div>
                        <div className="plant-shopping-right-sorting-img">
                            <p>Short by:</p>
                            <p>Default sorting</p>
                            <img src="/img/arrow_down.svg" alt=""/>
                        </div>
                    </div>
                    <div className="plant-shopping-right-product">
                            <Card
                                imgCard="/img/plant-barberton.png"
                                imgWidth="250"
                                imgHeight="250"
                                imgAlt="barberton"
                                namePlant="Barberton Daisy"
                                pricePlant="$119.00"
                            />
                    <Card
                        imgCard="/img/plant-barberton.png"
                        imgWidth="250"
                        imgHeight="250"
                        imgAlt="barberton"
                        namePlant="Barberton Daisy"
                        pricePlant="$119.00"
                    />
                    <Card
                        imgCard="/img/plant-barberton.png"
                        imgWidth="250"
                        imgHeight="250"
                        imgAlt="barberton"
                        namePlant="Barberton Daisy"
                        pricePlant="$119.00"
                    />
                    <Card
                        imgCard="/img/plant-barberton.png"
                        imgWidth="250"
                        imgHeight="250"
                        imgAlt="barberton"
                        namePlant="Barberton Daisy"
                        pricePlant="$119.00"
                    />
                    </div>
                </div>
            </div>
        </div>

    )
}

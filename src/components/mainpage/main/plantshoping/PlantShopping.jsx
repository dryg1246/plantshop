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
                            imgCard="/img/plant-angel.png"
                            imgWidth="250"
                            imgHeight="250"
                            imgAlt="Angel"
                            namePlant="Angel Wing Begonia"
                            pricePlant="$169.00"
                        />
                        <Card
                            imgCard="/img/plant-african.png"
                            imgWidth="250"
                            imgHeight="250"
                            imgAlt="African"
                            namePlant="African Violet"
                            pricePlant="$199.00"
                        />
                        <Card
                            imgCard="/img/plant.png"
                            imgWidth="250"
                            imgHeight="250"
                            imgAlt="Beach Spider "
                            namePlant="Beach Spider Lily"
                            pricePlant="$129.00"
                        />
                        <Card
                            imgCard="/img/plant-blushing.png"
                            imgWidth="250"
                            imgHeight="250"
                            imgAlt="Blushing"
                            namePlant="Blushing Bromeliad"
                            pricePlant="$179.00"
                        />
                        <Card
                            imgCard="/img/plant-aluminium.png"
                            imgWidth="250"
                            imgHeight="250"
                            imgAlt="Aluminum Plant"
                            namePlant="Aluminum Plant"
                            pricePlant="$99.00"
                        />
                        <Card
                            imgCard="/img/plant-bird's.png"
                            imgWidth="250"
                            imgHeight="250"
                            imgAlt="Bird's Nest Fern "
                            namePlant="Bird's Nest Fern"
                            pricePlant="$179.00"
                        />
                        <Card
                            imgCard="/img/plant-broadleaf.png"
                            imgWidth="250"
                            imgHeight="250"
                            imgAlt="Broadleaf Lady Palm "
                            namePlant="Broadleaf Lady Palm"
                            pricePlant="$59.00"
                        />
                        <Card
                            imgCard="/img/plant-chinese.png"
                            imgWidth="250"
                            imgHeight="250"
                            imgAlt="Chinese Evergreen "
                            namePlant="Chinese Evergreen"
                            pricePlant="$39.00"
                        />
                    </div>
                    <div className="plant-shopping-right-page">
                        <button className="plant-shopping-right-page-btnGreen">
                            <p>1</p>
                        </button>
                        <button>
                            <p>2</p>
                        </button>
                        <button>
                            <p>3</p>
                        </button>
                        <button>
                            <p>4</p>
                        </button>
                        <button className="plant-shopping-right-page-btnArrow">
                            <img src="/img/arrow_right.svg" alt="arrow"/>
                        </button>
                    </div>
                </div>
            </div>
        </div>

    )
}

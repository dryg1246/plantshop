import React from "react";
import "./PlantShoppingSwitchPage.scss"

export const PlantShoppingSwitchPage = ({firstPage, twicePage, thirdPage, fourthPage, imgArrow}) => {
    return (
        <div className="plant-shopping-right-page">
            <button className="plant-shopping-right-page-btnGreen">
                <p>{firstPage}</p>
            </button>
            <button>
                <p>{twicePage}</p>
            </button>
            <button>
                <p>{thirdPage}</p>
            </button>
            <button>
                <p>{fourthPage}</p>
            </button>
            <button className="plant-shopping-right-page-btnArrow">
                <img src={imgArrow} alt="arrow"/>
            </button>
        </div>
    )
}
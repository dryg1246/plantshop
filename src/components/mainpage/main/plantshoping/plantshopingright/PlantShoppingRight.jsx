import React from 'react'
import "./PlantShoppingRight.scss"
import {Card} from "../card/Card";
import {cardData} from "../../plantshoping/PlantShopping"
import {PlantShoppingCategories} from "./widgets/categories/PlantShoppingCategories";
import {PlantShoppingSwitchPage} from "./widgets/switchpage/PlantShoppingSwitchPage";


export const PlantShoppingImg = ({sortingTextOne, sortingTextTwo, sortingImg}) => {
    return (
        <div className="plant-shopping-right-sorting-img">
            <p>{sortingTextOne}</p>
            <p>{sortingTextTwo}</p>
            <img src={sortingImg} alt=""/>
        </div>
    )
}
export const PlantShoppingRight = ({
                                       navigationTextOne,
                                       navigationTextTwo,
                                       navigationTextThree,
                                       sortingTextOne,
                                       sortingTextTwo,
                                       sortingImg,
                                       firstPage,
                                       twicePage,
                                       thirdPage,
                                       fourthPage,
                                       imgArrow
                                   }) => {

    return (
        <div className="plant-shopping-right">
            <div className="plant-shopping-right-sorting">
                <PlantShoppingCategories
                    navigationTextOne={navigationTextOne}
                    navigationTextTwo={navigationTextTwo}
                    navigationTextThree={navigationTextThree}
                />
                <PlantShoppingImg
                    sortingTextOne={sortingTextOne}
                    sortingTextTwo={sortingTextTwo}
                    sortingImg={sortingImg}
                />
            </div>
            <div className="plant-shopping-right-product">
                {cardData.map((card, index) => (
                    <Card key={index} {...card} />
                ))}
            </div>
            <PlantShoppingSwitchPage
                firstPage={firstPage}
                twicePage={twicePage}
                thirdPage={thirdPage}
                fourthPage={fourthPage}
                imgArrow={imgArrow}
            />
        </div>
    )
}

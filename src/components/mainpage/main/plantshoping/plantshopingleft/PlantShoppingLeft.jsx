import React from 'react'
import "./PlantShoppingLeft.scss"
import {PlantShoppingSorting} from "./widgets/sorting/PlantShopSorting";
import {PlantShoppingSize} from "./widgets/size/PlantShopSize";
import {PlantShopBanner} from "./widgets/banner/PlantShopBanner";
import {PlantShoppingPrice} from "./widgets/price/PlantShopPrice";


export const PlantShoppingLeft = ({
                                      mainTextOne,
                                      mainTextTwo,
                                      subtextOne,
                                      subtextTwo,
                                      subtextThree,
                                      mainTextThree,
                                      mainTextFour,
                                      subtextFour,
                                      imgBanner
                                  }) => {
    return (
        <div className="plant-shopping-left">
            <PlantShoppingSorting
                mainTextOne={mainTextOne}
            />
            <PlantShoppingPrice
                mainTextTwo={mainTextTwo}
                subtextOne={subtextOne}
                subtextTwo={subtextTwo}
            />

            <PlantShoppingSize
                mainTextThree={mainTextThree}
                subtextThree={subtextThree}
            />
            <PlantShopBanner
                mainTextFour={mainTextFour}
                subtextFour={subtextFour}
                imgBanner={imgBanner}
            />
        </div>
    )
}

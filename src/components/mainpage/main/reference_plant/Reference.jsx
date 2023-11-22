import React from 'react'
import "./Reference.scss"
import {ReferenceCard} from "./referencecard/ReferenceCard";

export const Reference = () => {
    return (
        <div className="container">
            <div className="reference">
                <ReferenceCard
                    mainImg="/img/plant-blushing.png"
                    mainText="Summer cactus & succulents"
                    subText="We are an online plant shop offering a wide range of cheap and trendy plants"
                    btnText="Find More"
                />
                <ReferenceCard
                    mainImg="/img/plant-african.png"
                    mainText="Styling Trends & much more"
                    subText="We are an online plant shop offering a wide range of cheap and trendy plants"
                    btnText="Find More"
                />
            </div>
        </div>
    )
}

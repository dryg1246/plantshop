import React from 'react'
import {Header} from "./components/mainpage/header/Header";
import "./App.scss"
import {Banner} from "./components/mainpage/main/banner/banner";
import {PlantShopping} from "./components/mainpage/main/plantshoping/PlantShopping";

export const App = () => {
    return (
        <div>
            <Header />
            <Banner />
            <PlantShopping />
        </div>
    )
}

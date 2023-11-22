import React from 'react'
import {Header} from "./components/mainpage/header/Header";
import "./App.scss"
import {Banner} from "./components/mainpage/main/banner/banner";
import {PlantShopping} from "./components/mainpage/main/plantshoping/PlantShopping";
import {Reference} from "./components/mainpage/main/reference_plant/Reference";
import {Blog} from "./components/mainpage/main/blog/blog";

export const App = () => {
    return (
        <div>
            <Header />
            <Banner />
            <PlantShopping />
            <Reference />
            <Blog />
        </div>
    )
}

import React from 'react'
import {Header} from "./components/mainpage/header/Header";
import "./App.scss"
import {Banner} from "./components/mainpage/main/banner/banner";

export const App = () => {
    return (
        <div>
        <Header />
        <Banner />
        </div>
    )
}

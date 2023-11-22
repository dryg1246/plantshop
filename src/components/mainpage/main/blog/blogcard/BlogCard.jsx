import React from 'react'
import "./BlogCard.scss"

export const BlogCard = ({mainImg, subText1, mainText, subText2, btnText, btnImg, }) => {
    return (
        <div className="blog-card">
            <div className="blog-card-img">
                <img src={mainImg}  width="268" height="195" alt=""/>
            </div>
            <div className="blog-card-text">
                <p className="blog-card-text-subText1">{subText1}</p>
                <h2 className="blog-card-text-mainText">{mainText}</h2>
                <p className="blog-card-text-subText2">{subText2}</p>
                <a href="#" className="blog-card-btn">
                    <p>{btnText}</p>
                    <img src={btnImg} alt=""/>
                </a>
            </div>
        </div>
    )
}

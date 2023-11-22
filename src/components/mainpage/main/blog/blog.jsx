import React from 'react'
import {BlogCard} from "./blogcard/BlogCard";
import "./blog.scss"


export const BlogText = ({mainText , subText}) => {
    return (
        <div className="blog-text">
            <h1>{mainText}</h1>
            <p>{subText}</p>
        </div>
    )
}



export const Blog = () => {
    const BlogCards =  [
        {
            mainImg: "/img/blog-cactus.jpg",
            subText1: 'September 12  I Read in 6 minutes',
            mainText: "Cactus & Succulent \n" + "Care Tips",
            subText2: 'Cacti are succulents are easy care plants for any home or patio.',
            btnImg: "/img/arrow-right-black.svg",
            btnText: 'Read More'
       },
        {
            mainImg: "/img/blog-plant.jpg",
            subText1: 'September 13  I Read in 2 minutes',
            mainText: "Top 10 Succulents for \n" + "Your Home",
            subText2: 'Best in hanging baskets. Prefers medium to high light.',
            btnImg: "/img/arrow-right-black.svg",
            btnText: 'Read More'
        },
        {
            mainImg: "/img/blog-cacti.jpg",
            subText1: 'September 15  I Read in 3 minutes',
            mainText: "Cacti & Succulent \n" +
                "Care Tips",
            subText2: 'Cacti and succulents thrive in containers and because most are.',
            btnImg: "/img/arrow-right-black.svg",
            btnText: 'Read More'
        },
        {
            mainImg: "/img/blog-houseplants.jpg",
            subText1: 'September 15  I Read in 2 minutes',
            mainText: "Best Houseplants \n" +
                "Room by Room",
            subText2: 'The benefits of houseplants are endless. In addition to.',
            btnImg: "/img/arrow-right-black.svg",
            btnText: 'Read More'
        },
    ];

    return (
        <div className="container">
            <div className="blog">
                <BlogText
                    mainText="Our Blog Posts"
                    subText="We are an online plant shop offering a wide range of cheap and trendy plants. "
                />
                <div className="blog-cards">
                    {BlogCards.map((card, index) => (
                        <BlogCard key={index} {...card} />
                    ))}
                </div>
            </div>
        </div>
    )
}

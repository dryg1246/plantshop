import React from 'react'

export const ReferenceCard = ({mainText, subText, btnText, mainImg}) => {
    return (
        <div className="reference-first">
            <div className="reference-first-left">
                <img src={mainImg} width="292"  height="292" alt=""/>
            </div>
            <div className="reference-first-right">
                <h1>{mainText}</h1>
                <p>{subText}</p>
                <button>
                    <p>{btnText}</p>
                    <img src="/img/arrow-right.svg" alt=""/>
                </button>
            </div>
        </div>
    )
}


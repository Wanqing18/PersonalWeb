import React, { useState, useEffect } from 'react';

const BubbleContainer = () => {
    const [screenSize, setScreenSize] = useState(getCurrentDimension());

    function getCurrentDimension() {
        return {
            width: window.innerWidth,
            height: window.innerHeight
        }
    }

    useEffect(() => {
        const updateDimension = () => {
            setScreenSize(getCurrentDimension())
        }
        window.addEventListener('resize', updateDimension);


        return (() => {
            window.removeEventListener('resize', updateDimension);
        })
    }, [screenSize])
    return (
        <div className="bubble_container">
            <div className="bubbles">
                {Bubbles(Math.floor(screenSize.width / 40))}
            </div >
        </div>
    )
}

const Bubbles = (numBubbles) => {
    let listOfBubbleSpans = []
    for (let i = 0; i < numBubbles; i++) {
        listOfBubbleSpans.push(<span style={{ "--animation_duration": getRandomArbitrary(10, 28) }}></span>)
    }
    return listOfBubbleSpans;
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}


export default BubbleContainer
import React from "react";

const BubbleContainer = () => {
    return (
        <div className="bubble_container">
            <div className="bubbles">
                {Bubbles(50)}
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
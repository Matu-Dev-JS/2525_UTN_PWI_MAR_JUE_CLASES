import React from "react";
import "./CardColorPalette.css"; 

function CardColorPalette (props) {
    console.log(props)
    return (
        <article className="card_palette">
            <a href="#" className="card_palette__content">
                <div 
                    className="card_palette__content__color card_palette__content__color1"  
                    style={
                        { backgroundColor: props.colors[0] }
                    }
                >
                    <span className="card_palette__content__color-text">{props.colors[0]}</span>
                </div>
                <div 
                    className="card_palette__content__color card_palette__content__color2"
                    style={
                        { backgroundColor: props.colors[1] }
                    }
                >
                    <span className="card_palette__content__color-text">{props.colors[1]}</span>
                </div>
                <div 
                    className="card_palette__content__color card_palette__content__color3"
                    style={
                        { backgroundColor: props.colors[2] }
                    }
                >
                    <span className="card_palette__content__color-text">{props.colors[2]}</span>
                </div>
                <div 
                    className="card_palette__content__color card_palette__content__color4"
                    style={
                        { backgroundColor: props.colors[3] }
                    }
                >
                    <span className="card_palette__content__color-text">{props.colors[3]}</span>
                </div>
            </a>
            <div className="card_palette__footer">
                <div className="card_palette__likes">
                    <button className="card_palette__likes-button">
                        <span className="card_palette__likes-icon">❤️</span>
                        <span className="card_palette__likes-count">{props.likes}</span>
                    </button>
                </div>
                <div className="card_palette__time">
                    <p>{props.time}</p>
                </div>
            </div>
        </article>
    )
}

export default CardColorPalette;
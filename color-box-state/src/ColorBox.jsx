import { useState } from 'react'
import "./ColorBox.css"

function randomElement(arr) {
    const idx = Math.floor(Math.random() * arr.length);
    const randomColor = arr[idx];
    return randomColor
}

function ColorBox({colors}) {
    const [color, setColor] = useState(randomElement(colors))
    const colorChange = () => {
        setColor(randomElement(colors));
    }
    return (
    <div className="ColorBox" onClick={colorChange} style={{backgroundColor: color}}>

    </div>
    )
}

export default ColorBox;
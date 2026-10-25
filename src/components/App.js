
import React, { useState } from "react";
import "./App.css";

function App() {
    const [isVisible, setIsVisible] = useState(false);

    const handleClick = () => {
        setIsVisible(true);
    };

    return (
        <div id="main">
            <p
                id="para"
                className={isVisible ? "show" : "hide"}
            >
                Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy
            </p>

            <button id="click" onClick={handleClick}>
                Click
            </button>
        </div>
    );
}

export default App;

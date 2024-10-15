import React, { useState } from 'react';

export default function UpperCase(props) {
    const [text, setText] = useState(""); // State to hold text input

    // Handlers for various button functions
    const handleChange = (event) => {
        setText(event.target.value);
    };

    const handleUppercase = () => {
        setText(text.toUpperCase());
        props.showAlert("Text Changed To UpperCase");

    };

    const handleLowercase = () => {
        setText(text.toLowerCase());
        props.showAlert("Text Changed To LowerCase");

    };

    const handleSentencecase = () => {
        setText(text.charAt(0).toUpperCase() + text.slice(1).toLowerCase());
        props.showAlert("Text Changed To SentenceCase");

    };

    const handleTitlecase = () => {
        setText(text.split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
            .join(' ')
        );
        props.showAlert("Text Changed To TitleCase");

    };

    const handleCopy = () => {
        navigator.clipboard.writeText(text)
            .then(() => {
                alert("Text copied to clipboard!");
            })
            .catch((err) => {
                console.error("Failed to copy text: ", err);
            });

    };

    const handleSpaces = () => {
        setText(text.replace(/\s+/g, " ").trim());
        props.showAlert("Extra spaces removed");
    };

    const wordscount = text.trim().split(/\s+/).filter(word => word !== "").length;

    return (
        <div className="flex-box">
            <div className="upper-case">
                <div className="heading-area">
                    <h1>{props.heading}</h1>
                </div>

                <textarea 
                    value={text}
                    onChange={handleChange}
                    rows="10" 
                    cols="100" 
                    placeholder='Enter text'
                    className='textarea' 
                />

                <div className="btn-div">
                    <button type='submit' onClick={handleUppercase}>
                        <div className="button-wrapper">
                            <span className="button_top">Convert to UpperCase</span>
                        </div>
                    </button>    

                    <button type='submit' onClick={handleLowercase}>
                        <div className="button-wrapper">
                            <span className="button_top">Convert to LowerCase</span>
                        </div>
                    </button>  

                    <button type='submit' onClick={handleTitlecase}>
                        <div className="button-wrapper">
                            <span className="button_top">Convert to TitleCase</span>
                        </div>
                    </button>  

                    <button type='submit' onClick={handleSentencecase}>
                        <div className="button-wrapper">
                            <span className="button_top">Convert to SentenceCase</span>
                        </div>
                    </button>  

                    <button type='submit' onClick={handleCopy}>
                        <div className="button-wrapper">
                            <span className="button_top">Copy Text</span>
                        </div>
                    </button> 

                    <button type='submit' onClick={handleSpaces}>
                        <div className="button-wrapper">
                            <span className="button_top">Remove ExtraSpaces</span>
                        </div>
                    </button>  
                </div>  
            </div>

            <hr />

            <div className='calculate-char'>
                <h2>No. of Characters and Words</h2>
                <p>{text.length} Characters and {wordscount} Words</p>

                <h3>Amount of time it will take to read</h3>
                <p>{(wordscount / 238).toFixed(2)} Minutes</p>      

                <h3>Your Text Summary</h3>
                <p className='textarea' style={{ height: "100px" }}>{text}</p>
            </div>
        </div>
    );
}

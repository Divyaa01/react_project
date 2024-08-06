import React, {useState} from 'react';

export default function Text(props){

   

        const handleUClick = () =>{
           // setText(text.toUpperCase())
          // console.log("on click buttn");
           let newText = text.toUpperCase();
           setText(newText);
        }

        const handleLClick = () =>{
            let newText = text.toLocaleLowerCase();
            setText(newText);
        }

        const handleOnChange = (event) =>{
           // console.log("on change");
            setText(event.target.value);
        }

        const handleReset = (event) =>{
            let newText = '';
             setText(newText);
         }

         const handleSpeech = (event) => {
            let msg = new SpeechSynthesisUtterance(text);
            window.speechSynthesis.speak(msg);
            const toogle = document.getElementById('toggle')
            if (toogle.textContent == "Speak") {
                toogle.innerHTML = "Stop"
            }
            else {
                toogle.innerHTML = "Speak"
                if (toogle.innerHTML = "Speak"){
                    window.speechSynthesis.cancel()
                }
            }
        }

        const[text, setText] = useState('');

    return (
        <>
        <div>
            <h2>{props.heading}</h2>
            <div className ="mb-3">
                <textarea className="form-control" id="myBox" value={text} onChange= {handleOnChange} rows="8"></textarea>
            </div>

            <button className="btn btn-primary  " onClick = {handleUClick}>
            Convert to Uppercase
            </button>

            <button className="btn btn-primary mx-2" onClick = {handleLClick}>
            Convert to Lowercase
            </button>

            <button className="btn btn-danger mx-2" onClick = {handleReset}>
            Reset
            </button>

            <div>
            <button type="submit" onClick={handleSpeech} className="btn btn-success mx-2 my-2" id="toggle">Speak</button>
            </div>

        </div>

        <div className="container my-5">
            <h4>Total words:</h4>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{text.split(" ").length *0.008} reading minutes</p>
        </div>



        </>



    );
}

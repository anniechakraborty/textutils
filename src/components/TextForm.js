import React, {useState} from 'react'

export default function TextForm(props) {
  const [text, setText] = useState("");
  const convertToUpperCase = () =>{
    let newText = text.toUpperCase();
    setText(newText);
  }
  const convertToLowerCase = () =>{
    let newText = text.toLowerCase();
    setText(newText);
  }
  const toggleCase = () =>{
    let newText = '';
    for (let index = 0; index < text.length; index++) {
      let element = text[index].charCodeAt(0);
      // console.log(element);
      if(element >= 65 && element <= 90) {
        element += 32
      }
      else if (element >= 97 && element <= 122) {
        element -= 32
      }
      newText += String.fromCharCode(element);
    }
    // console.log(newText);
    setText(newText);
  }
  /**
   * if input is : hey girl you are great! let's get coffee sometime. i am hungry.       what is wrong?
   * ouput is : Hey girl you are great! Let's get coffee sometime. I am hungry. What is wrong?
   */
  const convertToSentenceCase = () => {
    let trimmedText = text.trim();
    trimmedText = trimmedText[0].toUpperCase() + trimmedText.substring(1).toLowerCase(); // capitalised first letter
    for (let i = 0; i < trimmedText.length; i++) {
      let element = trimmedText[i].charCodeAt(0);
      if(element === 33 || element === 63 || element === 46){
        // 33 is !
        // 46 is .
        // 63 is ?
        // split text into two parts, trim the second part and capitalise it's first letter
        let first_part = trimmedText.substring(0, i+1);
        let second_part = trimmedText.substring(i+2);
        second_part = second_part.trim();
        if(second_part !== ''){
          second_part = ' ' + second_part[0].toUpperCase() + second_part.substring(1).toLowerCase();
        }
        trimmedText = first_part + second_part;
      }
    }
    setText(trimmedText);
  }

  const copyText = () => {
    var textBoxValue = document.getElementById("text");
    console.log("Text box value : ", textBoxValue);
    textBoxValue.select();
    navigator.clipboard.writeText(textBoxValue.value);
  }

  const clearText = () => {
    setText('');
  }

  const onChangeClick = (event) => {
    // console.log("event : ", event);
    setText(event.target.value);
  }
  return (
    <>
      <div className='container'>
        <h1 className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>{props.heading}</h1>
        <div className="mb-3">
          <textarea id="text" className='form-control' value={text} onChange={onChangeClick} cols="25" rows="8" style={{
            backgroundColor : props.mode === 'light' ? 'white' : '#333',
            color : props.mode === 'light' ? '#333' : 'white'
          }}></textarea>
        </div>
        <div className="functionalities">
          <div className="text-functionalities">
            <button className='btn btn-primary' onClick={convertToUpperCase}>Upper Case</button>
            <button className='btn btn-primary mx-2' onClick={convertToLowerCase}>Lower Case</button>
            <button className='btn btn-primary' onClick={toggleCase}>Toggle Case</button>
            <button className='btn btn-primary mx-2' onClick={convertToSentenceCase}>Sentence Case</button>
          </div>
          <div className="system-functionalities">
            <button className='btn btn-success mx-2' onClick={copyText}>Copy to Clipboard</button>
            <button className='btn btn-danger' onClick={clearText}>Clear Text</button>
          </div>
        </div>
      </div>
      <div className='container my-2'>
        {/* <h2>Text Summary</h2> */}
        <h4 className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>Text Preview</h4>
        <p className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>{text === '' ? 'Enter your text to preview it here...' : text}</p>
        <h4 className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>Text Analysis</h4>
        <ul className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>
          <li>{text === "" ? 0 : text.split(' ').length} words and {text.length} characters</li>
          <li>{text === "" ? 0 : text.split(' ').length * 0.008} minutes to read</li>
        </ul>
      </div>
    </>
  )
}

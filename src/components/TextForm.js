import React, {useState} from 'react'

export default function TextForm(props) {
  const [text, setText] = useState("");
  const convertToUpperCase = () =>{
    let newText = text.toUpperCase();
    setText(newText);
  }
  const convertToLowerCase = () =>{
    let newText = text.toUpperCase();
    setText(newText);
  }
  const onChangeClick = (event) => {
    console.log("event : ", event);
    setText(event.target.value);
  }
  return (
    <>
      <div className='container'>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea id="text" className='form-control' value={text} onChange={onChangeClick} cols="25" rows="8"></textarea>
        </div>
        <button className='btn btn-primary' onClick={convertToUpperCase}>Convert to Upper Case</button>
        <button className='btn btn-primary mx-2' onClick={convertToLowerCase}>Convert to Lower Case</button>
      </div>
      <div className='container my-2'>
        {/* <h2>Text Summary</h2> */}
        <h4>Text Preview</h4>
        <p>{text}</p>
        <h4>Text Analysis</h4>
        <ul>
          <li>{text == "" ? 0 : text.split(' ').length} words and {text.length} characters</li>
          <li>{text == "" ? 0 : text.split(' ').length * 0.008} minutes to read</li>
        </ul>
      </div>
    </>
  )
}

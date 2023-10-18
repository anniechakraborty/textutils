import React, {useState} from 'react'

export default function TextForm(props) {
  const [text, setText] = useState("Enter text here...");
  const convertToUpperCase = () =>{
    let newText = text.toUpperCase();
    setText(newText);
  }
  const onChangeClick = (event) => {
    console.log("event : ", event);
    setText(event.target.value);
  }
  return (
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea id="text" className='form-control' value={text} onChange={onChangeClick} cols="30" rows="10"></textarea>
      </div>
      <button className='btn btn-primary' onClick={convertToUpperCase}>Convert to Upper Case</button>
    </div>
  )
}

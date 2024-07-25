import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';

export default function Textb(props) {
  const [text, setText] = useState("");

  const handleUp = () => {
    setText(text.toUpperCase());
  }
  const handleLow = () => {
    setText(text.toLowerCase());
  }
  const handleCL = () => {
    setText("");
  }
  const handleOnChange = (event) => {
    setText(event.target.value);
  }

  return (
    <>
      <div className='container my-2'>
        <h2 >Enter your text here.</h2>
        {/* <textarea  className={`form-control ${props.mod==='dark' ? 'light' : 'dark'}-blue`} name="mybox" onChange={handleOnChange} placeholder='paste your text here' value={text} rows={10} /><br /> */}
        <textarea  id="textbox1" className={`form-control ${props.mod}-blue-text-area`} name="mybox" onChange={handleOnChange} placeholder='paste your text here' value={text} rows={10} /><br />
        <Button  className={`mx-2 ${props.mod}-blue`} htmlFor="textbox1" onClick={handleUp} >Convert to Uppercase</Button>
        <Button  className={`mx-2 ${props.mod}-blue`}  htmlFor="textbox1" onClick={handleLow} >Convert to Lowercase</Button>
        <Button  className={`mx-2 ${props.mod}-blue`} htmlFor="textbox1" onClick={handleCL} >Clear text</Button>
      </div>
      <div className='container my-3'>
        <h2>Text Summary</h2>
        <p>{text.split(" ").length} words and {text.length} Characters</p>
        <p>It will take {0.0032 * text.split(" ").length} minutes to read this text.</p>
        <div>
        <h2>Preview your text</h2>
        <p>{text}</p>
      </div>
      </div>
      
    </>
  )
}
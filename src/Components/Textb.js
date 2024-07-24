import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';

export default function Textb() {
  const [text, setText] = useState("");
  const [myStyle, setMyStyle] = useState({
    color: 'gray',
    backgroundColor: 'Black',
    btnName: 'Light mode'
  })
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

  const toggleTheme = () => {
    if (myStyle.color === 'black') {
      setMyStyle({
        color: 'gray',
        backgroundColor: 'black',
        btnName: 'Light mode'
      })
    }
    else {
      setMyStyle({
        color: 'black',
        backgroundColor: 'grey',
        btnName: 'Dark mode'
      })
    }
  }
  return (
    <>
      <div style={myStyle} className='container my-2'>
        <h2 style={myStyle} >Enter your text here.</h2>
        <textarea  style={myStyle} className="form-control" name="mybox" onChange={handleOnChange} placeholder='paste your text here' value={text} rows={10} /><br />
        <Button  style={myStyle} htmlFor="textbox1" onClick={handleUp} >Convert to Uppercase</Button>
        <Button  style={myStyle} className='mx-2' htmlFor="textbox1" onClick={handleLow} >Convert to Lowercase</Button>
        <Button  style={myStyle} className='mx-2' htmlFor="textbox1" onClick={handleCL} >Clear text</Button>
        <Button  style={myStyle} className='mx-2' onClick={toggleTheme}>{myStyle.btnName}</Button>
      </div>
      <div  style={myStyle} className='container my-3'>
        <h2 style={myStyle} >Text Summary</h2>
        <p style={myStyle} >{text.split(" ").length} words and {text.length} Characters</p>
        <p style={myStyle} >It will take {0.0032 * text.split(" ").length} minutes to read this text.</p>
      </div>
    </>
  )
}
import React from 'react'
import Button from 'react-bootstrap/Button';
export default function Textb() {
  return (
    <div className='container'>
        <label htmlFor="textbox1">Enter text here.</label> 
        <textarea type="text" id="textbox1" name="textbox1" cols={90} rows={10}/>
        <br /><Button variant="info">edit</Button>
    </div>
  )
}

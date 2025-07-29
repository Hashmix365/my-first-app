import React , {useState} from 'react'

export default function TextForm(props) {
   const upclick=()=>{
    let newtext = text.toUpperCase(); 
    setText(newtext);
   }
   const lowclick=()=>{
    let newtext = text.toLowerCase(); 
    setText(newtext);
   }
  
   const onchange = (event)=>{
    setText(event.target.value);
   }
  const [text,setText] = useState('Set Text Here'); 
  return (
    <div>
     <h1>{props.heading}</h1>
    <div className="my-3 mb-3">
        <textarea value={text}  onChange={onchange} className="form-control" id="mybox" rows="9"></textarea>
    </div>
    <button onClick={upclick} className="btn btn-primary">Convert to Uppercase</button>
    <button onClick={lowclick} className="ms-2 btn btn-primary">Convert to Lowercase</button>
    <div className=" my-3 container">
        <h4>Number of characters :</h4>
        <h5>{text.length}</h5>
        <h4>Number of words :</h4>
        <h5>{text.split(" ").length}</h5>
    </div>
    </div>
  )
}

import React,{useState} from 'react'

export default function TextUtils(props) {
    const handleUpCLick= () =>{
        console.log("Upper case click");
        let n=text.toUpperCase();
        props.showAlert("Convert to upper case!" , "success");
        setText(n);
    }
    const handleLowCLick= () =>{
        //console.log("Upper case click");
        let n=text.toLowerCase();
        setText(n);
        props.showAlert("Convert to lower case!" , "success");
    }
    const handleClearCLick= () =>{
        //console.log("Upper case click");
        let n='';
        setText(n);
    }
    const handleCopy= () =>{
        //console.log("Upper case click");
        var t=document.getElementById("myBox");
        t.select();
        t.setSelectionRange(0,9999999);
        navigator.clipboard.writeText(t.value);
        props.showAlert("Text Copied" , "success");
        //setText(n);
    }
    const handleOnChange= (event) =>{
        //console.log("on change");
        setText(event.target.value);
        
    }
    const handleRemoveExtraSpaces= (event) =>{
       let newText=text.split(/[ ]+/);
       setText(newText.join(" "));
    }
    //const len=text.split(" ").length;
    const [text, setText] = useState('Enter the Text');
    /*
    text="new text" // wrong way to change the state
    setText("new Text"); //correct way to change the state

    */

  return (
      <>
    <div className="container" style={{color: props.mode === 'dark' ? 'white': 'black'}}>   
        <h1>{props.heading}</h1>
        <div className="my-3" style={{color: props.mode === 'dark' ? 'white': 'black'}}>
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{background: props.mode==='light'? 'white':'grey', color:props.mode==='light'? 'black':'white'}}></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpCLick}> Convert to upper case</button>
        <button className="btn btn-primary mx-3" onClick={handleLowCLick}> Convert to Lower case</button>
        <button className="btn btn-primary mx-3" onClick={handleClearCLick}> Clear Text</button>
        <button className="btn btn-primary mx-3" onClick={handleCopy}> Copy Text</button>
        <button className="btn btn-primary mx-3" onClick={handleRemoveExtraSpaces}>Remove Extra Spaces</button>
        
  </div>
  <div className="container my-2"  style={{color: props.mode === 'dark' ? 'white': 'black'}}>
      <h1> Your text summary </h1>
      <b><p> {text.split(" ").length} words ,{text.length} Characters </p>
      <p> {0.008 *text.split(" ").length} Minutes To Read</p></b>
      <p> Preview</p>
      <p>{text}</p>
  </div>
  </>
  ) 
}

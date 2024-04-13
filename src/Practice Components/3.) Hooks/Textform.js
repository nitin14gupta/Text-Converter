import React, {useState} from 'react'  //rfc

export default function Textform(props) {

    const handleUpClicked = () => {
        console.log("Convert to UpperCase was Clicked " + text);
        let newText = text.toUpperCase();
        setText(newText);
       
    }

    const handleLoClicked = () => {
        console.log("Convert to UpperCase was Clicked " + text);
        let newText = text.toLowerCase();
        setText(newText);
        
    }


    const handleClearClicked = () => {
        let newText = ("");
        setText(newText);
        
    }

    // const handleAlternatingClicked = () => {
    //     let newText = text.split();
    //     setText(newText);
    // }

    const OnChanger = (event) => {
        console.log("On Change was Fired");
        setText(event.target.value);
    }
    const [text, setText] = useState("");
  return (
<>
 <div className="container">
   <div className="mb-3">
          <h1>{props.Heading}</h1>
          <textarea className="form-control" value={text} id="text" onChange={OnChanger} rows="10"></textarea>
    </div>

    <div className="btn_button">
              <button onClick={handleUpClicked} className="btn btn-primary mx-1 my-1">Convert to UpperCase</button>
              <button onClick={handleLoClicked} className="btn btn-primary mx-1 my-1">Convert to LowerCase</button>
              <button onClick={handleClearClicked} className="btn btn-primary mx-1 my-1">Clear the Text</button>
              {/* <button onClick={handleAlternatingClicked}>AlTeRnAtInG cAsE</button> */}



    </div>   

    <div>
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length - 1} words and {text.length} characters</p>
        <p> Number of Sentences :  {text.split(".").length - 1}</p>
        <h2>Preview</h2>
        <p>{text.length>0 ? (text) : ('write in the above box to preview in it here')}</p>
    </div>
    </div>
          </>  //this is JSX fragment

  )
}

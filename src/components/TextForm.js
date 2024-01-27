import React, { useState } from "react";

export default function TextForm(props) {


  const handleUpClick = () => {
    console.log("Upper case was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Coverted to Upper Case","success");
  };


  const handleLoClick = () => {
    console.log("Upper case was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Coverted to Lower Case","success");
  };


  const handleClear = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared","success");
  };


  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text Copied","success");
  };



  const handleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value);
  };

  
  const [text, setText] = useState("");

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert TO Upercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>
          Convert TO Lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>
          Copy Text{" "}
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClear}>
          Clear
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h2>Your Text Summary</h2>
        <p>
          {" "}
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something in the text box above to preview it here  "}
        </p>
      </div>
    </>
  );
}

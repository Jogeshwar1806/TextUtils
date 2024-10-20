import React from "react";
import { useState } from "react";

export default function TextForm({ darkStyle, showAlert, buttonStyle }) {
  let [text, SetText] = useState("Hii There!!");
  let onChangeHandler = (event) => {
    SetText(event.target.value);
  };
  let upperCaseHandler = () => {
    let newText = text.toUpperCase();
    console.log(newText);
    SetText(newText);
    showAlert("The Case is set to uppercase", "success");
  };
  let lowerCaseHandler = () => {
    let newText = text.toLowerCase();
    console.log(newText);
    SetText(newText);
    showAlert("The Case is set to lowercase", "success");
  };
  let clearText = () => {
    SetText("");
    showAlert("The textfield is empty!!", "warning");
  };
  let handleCopy = () => {
    let text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
    showAlert("The Text is copy to clipboard", "success");
  };
  return (
    <>
      <div className="container" style={darkStyle}>
        <div className="mb-3" style={darkStyle}>
          <label htmlFor="mybox" className="form-label" style={darkStyle}>
            Enter your text below
          </label>
          <textarea
            className="form-control"
            id="mybox"
            rows="8"
            value={text}
            style={darkStyle}
            onChange={onChangeHandler}
          ></textarea>
        </div>
        <div className="conatiner d-flex justify-content-between">
          <div
            className="container d-flex justify-content-center mb-3"
            style={darkStyle}
          >
            <button
              style={buttonStyle}
              className="btn btn-primary"
              onClick={upperCaseHandler}
              // style={darkStyle}
            >
              Convert to Upper Case
            </button>
          </div>
          <div
            className="container d-flex justify-content-center mb-3"
            style={darkStyle}
          >
            <button
              style={buttonStyle}
              className="btn btn-primary"
              onClick={lowerCaseHandler}
              // style={darkStyle}
            >
              Convert to Lower Case
            </button>
          </div>
          <div
            className="container d-flex justify-content-center mb-3 mt-3"
            style={darkStyle}
          >
            <button
              style={buttonStyle}
              className="btn btn-primary"
              onClick={clearText}
              // style={darkStyle}
            >
              Clear Text
            </button>
          </div>
          <div
            className="container d-flex justify-content-center mb-3 mt-3"
            style={darkStyle}
          >
            <button
              style={buttonStyle}
              className="btn btn-primary"
              onClick={handleCopy}
              // style={darkStyle}
            >
              Copy Text
            </button>
          </div>
        </div>
      </div>
      <div className="container" style={darkStyle}>
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length} words</p>
        <p>{text.length} Characters</p>
        <p>
          You may take {0.008 * text.split(" ").length}min to read the whole
          line.
        </p>
        <div className="container border rounded" style={darkStyle}>
          <h2 style={darkStyle}>Preview</h2>
          <hr />
          <p>{text}</p>
        </div>
      </div>
    </>
  );
}

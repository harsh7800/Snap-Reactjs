import React from "react";
import './BtnComponent.scss'

function BtnComponent(props) {
  return (
    <div className="btn-wrapper">
      {props.status === 0 ? (
        <button
          id="start"
          className="stopwatch-btn stopwatch-btn-gre"
          onClick={props.start}
        >
          Start
        </button>
      ) : (
        ""
      )}

      {props.status === 1 ? (
        <div>
          <button
            id="Stop"
            className="stopwatch-btn stopwatch-btn-red"
            onClick={props.stop}
          >
            Stop
          </button>
          <button
            id="reset"
            className="stopwatch-btn stopwatch-btn-yel"
            onClick={props.reset}
          >
            Reset
          </button>
        </div>
      ) : (
        ""
      )}

      {props.status === 2 ? (
        <div>
          <button
            id="resume"
            className="stopwatch-btn stopwatch-btn-gre"
            onClick={props.resume}
          >
            Resume
          </button>
          <button
            id="reset"
            className="stopwatch-btn stopwatch-btn-yel"
            onClick={props.reset}
          >
            Reset
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default BtnComponent;

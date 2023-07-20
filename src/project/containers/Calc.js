import React, { useRef } from "react";
import { connect } from "react-redux";
import { addInputs, subtractInputs } from "../actions/calcAcions";

const Calc = (props) => {
  const input1 = useRef();
  const input2 = useRef();
  let intA, intB;

  return (
    <div className="bg-warning text-center">
      <h2>Sai's Calculator</h2>
      <div>
        input1
        <input type="text" placeholder="0" ref={input1} />
      </div>
      <div>
        input2
        <input type="text" placeholder="0" ref={input2} />
      </div>
      <div>
        Output
        <input type="text" placeholder="0" readOnly value={props.outputProp} />
      </div>
      <button
        className="btn btn-primary"
        onClick={() => {
          intA = parseInt(input1.current.value);
          intB = parseInt(input2.current.value);
          props.dispatch(addInputs(intA, intB));
        }}
      >
        ADD
      </button>{" "}
      <button
        className="btn btn-danger"
        onClick={() => {
          intA = parseInt(input1.current.value);
          intB = parseInt(input2.current.value);
          props.dispatch(subtractInputs(intA, intB));
        }}
      >
        SUBTRACT
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  outputProp: state.output,
});

export default connect(mapStateToProps)(Calc);

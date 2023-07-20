import calcReducer from "../reducers/calcReducer";
import { ADD, SUBTRACT } from "../actions/types";

describe("Test Calc Reducer", () => {
  it("Reducer for ADD", () => {
    let state = { output: 0 }; // store
    state = calcReducer(0, { type: ADD, payload: 50 });
    expect(state).toEqual({ output: 50 });
  });

  it("Reducer for SUBTRACT", () => {
    let state = { output: 0 }; // store
    state = calcReducer(0, { type: SUBTRACT, payload: 30 });
    expect(state).toEqual({ output: 30 });
  });
});

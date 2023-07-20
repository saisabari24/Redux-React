import { addInputs, subtractInputs } from "../actions/calcAcions";
import { ADD, SUBTRACT } from "../actions/types";

describe("Test actions", () => {
  it("test addInputs", () => {
    const add = addInputs(10, 5);
    expect(add).toEqual({ type: ADD, payload: 15 });
  });
  it("test subtractInputs", () => {
    const subtract = subtractInputs(10, 5);
    expect(subtract).toEqual({ type: SUBTRACT, payload: 5 });
  });
});

//component=dispatch({type:ADD,payload:{input1,inpu2}}) => action library->reducer->store

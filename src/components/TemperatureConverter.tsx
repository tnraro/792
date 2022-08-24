import { Dispatch, Reducer, useReducer } from "react";

type State = {
  celsius?: string;
  fahrenheit?: string;
  invalidInput: number;
};
interface Action {
  type: "celsius" | "fahrenheit";
  value: string;
}
const reducer: Reducer<State, Action> = (state, action) => {
  const v = Number(action.value);
  const isNaN = Number.isNaN(v);
  switch (action.type) {
    case "celsius":
      if (isNaN) {
        return {
          ...state,
          celsius: action.value,
          invalidInput: state.invalidInput | 0b1,
        }
      }
      return {
        celsius: action.value,
        fahrenheit: (v * (9 / 5) + 32).toFixed(),
        invalidInput: 0,
      };
    case "fahrenheit":
      if (isNaN) {
        return {
          ...state,
          fahrenheit: action.value,
          invalidInput: state.invalidInput | 0b10,
        }
      }
      return {
        celsius: ((v - 32) * (5 / 9)).toFixed(),
        fahrenheit: action.value,
        invalidInput: 0,
      };
  }
}

interface TemperatureUnitInputProps {
  unit: "celsius" | "fahrenheit";
  value: string | undefined;
  dispatch: Dispatch<Action>;
  isInvalid: boolean;
}
function TemperatureUnitInput(props: TemperatureUnitInputProps) {
  return (
    <input
      value={props.value ?? ""}
      onChange={(event) => {
        props.dispatch({
          type: props.unit,
          value: event.target.value,
        });
      }}
      aria-invalid={props.isInvalid}
    />
  );
}

export function TemperatureConverter() {
  const [state, dispatch] = useReducer(
    reducer,
    { invalidInput: 0 },
  );
  return (
    <div style={{ alignItems: "center" }}>
      <TemperatureUnitInput
        unit="celsius"
        dispatch={dispatch}
        value={state.celsius}
        isInvalid={(state.invalidInput & 0b1) === 0b1}
      />
      <span>Celsius</span>
      <span>=</span>
      <TemperatureUnitInput
        unit="fahrenheit"
        dispatch={dispatch}
        value={state.fahrenheit}
        isInvalid={(state.invalidInput & 0b10) === 0b10}
        />
        <span>Fahrenheit</span>
    </div>
  );
}
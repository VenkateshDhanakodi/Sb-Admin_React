import Button from 'react-bootstrap/Button';
import React, { useReducer } from 'react'

const initialValue = { count: "0", name: "Venkat" }
function UseReducer() {
    function reducer(state, action) {
        switch (action.type) {
            case "decrement": return { ...state, count: state.count - 1 }
            case "increment": return { ...state, count: state.count + 1 }
            case "reset": return { ...state, count: 0, name: "" }
            case "namechange": return { ...state, name: action.value }
            default : return "no-action";
        }
    }

    const [state, dispatch] = useReducer(reducer, initialValue);
    return <div className="container-fluid">
        <h2>UseReducer</h2><br />
        <Button variant="warning" onClick={() => { dispatch({ type: 'decrement' }) }}> - </Button>
        <br />
        <br />
        <div>&nbsp;&nbsp;&nbsp;{state.count}</div>
        <br />
        <Button variant="warning" onClick={() => { dispatch({ type: 'increment' }) }}> + </Button>
        <br /><br />
        <input type='text' value={state.name} onChange={(e) => { dispatch({ type: 'namechange', value: e.target.value }) }}></input>
        <div>{state.name}</div>
        <br />
        <Button variant="danger" onClick={() => { dispatch({ type: 'reset' }) }}> Reset </Button>
    </div>
}

export default UseReducer;
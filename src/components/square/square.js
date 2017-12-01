import React from 'react';

// https://reactjs.org/tutorial/tutorial.html#functional-components
function Square(props) {
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    );
}

export default Square;
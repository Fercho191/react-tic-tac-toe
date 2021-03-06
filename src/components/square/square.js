import React from 'react';
import classNames from 'classnames';

// // https://reactjs.org/tutorial/tutorial.html#functional-components
// function Square(props) {
//     let btnClass = classNames({
//         square: true,
//         'winner': props.winner
//     });
//     return (
//         <button className={btnClass} onClick={props.onClick}>
//             {props.value}
//         </button>
//     );
// }
//

class Square extends React.Component {
    render() {
        let SquareClass = classNames('btn', {
            square: true,
            winner: this.props.winner
        });
        return (
            <button className={SquareClass} onClick={this.props.onClick}>
                {this.props.value}
            </button>
        );
    }
}

export default Square;
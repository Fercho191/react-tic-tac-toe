import React from 'react';
import calculateWinner from "../../shared/utils";

class GameInfo extends React.Component {
    render() {
        const history = this.props.history;
        const current = history[this.props.stepNumber];
        const winner = calculateWinner(current.squares, this.props.lines);
        const moves = history.map((step, move) => {
            const desc = move ?
                'Go to move #' + move :
                'Go to game start';
            return (
                // https://reactjs.org/tutorial/tutorial.html#keys
                <li key={move}>
                    <button onClick={() => this.props.jumpTo(move)}>{desc}</button>
                </li>
            );
        });

        let status;
        if (winner) {
            status = 'Winner: ' + winner.squares;
            this.props.newWinner(winner.line)
        } else {
            status = 'Next player: ' + (this.props.xIsNext ? 'X' : 'O');
        }
        return (
            <div className="game-info">
                <div>{status}</div>
                <ol>{moves}</ol>
            </div>
        );
    }
}

export default GameInfo;
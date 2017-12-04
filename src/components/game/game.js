import React from 'react';
import BoardContainer from '../board/container';
import GameInfoContainer from '../gameInfo/container';
import calculateWinner from "../../shared/utils";

class Game extends React.Component {
    handleClick(i) {
        const history = this.props.history.slice(0, this.props.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        if (calculateWinner(squares, this.props.lines) || squares[i]) {
            return;
        }
        squares[i] = this.props.xIsNext ? 'X': 'O';
        this.props.newStep(squares, history);
    }

    render() {
        const current = this.props.history[this.props.stepNumber];
        return (
            <div className="game row">
                <div className="col-md-6 game-board">
                    <BoardContainer
                        squares={current.squares}
                        onClick={i => this.handleClick(i)}
                    />
                </div>
                <div className="col-md-6">
                    <GameInfoContainer/>
                </div>
            </div>
        );
    }
}

export default Game;
import React from 'react';
import Square from '../square/square';

class Board extends React.Component {
    renderSquare(i) {
        let winner = false;
        if (this.props.winnerLine !== -1){
            let index = this.props.lines[this.props.winnerLine].find((element => element === i));
            if (typeof index !== 'undefined') winner = true;
        }

        return <Square
            value={this.props.squares[i]}
            winner={winner}
            onClick={() => this.props.onClick(i)}
        />;
    }

    render() {
        return (
            <div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

export default Board;
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

    renderRow(i) {
        let row = [];
        let last_row_index = (i+1)*3;
        for (let j = last_row_index - 3; j < last_row_index; j++){
            row.push(this.renderSquare(j))
        }
        return row
    }

    render() {
        return (
            <div className="board">
                {
                    [0,1,2].map( i => {
                        return <div className="board-row">
                            {this.renderRow(i)}
                        </div>;
                    })
                }
            </div>
        );
    }
}

export default Board;
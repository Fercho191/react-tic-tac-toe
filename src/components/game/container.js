import { connect } from 'react-redux';
import Game from "./game";
import {newStep, jumpTo, newWinner} from '../../actions/index';


const mapStateToProps = (state) => {
    return {
        history: state.history,
        xIsNext: state.xIsNext,
        stepNumber: state.stepNumber,
        lines: state.lines
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        newStep: (squares,history) => dispatch(newStep(squares, history)),
        jumpTo: move => dispatch(jumpTo(move)),
        newWinner: line => dispatch(newWinner(line))
    };
};

const GameContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Game);

export default GameContainer;
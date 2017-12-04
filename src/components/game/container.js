import { connect } from 'react-redux';
import Game from "./game";
import {newStep, jumpTo} from '../../actions';


const mapStateToProps = (state) => {
    return {
        history: state.history,
        xIsNext: state.xIsNext,
        stepNumber: state.stepNumber
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        newStep: (squares,history) => dispatch(newStep(squares, history)),
        jumpTo: move => dispatch(jumpTo(move))
    };
};

const GameContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Game);

export default GameContainer;
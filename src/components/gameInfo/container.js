import { connect } from 'react-redux';
import GameInfo from "./gameInfo";
import {jumpTo, newWinner} from '../../actions/index';


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
        jumpTo: move => dispatch(jumpTo(move)),
        newWinner: line => dispatch(newWinner(line))
    };
};

const GameInfoContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(GameInfo);

export default GameInfoContainer;
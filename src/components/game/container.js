import { connect } from 'react-redux';
import Game from "./game";
import {newStep} from '../../actions';


const mapStateToProps = (state) => {
    return {
        history: state.history,
        xIsNext: state.xIsNext,
        stepNumber: state.stepNumber
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        newStep: squares => dispatch(newStep(squares))
    };
};

const GameContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Game);

export default GameContainer;
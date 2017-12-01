import { connect } from 'react-redux';
import Game from "./game";
import {bindActionCreators} from "redux";
import * as types from '../../actions/types';


const mapStateToProps = (state) => {
    return {
        current: state.current
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(types, dispatch)
    };
};

const GameContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Game);

export default GameContainer;
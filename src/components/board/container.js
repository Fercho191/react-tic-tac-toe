import { connect } from 'react-redux';
import Board from "../board/board";


const mapStateToProps = (state) => {
    return {
        lines: state.lines,
        winnerLine: state.winnerLine
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

const BoardContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Board);

export default BoardContainer;
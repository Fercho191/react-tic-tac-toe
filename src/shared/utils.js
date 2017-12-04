function calculateWinner(squares, lines) {
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return {
                squares: squares[a],
                line: i
            };
        }
    }
    return null;
}

export default calculateWinner;
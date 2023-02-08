import React from "react";
import ReactDOM from "react-dom/client";
import "../src/App.css";

function Square(props) {
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    );
}

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            xIsNext: true,
        };
    }

    handleClick(i) {
        const squares = [...this.state.squares];
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? "X" : "O";
        this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext,
        });
    }

    renderSquare(i) {
        return (
            <Square
                value={this.state.squares[i]}
                onClick={() => this.handleClick(i)}
            />
        );
    }

    renderRow(i1, i2, i3) {
        return (
            <div className="board-row">
                {this.renderSquare(i1)}
                {this.renderSquare(i2)}
                {this.renderSquare(i3)}
            </div>
        );
    }

    render() {
        const winner = calculateWinner(this.state.squares);
        console.log("Winner: ", winner);
        let status;
        if (winner) {
            status = "Winner: " + winner;
        } else {
            status = "Next Player: " + (this.state.xIsNext ? "X" : "O");
        }
        return (
            <div>
                <div className="status">{status}</div>
                {this.renderRow(0, 1, 2)}
                {this.renderRow(3, 4, 5)}
                {this.renderRow(6, 7, 8)}
            </div>
        );
    }
}

class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div></div>
                    <ol></ol>
                </div>
            </div>
        );
    }
}

function calculateWinner(squares) {
    let winPositions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (let i = 0; i < winPositions.length; i++) {
        const [a, b, c] = winPositions[i];
        if (
            squares[a] &&
            squares[a] === squares[b] &&
            squares[a] === squares[c]
        ) {
            console.log("a: ", squares[a]);
            console.log("b: ", squares[a] === squares[b]);
            console.log("c: ", squares[a] === squares[c]);
            console.log(squares[a]);
            return squares[a];
        }
    }
    return null;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);

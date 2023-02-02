import React from "react";
import ReactDOM from "react-dom/client";
import "../src/App.css";

class Square extends React.Component {
    render() {
        return <button className="square">{this.props.value}</button>;
    }
}

class Board extends React.Component {
    renderSquare(i) {
        return <Square value={i} />;
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
        const status = "Next Player: X";

        return (
            <div>
                <div className="status">{status}</div>
                {this.renderRow(1, 2, 3)}
                {this.renderRow(4, 5, 6)}
                {this.renderRow(7, 8, 9)}
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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);

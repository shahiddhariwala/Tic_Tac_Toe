import React, { useState } from 'react';
import Board from '../components/Board';
import RefreshIcon from '@material-ui/icons/Refresh';
import { useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";

const styles = {
    width: '200px',
    margin: '20px auto',
    backgroundColor: 'white',
    borderRadius: '100px',
    padding: '1px',

};
const scoreStyles = {
    width: '200px',
    margin: '20px auto',
    backgroundColor: 'white',
    borderRadius: '100px',
    padding: '5px',

};

const Game = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXisNext] = useState(true);
    const winner = calculateWinner(board);
    const location = useLocation();
    const history = useHistory();

    const handleClick = i => {
        const boardCopy = [...board];
        if (winner || boardCopy[i]) {
            return;
        }
        boardCopy[i] = xIsNext ? 'X' : 'O';
        setBoard(boardCopy);
        setXisNext(!xIsNext);
    }
    //Logic for Player 1 as O or X
    useEffect(() => {
        console.log(location.state.detail);
        if(location.state.detail==='1')
        {
            setXisNext(true);
        }
        else
        {
            setXisNext(false);
        }
    }, [location]);

    const resetGame = () =>
    {
        const boardCopy = Array(9).fill(null);
        setBoard(boardCopy);
        history.push('/');
    }
    return (
        <>
            <div style={scoreStyles}>Lets Play Tic Tac Toe</div>
            <Board squares={board} onClick={handleClick} />
            <div style={styles}>
                <p>
                    {winner ? "Winner: " + winner : "Next Player: " + (xIsNext ? "X" : "O")}
                </p>
            </div>
            <RefreshIcon onClick={resetGame}/>
        </>
    )
}
function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

export default Game;


import React from 'react';
import { useState } from 'react';
import Square from "../components/Square";
import Game from "./Game";
import { useHistory } from "react-router-dom";

function PickSide() {
    const [startGame, setStartGame] = useState(false);
    let history = useHistory();

    const imgStyle = {
        height: '100%',
        width: '100%',
        objectFit: 'contain'
    };
    let game = null;
    function onClickHandleX() {
        setStartGame(true);
        history.push(
            {
                pathname: '/game',
                search: '?x=1',
                state: { detail: '1' }
            }
        );
    }
    function onClickHandleO() {
        setStartGame(true);
        history.push(
            {
                pathname: '/game',
                search: '?x=0',
                state: { detail: '0' }
            }
        );
    }
    return (
        <>{!startGame ?
            <div style={{ height: '100px', width: '100px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', marginTop: '50%' }}>
                <h3>Choose side</h3>
                <Square value='X' onClick={onClickHandleX}></Square>
                <Square value='O' onClick={onClickHandleO}></Square>
            </div> : game}
        </>
    );
}

export default PickSide;
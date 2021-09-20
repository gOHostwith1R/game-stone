import React from 'react';
import './startGame.css';
import {Link} from "react-router-dom";

const StartGame = ({createGame, changeNumOfMoves, defaultSetOfMoves, changeSetOfMoves}) => {
    return (
        <div className='start-game'>
            <select className="form-select" onChange={(event) => changeNumOfMoves(event)}>
                <option defaultValue='default' >Specify a set of moves</option>
                <option value="3">Three</option>
                <option value="5">Five</option>
                <option value="7">Seven</option>
            </select>
            <select className="form-select" onChange={(event) => defaultSetOfMoves(event)}>
                <option defaultValue='default'>Standard set of moves</option>
                <option value="rock-paper-scissors">rock-paper-scissors</option>
                <option value="rock-paper-lizard-scissors-spock">rock-paper-lizard-scissors-spock</option>
            </select>
            <input onChange={(event) => changeSetOfMoves(event)} className="form-control" type="text" placeholder="Enter 3, 5 or 7 words without repetitions. Game moves."/>
            <Link to={'/game'} className='btn btn-info' onClick={(event) => createGame(event)}>Create a new game</Link>

        </div>
    );
};

export default StartGame;
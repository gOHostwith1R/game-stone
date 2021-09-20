import React, {useEffect, useState} from 'react';
import './game.css';
import {Link} from "react-router-dom";
import {START_GAME} from "../../utils/consts";

const Game = ({moves}) => {
    const [clickRules, setClickRules] = useState(false)
    const [chooseFirstPlayer, setChooseFirstPlayer] = useState('');
    const [chooseSecondPlayer, setChooseSecondPlayer] = useState('');
    const [result, setResult] = useState('');
    const [modal, setModal] = useState(false)
    const moveFirstPlayer = (move) => {
        setChooseFirstPlayer(move)
    }

    const moveSecondPlayer = (move) => {
        setChooseSecondPlayer(move)
    }

    useEffect(() => {
        if(chooseFirstPlayer === '') {
           return;
        }
        if(chooseSecondPlayer === '') {
            return;
        }

        if(moves.length === 3) {
            if(chooseFirstPlayer === chooseSecondPlayer) {
                    setResult('Draw!!')
                }
           else if(chooseFirstPlayer === moves[0]) {
               if(chooseSecondPlayer !== moves[1]) {
                   setResult('First win!!')
               } else {
                   setResult('second win!!')
               }
           }
            else if(chooseFirstPlayer === moves[1]) {
                if(chooseSecondPlayer !== moves[2]) {
                    setResult('First win!!')
                } else {
                    setResult('Second win!!')
                }
            }
            else if(chooseFirstPlayer === moves[2]) {
                if(chooseSecondPlayer !== moves[0]) {
                    setResult('First win!!')
                } else {
                    setResult('Second win!!')
                }
            }
            setModal(true);
        }
        else if(moves.length === 5) {
            if(chooseFirstPlayer === chooseSecondPlayer) {
                setResult('Draw!!')
            } else if(chooseFirstPlayer === moves[0] ) {
                if(chooseSecondPlayer !== moves[1] && chooseSecondPlayer !== moves[2]) {
                    setResult('first win!!')
                } else {
                    setResult('Second win!!')
                }
            } else if(chooseFirstPlayer === moves[1] ) {
                if(chooseSecondPlayer !== moves[2] && chooseSecondPlayer !== moves[3]) {
                    setResult('First win!!')
                } else {
                    setResult('Second win!!')
                }
            } else if(chooseFirstPlayer === moves[2] ) {
                if(chooseSecondPlayer !== moves[3] && chooseSecondPlayer !== moves[4]) {
                    setResult('first win!!')
                } else {
                    setResult('Second win!!')
                }
            } else if(chooseFirstPlayer === moves[3] ) {
                if(chooseSecondPlayer !== moves[4] && chooseSecondPlayer !== moves[0]) {
                    setResult('First win!!')
                } else {
                    setResult('Second win!!')
                }
            } else if(chooseFirstPlayer === moves[4] ) {
                if(chooseSecondPlayer !== moves[0] && chooseSecondPlayer !== moves[1]) {
                    setResult('First win!!')
                } else {
                    setResult('Second win!!')
                }
            }
            setModal(true);
        }
        else {
            if(chooseFirstPlayer === chooseSecondPlayer) {
                setResult('Draw!!')
            } else if(chooseFirstPlayer === moves[0] ) {
                if(chooseSecondPlayer !== moves[1] && chooseSecondPlayer !== moves[2] && chooseSecondPlayer !== moves[3]) {
                    setResult('First win!!')
                } else {
                    setResult('Second win!!')
                }
            } else if(chooseFirstPlayer === moves[1] ) {
                if(chooseSecondPlayer !== moves[2] && chooseSecondPlayer !== moves[3] && chooseSecondPlayer !== moves[4]) {
                    setResult('First win!!')
                } else {
                   setResult('Second win!!')
                }
            } else if(chooseFirstPlayer === moves[2] ) {
                if(chooseSecondPlayer !== moves[3] && chooseSecondPlayer !== moves[4] && chooseSecondPlayer !== moves[5]) {
                    setResult('First win!!')
                } else {
                    setResult('Second win!!')
                }
            } else if(chooseFirstPlayer === moves[3] ) {
                if(chooseSecondPlayer !== moves[4] && chooseSecondPlayer !== moves[5] && chooseSecondPlayer !== moves[6]) {
                    setResult('First win!!')
                } else {
                    setResult('Second win!!')
                }
            } else if(chooseFirstPlayer === moves[4] ) {
                if(chooseSecondPlayer !== moves[5] && chooseSecondPlayer !== moves[6] && chooseSecondPlayer !== moves[0]) {
                    setResult('First win!!')
                } else {
                    setResult('Second win!!')
                }
            } else if(chooseFirstPlayer === moves[5] ) {
                if(chooseSecondPlayer !== moves[6] && chooseSecondPlayer !== moves[0] && chooseSecondPlayer !== moves[1]) {
                    setResult('First win!!')
                } else {
                    setResult('Second win!!')
                }
            } else if(chooseFirstPlayer === moves[6] ) {
                if(chooseSecondPlayer !== moves[0] && chooseSecondPlayer !== moves[1] && chooseSecondPlayer !== moves[2]) {
                    setResult('First win!!')
                } else {
                    setResult('Second win!!')
                }
            }
            setModal(true)
        }
    },[moves,chooseFirstPlayer, chooseSecondPlayer])

    const closeModal = () => {
        setModal(false);
    }

    return (
        <div className='game'>
            <button className='info-game btn btn-warning' onClick={() => setClickRules(!clickRules)}>
                Rules of the game
            </button>
            <div className={`rules ${clickRules ? '' : 'rules-hidden'}`}>
                rules
            </div>
            <div className='buttons'>
                <div className='moves-button-first'>
                    {moves.map((elem, index) => {
                        return (
                            <button key={index} className='btn btn-warning' onClick={() => moveFirstPlayer(elem)}>
                                {elem}
                            </button>
                        );
                    })}
                </div>
                <div className={`${chooseFirstPlayer ? 'display-move-first' : ''} `}>
                    <p>Choose First Player</p>
                    {chooseFirstPlayer}
                </div>
                <div className={`${result === '' ? '' : 'display-result'}`}>
                    <div className={`${modal ? 'modal-window' : 'hidden'} `}>
                        <Link to={START_GAME} type="button" className="close btn-info"  onClick={() => closeModal()}>
                            <span aria-hidden="true">&times;</span>
                        </Link>
                        Result Game : {result}
                    </div>
                </div>
                <div className={chooseSecondPlayer ? 'display-move-second' : ''}>
                    <p>Choose Second Player</p>
                    {chooseSecondPlayer}
                </div>
                <div className='moves-button-second'>
                    {moves.map((elem, index) => {
                        return (
                            <button key={index} className='btn btn-warning' onClick={() => moveSecondPlayer(elem)}>
                                {elem}
                            </button>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Game;
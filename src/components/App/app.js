import React, {useContext, useState} from 'react';
import {BrowserRouter, Link, Redirect, Route, Switch} from 'react-router-dom'
import './app.css';
import {GameRoutes, StartGameRoutes} from "../../routes/routes";
import {GAME, START_GAME} from "../../utils/consts";
import StartGame from "../Start-Game";
import Game from "../Game";
import {useCollectionData} from "react-firebase-hooks/firestore";
import {Context} from "../../index";
import Tiles from "../Tiles";
import firebase from "firebase/compat";
import Buttons from "../Buttons";




const App = () => {
    const {firestore, auth} = useContext(Context);
    const [authUser, setAuthUser] = useState(false);
    const [moves, setMoves] = useState('');
    const [numOfMoves, setNumOfMoves] = useState(0)
    const [users, setUser] = useState([]);
    const [dataGame, setDataGame] = useCollectionData(
        firestore.collection('data')
    )

    const changeNumOfMoves = (e) => {
        if(e.target.value === "Specify a set of moves") return
        setNumOfMoves(e.target.value)
    }

    const defaultSetOfMoves = (e) => {
       setMoves(e.target.value.split(/[\s,-]+/))
    }

    const changeSetOfMoves = (e) => {
        setMoves(e.target.value.split(/[\s,-]+/));
    }

    const createGame = (e) => {
        if(Number(numOfMoves) !== moves.length) {
            e.preventDefault()
        }
    }

    const login = async (providerStr) => {
        const provider = providerStr === 'git'
            ?
            new firebase.auth.GithubAuthProvider()
            :
            new firebase.auth.GoogleAuthProvider()
        const {user} = await auth.signInWithPopup(provider);
        setUser([...users, user._delegate.displayName]);
        setAuthUser(true);
        firestore.collection('user').add({
           name: user._delegate.displayName,
           authUser: authUser
        });
    }

    return (
       <BrowserRouter>
           <div className='app'>
           <Switch>
               {StartGameRoutes.map(({path}, index) =>
                   <Route path={path} key={index} exact={true} >
                       <div className='tiles-start'>
                           <Tiles />
                           <StartGame createGame={createGame}
                                      changeNumOfMoves={changeNumOfMoves}
                                      defaultSetOfMoves={defaultSetOfMoves}
                                      changeSetOfMoves={changeSetOfMoves}/>
                       </div>
                       {authUser ? '' : <Buttons login={login}/>}
                   </Route>
               )}
               {GameRoutes.map(({path}, index) =>
                   <Route path={path} key={index} exact={true} >
                       <Game moves={moves}/>
                   </Route>
               )}
               <Redirect to={START_GAME} />
           </Switch>
           </div>
       </BrowserRouter>
    );
};

export default App;
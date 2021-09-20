import React from "react";
import './buttons.css'

import {ReactComponent as GitHubIcon} from "../../image/github_icon.svg";
import {ReactComponent as GoogleIcon} from "../../image/google_icon.svg";

const Buttons = ({login}) => {
    return (
        <div className='wrapper-buttons'>
            <div className='group-buttons'>
                <button className='btn btn-primary' onClick={() => login('git')}><GitHubIcon /></button>
                <button className='btn btn-primary' onClick={() => login('google')}><GoogleIcon /></button>
            </div>
        </div>
    )
}

export default Buttons;
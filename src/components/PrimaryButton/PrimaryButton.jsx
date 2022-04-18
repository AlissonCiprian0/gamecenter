import React from 'react';
import "./PrimaryButton.css";

// SVGs
import {ReactComponent as ButtonArrows} from "../../assets/svg/button_arrows.svg";

const PrimaryButton = ({children, classe, clickAction}) => {
    return (
        <button className={`PrimaryButton ${classe}`} onClick={() => clickAction()}>
            <span>{ children }</span>
            <ButtonArrows />
        </button>
    );
}
 
export default PrimaryButton;
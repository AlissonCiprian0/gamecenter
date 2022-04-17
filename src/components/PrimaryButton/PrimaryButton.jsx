import React from 'react';
import "./PrimaryButton.css";

// SVGs
import {ReactComponent as ButtonArrows} from "../../assets/svg/button_arrows.svg";

const PrimaryButton = ({children, classe}) => {
    return (
        <button className={`PrimaryButton ${classe}`}>
            <span>{ children }</span>
            <ButtonArrows />
        </button>
    );
}
 
export default PrimaryButton;
import React from 'react';
import style from './loadingIcon.module.css';

function LoadingIcon() {
    return (
        <div className={style.loadingSpinnerContainer}>
            <div className={`${style.loadingSpinner} ${style.loadingSpinnerGreen}`}></div>
            <div className={`${style.loadingSpinner} ${style.loadingSpinnerRed}`}></div>
            <div className={`${style.loadingSpinner} ${style.loadingSpinnerBlue}`}></div>
            <div className={style.spinnerText}>Loading</div>
        </div>
    )
}

export default LoadingIcon;

import { render } from '@testing-library/react';
import React from 'react';
import './error.scss';


export default function errorComponent(props) {

    let display = props.errorText ? '' : 'none';
    let style = {
        display: display
    };

    return (
        <div id='errorBanner' style={style}>
            <p>
                {props.errorText}
            </p>
        </div>
    );

};

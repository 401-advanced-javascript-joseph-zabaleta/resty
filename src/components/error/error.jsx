import React from 'react';
import './error.scss';


export default function errorComponent(props) {

    if (!props.errorText) return (<></>);

    return (
        <div id='errorBanner'>
            <p>
                {props.errorText}
            </p>
        </div>
    );


};

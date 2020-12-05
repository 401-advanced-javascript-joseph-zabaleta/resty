import React from 'react';
import ReactJson from 'react-json-view';

import './results.scss';

export default function Results(props) {


    if (!props.results) return (<></>);

    let style = {
        padding: "5px",
        "borderRadius": "5px",
        "minHeight": "100px",
    }

    return (

        <div id='response-container'>


            <h3>
                Headers
            </h3>
            <div id='header-container'>

                <ReactJson src={props.results.headers} style={style} displayDataTypes={false} theme="tube" />

            </div>

            <h3>
                Results: {props.results.data.length} items
            </h3>
            <div id='results-container'>

                <ReactJson src={props.results.data} style={style} displayDataTypes={false} theme="tube" />

            </div>

        </div>

    );

};

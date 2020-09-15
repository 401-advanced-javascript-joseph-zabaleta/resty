import React from 'react';

import './results.scss';

export default function Results(props) {


    if (!props.results) return (<></>);

    return (

        <div id='response-container'>


            <div id='header-container'>
                <h3>
                    Headers
                </h3>
                <pre>
                    {JSON.stringify(props.results.headers, null, 2)}
                </pre>
            </div>

            <div id='results-container'>
                <h3>
                    Results: {props.results.data.length} items
                </h3>
                <pre>
                    {JSON.stringify(props.results.data, null, 2)}
                </pre>
            </div>

        </div>

    );

};

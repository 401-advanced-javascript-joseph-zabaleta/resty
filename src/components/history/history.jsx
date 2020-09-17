import React from 'react';
import './history.scss';


export default function History(props) {

    if (props.history.length === 0) return (<></>);

    return (

        <div id='history-container'>

            { props.history.slice(0).reverse().map((entry, index) => (


                <div key={index}>


                    <span>
                        <button onClick={() => props.updateFormDefaults(entry)}>{entry.request.method}</button>
                        {entry.request.url}
                    </span>

                </div>



            ))}

        </div>

    );

};

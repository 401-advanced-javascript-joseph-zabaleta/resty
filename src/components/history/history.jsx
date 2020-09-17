import React from 'react';
import StorageService from '../../utils/storage-service.js';

export default function History(props) {

    let requestHistory = StorageService.retrieve();




    return (

        <div id='history-container'>

            { requestHistory.map((entry, index) => (


                <div key={index}>


                    <span>
                        <button onClick={() => props.updateFormDefaults(entry)}>{entry.method}</button>
                        {entry.url}
                    </span>

                </div>



            ))}

        </div>

    );

};

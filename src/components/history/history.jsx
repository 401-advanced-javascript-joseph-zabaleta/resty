import React from 'react';
import StorageService from '../../utils/storage-service.js';

export default function History() {

    let requestHistory = StorageService.retrieve();

    return (

        <div id='history-container'>

            { requestHistory.map((entry, index) => (
                <div key={index}>{entry.url}</div>
            ))}

        </div>

    );

};

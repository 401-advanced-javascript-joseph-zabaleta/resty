import _ from 'lodash';

/**
 * Local Storage Service
 *
 * Designed to manage all actions with the local storage
 * @class
 */
export default class StorageService {


    /**
     * Saves unique requests to requestHistory in local storage
     * @param {*} item
     */
    static save(item) {

        let results = this.retrieve();
        let requestHistory = JSON.parse(results);


        if (!this._compare(item, requestHistory)) {

            requestHistory.push(item);
            localStorage.setItem('requestHistory', JSON.stringify(requestHistory));

        } else {
            return;
        }

    };


    /**
     * Runs a deep comparison of two items
     * @param {*} item
     */
    static _compare(item, history) {

        let flag = false;

        history.forEach(entry => {

            if (_.isEqual(item, entry)) {
                flag = true;
            };

        });

        return flag;

    };


    /**
     * Retrieves items from local storage
     * @returns {{JSON}}
     */
    static retrieve() {

        if (this._isPresent()) {

            return localStorage.getItem('requestHistory');

        } else {

            return JSON.stringify([]);

        };

    };


    /**
     * Checks local storage for requestHistory
     * @returns {Boolean}
     */
    static _isPresent() {

        return localStorage.getItem('requestHistory') ? true : false;

    };

};

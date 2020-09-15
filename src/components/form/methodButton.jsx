import React from 'react';

export default class MethodButton extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    };


    handleClick(event) {

        this.props.methodChange(this.props.method);

    };


    render() {

        let className = this.props.method === this.props.activeMethod ? 'activeButton' : 'inactiveButton';

        return (

            <li class={className} onClick={this.handleClick}>
                {this.props.method}
            </li>

        );

    };

};

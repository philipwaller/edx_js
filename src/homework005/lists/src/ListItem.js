import React, { Component } from 'react';

class ListItem extends Component {

    constructor(props) {
        super(props);
        this.state = { color: 'black' };
    }

    handleClick() {
        let colour = (this.state.color=='black') ? 'gray' : 'black';
        this.setState({ color: colour });
    }

    render() {
        var item = this.props.item;
        var name = item.name;

        console.log("ListItem: "+ item);

        return (
            <span onClick={this.handleClick.bind(this)} style={{color: this.state.color}}>
                <strong>{name}</strong>
            </span>
        );

    }

}
export default ListItem;


import React, { Component } from 'react';

class AddItem extends Component {

    constructor() {
        super();
            this.state = {
                newItem:{}
        }
    }

    handleSubmit(e) {
        e.preventDefault();

        let name = this.refs.id.value;
        if ( !name ) return;

        let newItem = {};
        newItem[this.props.idName] = {name: name};

        this.setState({
            newItem: newItem
        }, function () {
            this.props.addItem(this.state.newItem);
        });
    }
    
    render() {
        var divName = 'add' + this.props.idName;
        return (
            <div className='addItemDiv'>
                <h4>Add {this.props.idName}</h4>
                <form ref='form' onSubmit={this.handleSubmit.bind(this)}>
                    <div id={divName} ref={divName}>
                        <label>Name</label><br />
                        <input type='text' ref='id' />
                    </div>
                    <br />
                    <input type='submit' value='Submit' />
                    <br />
                </form>
            </div>
        );
    }

}

export default AddItem;

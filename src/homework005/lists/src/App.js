import React, { Component } from 'react';
import Lists from './Lists.js';
import AddList from './AddList.js';
import './App.css';

class App extends Component {

    constructor() {
        super();
        this.state = {
            lists: [], 	//-this holds the name of each list
            items: {} 	//-this property names of this object are the names of 
                        // the lists; their values are arrays of the items in each list
        };
    }

    /**
     * This function takes the state of an AddList component as its parameter
     * and updates the state of this App component by adding a new entry to the "lists"
     * array and then adding a new property in the "items" object that has the same name
     * as the value put into the "lists" array. It should then re-render this App component.
     */
    handleAddList(name) {
        let lists = this.state.lists;
        lists.push(name);
        let items = this.state.items;
        items[name] = [];
        this.setState({
                lists: lists,
                items: items
            });
    }

    /**
     * This function takes the state of an AddItem component as its parameter
     * and updates the state of this App component by adding a new value to the 
     * appropriate array in the "items" property of the state. Keep in mind that
     * the property names of "items" are the names of each list, which is mapped
     * to an array of the items in that list. After updating the "items" part of 
     * the state, this function  should then re-render this App component.
     */
    handleAddItem(item) {
        let items = this.state.items;

        let entry = Object.entries(item)[0];
        let list = entry[0];
        let name = entry[1];

        items[list].push(name);
        this.setState({items: items})
    }

    /**
     * Renders the component.
     */
    render() {
        console.log(this.state);
        return (
            <div className="App">
                <AddList addList={this.handleAddList.bind(this)} />
                <div id="listsDiv" className="List">
                    <Lists 
                        lists={this.state.lists} 
                        items={this.state.items} 
                        addItem={this.handleAddItem.bind(this)} 
                        />
                </div>
            </div>
        );
    }

}

export default App;

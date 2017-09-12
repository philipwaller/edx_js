import React, { Component } from 'react';

class AddList extends Component {


  handleSubmit(e) {
      e.preventDefault();
      var name = this.refs.id.value;
      if ( !name ) { return; }
      this.refs.id.value = '';
      this.setState({ 
              name : name
          }, function () {
              this.props.addList(this.state.name);
          });
  }

  render() {
    return (
      <div id="addListDiv">
          <form onSubmit={this.handleSubmit.bind(this)}>
              <div id='addList'>
                  <label>What will be on your next list?&nbsp;
                      <input type='text' ref='id' id='newID'></input>
                  </label>
              </div><br />
              <input type='submit' value='Create List' />
          </form>
      </div>
    );
  }
}

export default AddList;

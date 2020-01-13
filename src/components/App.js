import React, { Component } from 'react';
import { connect } from 'react-redux'

import List from './List';
import AddItemButton from './Additem';

class App extends Component {
  render() {

    const { lists } = this.props;
    return (
      <div className="App">
        <h1>Hello</h1>
        <div style={styles.listContainer} >
          {
            lists.map(list => <List key={list.id} listId={list.id} title={list.title} cards={list.cards} />)
          }
          <AddItemButton list />
        </div>
      </div>
    );
  }
}

const styles = {
  listContainer:{
    display: 'flex',
    flexDirection: 'row',
    marginRight: 8
  }
}

const mapStateToProps = state =>({
  lists: state.lists  // lists comes from listreducer
})

export default  connect(mapStateToProps) (App);

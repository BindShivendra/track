import React, { Component } from 'react';
import { connect } from 'react-redux'
import { DragDropContext } from 'react-beautiful-dnd';

import List from './List';
import AddItemButton from './Additem';
import { sortItems } from '../actions/list.actions';

class App extends Component {

  onDragEnd = (endDesult) =>{
    const { destination, source, draggableId } = endDesult;
    
    if (!destination) {
      return;
    }
    this.props.dispatch(sortItems(
      source.droppableId,
      destination.droppableId,
      source.index,
      destination.index,
      draggableId
    ))

  }

  render() {

    const { lists } = this.props;
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <div className="App">
          <div style={styles.listContainer} >
            {
              lists.map(list => (
              <List 
                key={list.id} 
                listId={list.id} 
                title={list.title} 
                cards={list.cards} 
              />))
            }
            <AddItemButton list />
          </div>
        </div>
      </DragDropContext>
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

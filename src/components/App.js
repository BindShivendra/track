import React, { Component } from 'react';
import { connect } from 'react-redux'
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';

import List from './List';
import AddItemButton from './Additem';
import { sortItems } from '../actions/list.actions';


const Container = styled.div`
  display: flex;
  flex-direction: row;
  font-family: 'Roboto', sans-serif;
`

class App extends Component {

  onDragEnd = (endDesult) => {
    const { destination, source, type } = endDesult;
    if (!destination) {
      return;
    }
    this.props.dispatch(sortItems(
      source.droppableId,
      destination.droppableId,
      source.index,
      destination.index,
      type
    ))

  }

  render() {

    const { lists } = this.props;
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
          <Droppable droppableId="list-container" direction="horizontal" type="list" >
            {provided => (
              <Container 
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {
                  lists.map((list, index) => (
                    <List
                      key={list.id}
                      listId={list.id}
                      title={list.title}
                      cards={list.cards}
                      index={index}
                    />))
                }
                {provided.placeholder}
                <AddItemButton list />
              </Container>
            )}
          </Droppable>
      </DragDropContext>
    );
  }
}


const mapStateToProps = state => ({
  lists: state.lists  // lists comes from listreducer
})

export default connect(mapStateToProps)(App);

import React from 'react'
import { Droppable, Draggable } from 'react-beautiful-dnd';
import styles from 'styled-components';

import CardComponent from "./Card";
import AddItemButton from './Additem';


const Container = styles.div`
  background-color: #a5c0d5;
  border-radius: 3px;
  width: 300px;
  padding: 8px;
  height: 100%;
  margin: 0 8px 0 0;
`;

const List = ({ title, cards, listId, index }) => (
  <Draggable draggableId={listId} index={index} >
    {provided =>(
      <Container 
          ref={provided.innerRef} 
          {...provided.draggableProps} 
          {...provided.dragHandleProps} >
        <Droppable droppableId={listId}>
          {provided => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              >
              <h4> {title}</h4>
              {
                cards.map((card, index) => (
                  <CardComponent
                    key={card.id}
                    index={index}
                    cardId={card.id}
                    text={card.text} />
                ))
              }
              {provided.placeholder}
            </div>
          )}
        </Droppable>
        <AddItemButton listId={listId} />
      </Container>
    )}
  </Draggable>
);

export default List;
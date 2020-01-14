import React from 'react'
import Typography from '@material-ui/core/Typography';
import { Droppable } from 'react-beautiful-dnd';

import CardComponent from "./Card";
import AddItem from './Additem';

const List = ({ title, cards, listId }) => (
    <Droppable droppableId={listId}>
        { provided =>(
            <div 
                ref={provided.innerRef} 
                {...provided.droppableProps}
                style={style.container}>
                <Typography variant="h6" align="center" > { title } </Typography >
                {
                    cards.map((card, index) => (
                    <CardComponent 
                        key={card.id} 
                        index={index} 
                        cardId={card.id} 
                        text={card.text}/>
                        ))
                }
                <AddItem listId={listId}/>
                {provided.placeholder}
            </div>
        )}
    </Droppable>
);


const style = {
    container: {
        backgroundColor: '#a0beee',
        borderRadius: 3,
        width: 300,
        marginRight: 8,
        height: '100%'
    }
}

export default List;
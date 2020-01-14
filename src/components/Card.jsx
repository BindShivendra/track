import React from 'react'
import { Draggable } from 'react-beautiful-dnd';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


const CardComponent = ({ index, text, cardId }) => (
    <Draggable draggableId={cardId} index={index} >
        {provided =>(
        <div 
            ref={provided.innerRef} 
            {...provided.draggableProps} 
            {...provided.dragHandleProps} >
            <Card style={styles.cardContainer} >
                <CardContent >
                    <Typography gutterBottom>
                        {text}
                    </Typography>
                </CardContent>
            </Card>
        </div>
        )}
    </Draggable>
);

const styles = {
    cardContainer: {
        margin: 1,
        marginBottom: 3,
    }
}

export default CardComponent;

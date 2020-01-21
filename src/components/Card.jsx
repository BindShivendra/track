import React from 'react'
import { Draggable } from 'react-beautiful-dnd';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import styles from 'styled-components';
import { withTheme } from '@material-ui/styles';

const Container = styles.div`
    margin-bottom: 8px;  
`;

const CardComponent = ({ index, text, cardId }) => (
    <Draggable draggableId={cardId} index={index} >
        {provided =>(
        <Container 
            ref={provided.innerRef} 
            {...provided.draggableProps} 
            {...provided.dragHandleProps} >
            <Card >
                <CardContent >
                    <Typography gutterBottom>
                        {text}
                    </Typography>
                </CardContent>
            </Card>
        </Container>
        )}
    </Draggable>
);


export default CardComponent;

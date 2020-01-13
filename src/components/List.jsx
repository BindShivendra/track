import React from 'react'
import Typography from '@material-ui/core/Typography';

import CardComponent from "./Card";
import AddItem from './Additem';

const List = ({ title, cards, listId }) => (
    <React.Fragment>
        <div style={style.container}>
            <Typography variant="h6" align="center" > { title } </Typography >
            {
                cards.map(card => <CardComponent key={card.id}  text={card.text}/>)
            }
            <AddItem listId={listId}/>
        </div>
    </React.Fragment>
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
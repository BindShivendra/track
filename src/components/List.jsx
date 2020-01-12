import React from 'react'
import Typography from '@material-ui/core/Typography';

import CardComponent from "./Card";

const List = ({ title, cards }) => (
    <React.Fragment>
        <div style={style.container}>
            <Typography variant="h6" align="center" > { title } </Typography >
            {
                cards.map(card => <CardComponent  text={card.text}/>)
            }
        </div>
    </React.Fragment>
);


const style = {
    container: {
        backgroundColor: '#a0beee',
        borderRadius: 3,
        width: 300,
        marginRight: 8
    }
}

export default List;
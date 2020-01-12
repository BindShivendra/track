import React from 'react'

import CardComponent from "./Card";

const List = ({ title }) => (
    <React.Fragment>
        <div style={style.container}>
            <h4>{title}</h4>
            <CardComponent />
        </div>
    </React.Fragment>
);


const style = {
    container: {
        backgroundColor: '#a0beee',
        borderRadius: 3,
        width: 300,

    }
}

export default List;
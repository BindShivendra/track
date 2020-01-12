const initialState = [
    {
        title: 'First card title',
        cards: [
            {
                id: 0,
                text: "Create sample card list item"
            },
            {
                id: 1,
                text: "Add lsit item to a card"
            },
        ]
    },
    {
        title: 'Second card title',
        cards: [
            {
                id: 0,
                text: "Create second card "
            },
            {
                id: 1,
                text: "display list item"
            },
        ]
    }
]

const listReducer = (state = initialState, action) => {
    switch (action.type) {
    
        default:
            return state;
    }
}

export default listReducer;
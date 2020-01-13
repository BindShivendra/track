const initialState = [
    {
        title: 'First card title',
        id: 0,
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
        id: 1,
        cards: [
            {
                id: 0,
                text: "Create second card "
            },
            {
                id: 1,
                text: "display list item 2"
            },
            {
                id: 2,
                text: "display list item 3"
            },
            {
                id: 3,
                text: "display list item 4"
            },
            {
                id: 4,
                text: "display list item 5"
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
import { ADD_LIST, ADD_CARD } from "../actions/action.constants";


let lastID = 2; // hack
let cardID = 5;
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
        case ADD_LIST:
            const newList = {
                title: action.payload.title,
                cards: [],
                id: lastID
            }
            lastID += 1;
            return [...state, newList];
        case ADD_CARD:
            const newCard = {
                id: cardID,
                text: action.payload.text
            };
            cardID += 1;
            const newState = state.map(list =>{
                if(list.id === action.payload.id){
                    return {
                        ...list, 
                        cards: [ ...list.cards, newCard]
                    };
                }else{
                    return list
                }
            })

            return newState;

        default:
            return state;
    }
}

export default listReducer;
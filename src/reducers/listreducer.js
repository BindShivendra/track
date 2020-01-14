import {
    ADD_LIST,
    ADD_CARD,
    SORT_ITEMS
} from "../actions/action.constants";


let lastID = 2; // hack
let cardID = 6;
const initialState = [{
        title: 'First card title',
        id: `list-${0}`,
        cards: [{
            id: `Card-${0}`,
                text: "Create sample card list item"
            },
            {
                id: `Card-${1}`,
                text: "Add lsit item to a card"
            },
        ]
    },
    {
        title: 'Second card title',
        id: `list-${1}`,
        cards: [{
            id: `card-${2}`,
                text: "Create second card "
            },
            {
                id: `card-${3}`,
                text: "display list item 2"
            },
            {
                id: `card-${4}`,
                text: "display list item 3"
            },
            {
                id: `card-${5}`,
                text: "display list item 4"
            },
            {
                id: `card-${6}`,
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
        case ADD_CARD: {
            const newCard = {
                id: cardID,
                text: action.payload.text
            };
            cardID += 1;
            const newState = state.map(list => {
                if (list.id === action.payload.id) {
                    return {
                        ...list,
                        cards: [...list.cards, newCard]
                    };
                } else {
                    return list
                }
            })

            return newState;
        }
        case SORT_ITEMS: {
            const newState = [...state];
            const {
                dropIdStart,
                dropIdEnd,
                dropIndexStart,
                dropIndexEnd,
                dragId
            } = action.payload
            console.log(action.payload)
            // same list
            if (dropIdStart === dropIdEnd) {
                //dragged list item
                const list = state.find(list => dropIdStart === list.id);
                console.log(state)
                const card = list.cards.splice(dropIndexStart, 1);
                list.cards.splice(dropIndexEnd, 0, ...card);
            }

            return newState;
        }
        default:
            return state;
    }
}

export default listReducer;
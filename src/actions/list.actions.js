import { ADD_LIST, ADD_CARD } from "./action.constants";

export const addList = (title) =>({ 
    type: ADD_LIST ,
    payload: {
        title: title
    }
})

export const addCard = (listId, text) =>({ 
    type: ADD_CARD,
    payload: {
        id: listId,
        text: text
    }
})
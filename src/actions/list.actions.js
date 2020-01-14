import { ADD_LIST, ADD_CARD, SORT_ITEMS } from "./action.constants";

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

export const sortItems = (
    dropIdStart,
    dropIdEnd,
    dropIndexStart,
    dropIndexEnd,
    dragId) =>({

        type: SORT_ITEMS,
        payload: {
            dropIdStart: dropIdStart,
            dropIdEnd: dropIdEnd,
            dropIndexStart: dropIndexStart,
            dropIndexEnd: dropIndexEnd,
        }
})
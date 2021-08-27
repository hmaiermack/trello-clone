
//equivalent to Action = {...} | {...}
//each action has a type which is the discriminant
//by looking at the type property, typescript is able to determine what the other fields of the type will be
export type Action = 
    | {
        type: "ADD_LIST",
        payload: string
    }
    | {
        type: "ADD_TASK",
        payload: { text: string, listId: string}
    }

export const addTask = (text: string, listId: string): Action => ({
    type: "ADD_TASK",
    payload: {
        text,
        listId
    }
})

export const addList = (text: string): Action => ({
    type: "ADD_LIST",
    payload: text
})
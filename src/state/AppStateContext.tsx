import { createContext, FC, useContext, Dispatch  } from "react"
import { Action } from "./actions"
import { Task, List, AppState, appStateReducer } from "./appStateReducer"
import { useImmerReducer } from "use-immer"
import { DragItem } from "../DragItem"




const appData: AppState = {
    draggedItem: null,
    lists: [
        {
            id: "0",
            text: "To Do",
            tasks: [{ id: "c0", text: "to do task" }]
            },
            {
            id: "1",
            text: "In Progress",
            tasks: [{ id: "c2", text: "in progress task" }]
            },
            {
            id: "2",
            text: "Done",
            tasks: [{ id: "c3", text: "finished task" }]
            }
    ]
}

type AppStateContextProps = {
    draggedItem: DragItem | null;
    lists: List[];
    getTasksByListId(id: string): Task[];
    dispatch: Dispatch<Action>;
}

const AppStateContext = createContext<AppStateContextProps>({} as AppStateContextProps)

export const AppStateProvider: FC = ({children}) => {
    const [state, dispatch] = useImmerReducer(appStateReducer, appData)

    const { draggedItem, lists } = state

    const getTasksByListId = (id: string) => {
        return lists.find((list) => list.id === id)?.tasks || []
    }

    return (
        <AppStateContext.Provider value = {{draggedItem, lists, getTasksByListId, dispatch}}>
            {children}
        </AppStateContext.Provider>
    )
}

export const useAppState = () => {
    return useContext(AppStateContext)
}
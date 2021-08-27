import { FC } from 'react';
import { AppContainer } from './styles';
import { AddNewItem } from './AddNewItem';
import { Column } from "./Column"
import { Card } from "./Card"
import { useAppState } from './state/AppStateContext';
import { addList } from './state/actions';

export const App: FC = ({children}) => {
  const { lists, dispatch } = useAppState()

  return (
    <AppContainer>
      {lists.map((list) => (
        <Column text={list.text} key={list.id} id={list.id} />
      ))}
      <AddNewItem toggleButtonText="+ Add another list" onAdd={text => dispatch(addList(text))}/>
    </AppContainer>
  )
}

export default App;

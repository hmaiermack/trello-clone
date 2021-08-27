import { FC } from 'react';
import { AppContainer } from './styles';
import { AddNewItem } from './AddNewItem';
import { Column } from "./Column"
import { Card } from "./Card"

export const App: FC = ({children}) => {
  return (
    <AppContainer>
      <Column text="To Do">
        <Card text="first card" />
      </Column>
      <Column text="In Progress">
        <Card text="first card" />
      </Column>
      <Column text="Finished">
        <Card text="first card" />
      </Column>
      <AddNewItem toggleButtonText="+ Add another list" onAdd={console.log}/>
    </AppContainer>
  )
}

export default App;

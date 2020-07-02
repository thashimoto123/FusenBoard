import React from 'react';
import { Switch, Route } from 'react-router'
import BrdBoardView from 'components/BrdBoardView'
import { setModalMap, useCloseAllModal } from 'modules/modal'

const modalMap = [
  { 
    id: 'BrdFormModal',
    children: [
      {
        id: 'BrdLabelModal',
        children: []
      }
    ]
  },
  {
    id: 'BrdShareModal',
    children: []
  },
  {
    id: 'BrdRoomInModal',
    children: []
  },
  {
    id: 'BrdShareUrlModal',
    children: []
  }
]

let modals = setModalMap(modalMap)

function App() {
  const closeAllModal = useCloseAllModal()
  window.addEventListener('click', closeAllModal)

  return (
    <Switch>
      <Route path="/room/:id" component={BrdBoardView} />
      <Route exact path="/" component={BrdBoardView} />
    </Switch>
  );
}

export default App;
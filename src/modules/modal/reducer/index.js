const initialState = {
  activeModals: ['BrdFormModal']
}
export default function modalReducer(state = initialState, action) {
  switch(action.type) {
    case 'OPEN_MODAL':
      return {
        ...state,
        activeModals: [...state.activeModals, ...action.payload.modals].filter((modal, i, self) => self.indexOf(modal) === i)
      }
    case 'CLOSE_MODAL':
      return {
        ...state,
        activeModals: state.activeModals.filter(modal => action.payload.modals.indexOf(modal) === -1)
      }
    default:
      return state
  }
}
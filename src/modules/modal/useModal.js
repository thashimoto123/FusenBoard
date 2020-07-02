import { useSelector, useDispatch } from 'react-redux'
import { closeModal } from './actions'
import { modals } from './Modal'

export  default function useModal(modalId) {
  const dispatch = useDispatch()
  return {
    active: useSelector((state) => state.modal.activeModals.indexOf(modalId) >= 0),
    onClickModal: function(e) {
      if (!modalId) return null

      e.stopPropagation()
      const modal = modals.find((modal) => modal.id === modalId)
      const parents = findParents(modal).map(modal => modal.id)
      const closeTargets = modals.filter(m => m.id !== modalId && parents.indexOf(m.id) === -1).map(modal => modal.id)
      dispatch(closeModal(closeTargets))
    }
  }
}

function findParents(modal) {
  let parents = []
  if (!modal.parent) return parents
  parents = modal.parent.parent ? [modal.parent, ...findParents(modal.parent)] : [modal.parent]
  return parents
}
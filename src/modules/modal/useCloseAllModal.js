import { useDispatch } from 'react-redux'
import { closeModal } from './actions'
import { modals } from './Modal'

export default function useCloseAllModal() {
  const dispatch = useDispatch()
  const targets = modals.map(m => m.id)
  return function() {
    dispatch(closeModal(targets))
  }
}
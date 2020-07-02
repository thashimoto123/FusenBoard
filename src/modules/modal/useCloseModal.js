import { useDispatch } from 'react-redux'
import { closeModal } from './actions'

export default function useCloseModal() {
  const dispatch = useDispatch()
  return (modals) => dispatch(closeModal(modals))
}
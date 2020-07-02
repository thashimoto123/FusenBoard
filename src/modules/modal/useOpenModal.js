import { useDispatch } from 'react-redux'
import { openModal } from './actions'

export default function useOpenModal() {
  const dispatch = useDispatch()
  return (modals) => dispatch(openModal(modals))
}
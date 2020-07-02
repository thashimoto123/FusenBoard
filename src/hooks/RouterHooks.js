import { push } from 'connected-react-router'
import { useDispatch } from 'react-redux'

export const usePush = () => {
  const dispatch = useDispatch()
  return (option) => dispatch(push(option))
}
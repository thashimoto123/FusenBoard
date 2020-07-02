import { useSelector, useDispatch } from 'react-redux'
import { updateCardFormText } from 'actions/CardFormActions'

export default () => {
  const dispatch = useDispatch()
  return {
    onChange(e) {
      dispatch(updateCardFormText(e.target.value))
    },
    value: useSelector(state => state.card.text)
  }
}
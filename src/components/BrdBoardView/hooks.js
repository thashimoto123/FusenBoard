import { useSelector, useDispatch } from 'react-redux'
import { updateCardForm } from 'actions/CardFormActions'
import { openModal } from 'modules/modal'

export default () => {
  const dispatch = useDispatch()

  const onClickCard = (card) => {
    dispatch(updateCardForm(card))
    dispatch(openModal('BrdFormModal'))
  }
  return {
    onClickCard
  }
}
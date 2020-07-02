import getHitWord from 'utils/getHitWord'
import { useAllCardLabelValues } from 'hooks/CardListHooks'

export default (labelId, value) => {
  const [values] = useAllCardLabelValues(labelId)


  // 入力されたワードが空の場合、入力候補を全て返す
  // 入力されていれば、検索にヒットした候補を返す
  let suggestions = value ? getHitWord(value, values) : values 


  return [suggestions]
}


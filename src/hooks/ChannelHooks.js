import { useSelector, useDispatch } from 'react-redux'
import * as act from 'actions/ChannelActions'

export const useSetChannel = () => {
  const dispatch = useDispatch()
  const setChannel = (channel) => {
    dispatch(act.updateChannel())
  }
  return setChannel
}

export const useChannelValue = () => {
  const channel = useSelector(state => state.channel.channel)
  return channel
}

export const useChannel = () => {
  const channel = useChannelValue()
  const setChannel = useSetChannel()
  return [channel, setChannel]
}

export const useChannelPostCards = () => {
  const channel = useChannelValue()
  const postCards = (cardList) => {
    if (channel) {
      channel.push({
        type: 'CARDS',
        payload: {
          cardList
        }
      })
    }
  }
  return postCards
}

export const useChannelPostLabels = () => {
  const channel = useChannelValue()
  const postLabels = (labelList) => {
    if (channel) {
      channel.push({
        type: 'LABELS',
        payload: {
          labelList
        }
      })
    }
  }
  return postLabels
}

export const useUserNameValue = () => {
  const userName = useSelector(state => state.channel.userName)
  return userName
}

export const useSetUserName = () => {
  const dispatch = useDispatch()
  return (userName) => {
    dispatch(act.updateUserName(userName))
  }
}

export const useUserName = () => {
  const userName = useUserNameValue()
  const setUserName = useSetUserName()
  return [userName, setUserName]
}
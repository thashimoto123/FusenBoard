import * as Actions from 'constants/ActionTypes'

export const updateChannel = (channel) => ({
  type: Actions.UPDATE_CHANNEL,
  channel
})

export const updateUserName = (userName) => ({
  type: Actions.UPDATE_USER_NAME,
  userName
})
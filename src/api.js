import consumer from 'consumer'
import store from 'store'
import { push } from 'connected-react-router'
import { updateCardList } from 'actions/CardListActions'
import { updateLabels } from 'actions/LabelListActions'
import { updateChannel } from 'actions/ChannelActions'

const API_URL = '/api/rooms/'

export const createChannel = (id, userName) => {
  return consumer.subscriptions.create({ channel: "RoomChannel", room_id: id, user_name: userName }, {
    connected() {
      // Called when the subscription is ready for use on the server
      store.dispatch(updateChannel(this))
    },

    disconnected() {
      store.dispatch(updateChannel(null))
      store.dispatch(push('/'))
      alert('部屋への入室に失敗しました。')
      // Called when the subscription has been terminated by the server
    },

    received(data) {
      // Called when there's incoming data on the websocket for this channel
      switch(data.type) {
        case 'CARDS':
          store.dispatch(updateCardList(data.payload.cardList))
          break
        case 'LABELS':
          store.dispatch(updateLabels(data.payload.labelList))
          break
        case 'MESSAGE':
          alert(data.payload.message)
          break
        default:
          return
      }
    },
    push: function(data) {
      data.name = id
      return this.perform('push', data)
    },
    rejected() {
      store.dispatch(updateChannel(null))
      store.dispatch(push('/'))
      alert('退室しました。')
    }
  })
}

export const roomIn = (name) => {
  return fetchApi('GET', null, name)
}

export const login = (params) => {
  return fetchApi('POST', params, 'login')
}

export const createRoom = (params) => {
  return fetchApi('POST', params)
}

export const updateData = (name, params) => {
  return fetchApi('PUT', params, name)
}



export const fetchApi = (method = 'GET', data = null, url = '') => {
  const body  = data ? JSON.stringify(data) : null
  const meta = document.querySelector('meta[name="csrf-token"]')
  const token = meta ? meta.getAttribute('content') : ''
  return fetch(API_URL + url , {
    method,
    headers: {'Accept': 'application/json','Content-Type': 'application/json', 'X-CSRF-Token': token},
    body,
    // mode: 'cors',
    // credentials: 'include'
  })
    .then(res => {
      if (res.ok) {
        return res.json()
      }
      alert('エラーが起きました。')
      store.dispatch(push('/'))
      return new Error(res.ok);
    })
    .catch(err => {
      console.error(err)
    }) 
}
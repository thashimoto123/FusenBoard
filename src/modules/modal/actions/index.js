export function closeModal(modals) {
  if (!(modals instanceof Array)) modals = [modals]
  return {
    type: 'CLOSE_MODAL',
    payload: {
      modals
    }
  }
}

export function openModal(modals) {
  if (!(modals instanceof Array)) modals = [modals]
  return {
    type: 'OPEN_MODAL',
    payload: {
      modals
    }
  }
}
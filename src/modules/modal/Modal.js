export let modals = []

export default class Modal {
  constructor(id, children = []) {
    if (!Modal.modals) Modal.modals = modals
    let modal = (modals.find((modal) => modal.id === id))

    if (modal) {
      return modal
    }

    this.id = id
    this.has(children)
    Modal.modals.push(this)
  }
  has(children) {
    if (this.children) return
    this.children = children instanceof Array ? children : [children]
    this.children.forEach((modal) => {
      modal.parent = this
    })
  }
}

export function setModalMap(map) {
  const modals = map.map(m => {
    m.children = m.children || []
    return new Modal(m.id, setModalMap(m.children))
  })
  return modals
}






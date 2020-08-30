import Noty from 'noty'

export const showNoty = function (text, type = 'error') {
  new Noty({
    text,
    type,
    timeout: 3000,
    layout: 'topCenter'
  }).show()
}

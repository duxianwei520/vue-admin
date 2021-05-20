import Vue from 'vue'
import Main from './main.vue'

const MessageConstructor = Vue.extend(Main)
let instance
const message = function(options) {
  if (Vue.prototype.$isServer) return
  instance = new MessageConstructor({
    data: options
  })
  instance.$mount()
  document.body.appendChild(instance.$el)
  return instance
}
export default message

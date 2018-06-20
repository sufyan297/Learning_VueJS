Vue.component('todo', {
  props: ['data'],
  template: '<li>{{data.name || 404}}</li>'
})
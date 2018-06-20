var tap_app = new Vue({
  el: '#tap',
  data: {
    count: 1
  },
  methods: {
    onTap: function() {
      this.count = this.count + 1;
    }
  }
})
var tap_app = new Vue({
  el: '#tap',
  data: {
    count: 1
  },
  methods: {
    onTap() {
      this.count = this.count + 1;
    }
  }
})
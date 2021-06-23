import Vue from "vue";

 

new Vue({
  el: "#menu",
  data: {
    title: "hw",
    isOpened: true
  },
  methods: {  
    collapse() {
    var t = this;
    t.isOpened = false;
  },

    toggle(e) {
      var t = this;
      t.isOpened = !t.isOpened;
      console.log(t.isOpened);
  }
  }


});
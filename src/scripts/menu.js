
export default {
    name: "menu",
    data() {
        console.log('this is the menu module');

      return {
        isExpanded: false,
      };
    },
    methods: {
      collapse() {
        this.isExpanded = false;
      },
  
      toggle() {
        this.isExpanded = !this.isExpanded;
      },
    },
  };
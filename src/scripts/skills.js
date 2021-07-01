import Vue from 'vue'

const skillsItem = {
  props: ['skill'],
  template: '#skills-item',
  name: 'skills-item',
  mounted() {
    this.drawCirclePercentage();
  },

  methods: {
      drawCirclePercentage(){
        const circle = this.$refs["colored-circle"]
        const dashArray = parseInt(getComputedStyle(circle).getPropertyValue('stroke-dasharray'));
        const percent = (dashArray / 100) * (100 - this.skill.percent);
        circle.style.strokeDashoffset = percent; 
      }
  },
}
const skillsRow = {
  props: ['category'],
  template: '#skills-row',
  name: 'skills-row',
  components: { 'skills-item': skillsItem },
}
new Vue({
  el: '#skills-component',
  template: '#skills-list',
  components: { 'skills-row': skillsRow },
  data() {
    return {
      skills: [],
    }
  },
  created() {
    this.skills = require('/src/data/skills.json')
  },
})

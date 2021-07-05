import skillAddLine from "./skill_constructor"

export default {
  title: "skillAddLine",
  components: {skillAddLine}
}

export const defaultView = () => ({
  components: {skillAddLine},
  template: `
    <skill-add-line /> 
  `
})
export default {
  name: 'todo-input',
  data() {
    return {
      text: ''
    };
  },
  methods: {
    addTodo() {
      if (!this.text == '') {
        this.$emit('todo:add', this.text);
        this.text = '';
      }
    }
  }
};

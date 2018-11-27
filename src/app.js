import TodoInput from './components/todo-input/todoInput.vue';
import TodoItem from './components/todo-item/todoItem.vue';

export default {
  name: 'app',
  components: {
    TodoInput,
    TodoItem
  },
  data() {
    return {
      todos: [
        { id: 0, text: 'Marcar jantar' },
        { id: 1, text: 'Marcar almoco' },
        { id: 2, text: 'Marcar cafe' }
      ],
      nextId: 3
    };
  },
  methods: {
    addTodo(text) {
      this.todos.push({ id: this.nextId, text: text });
      this.nextId++;
    },
    removeTodo(id) {
      let todos = this.todos;
      this.todos = todos.filter(todo => todo.id != id);
    }
  }
};

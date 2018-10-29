<template>
  <div>
    <create-list v-on:create-list="createList"></create-list>
    <todo-list v-bind:list="list"></todo-list>
    
  </div>
</template>

<script>
import Todo from "@/components/Todo.vue";
import TodoList from "@/components/TodoList.vue";
import CreateTodo from "@/components/CreateTodo.vue";
import CreateList from "@/components/CreateList.vue";
export default {
  name: "app",
  components: {
    Todo,
    TodoList,
    CreateTodo,
    CreateList
  },
  data() {
    return {
      list: [{
        title: "Edit list title"
      }],
      todo: [{
        title: "Edit todo",
        task: "Edit todo",
      }],
    };
  },
  methods: {
    createTodo(newTodo) {
      this.todo.push(newTodo);
    },
    createList(newList) {
      this.list.push(newList);
    },
  },
};
</script>
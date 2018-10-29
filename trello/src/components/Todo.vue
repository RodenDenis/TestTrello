<template>
  <div class="todo-content ">
    <div class="todo-item uk-card uk-card-default" 
    v-on:dblclick="showForm" 
    v-show="!isEditing" 
    title="Double click for edit...">
      <div class="uk-text-lead title-text">
          {{ todo.title }}
      </div>
      <div class="uk-text-meta meta-text todo-text" ontenteditable="true">
          {{ todo.task }}
      </div>
      <div class="todo-menu">
        <span uk-icon="pencil" v-on:click="showForm" 
        title="Edit task"></span>
        <span uk-icon="trash" v-on:click="deleteTodo(todo)" 
        title="Delete task"></span>
      </div>
    </div>
    <div class="modal-mask-item" v-show="isEditing">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="field">
            <label>Title</label>
            <input type="text" v-model="todo.title" >
          </div>
          <div class="field">
            <label>What to do</label>
            <textarea class="task-text" rows="9" type="text" maxlength="300" v-model="todo.task"></textarea>
          </div>
          <div class="">
            <button class="uk-button uk-button-default uk-button-small middle-button" v-on:click="hideForm">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  props: ["todo"],
  data() {
    return {
      isEditing: false
    };
  },
  methods: {
    deleteTodo(todo) {
      this.$emit("delete-todo", todo);
    },
    showForm() {
      this.isEditing = true;
    },
    hideForm() {
      this.isEditing = false;
    }
  }
};
</script>

<style>
.todo-content {
  width: 99%;
  margin-left: 2px;
  margin-top: 5px;
}
.todo-item {
  border: 1px solid grey;
  border-radius: 15px 15px;
  min-height: 100px;
}
.todo-text {
  width: 95%;
  min-height: 40px;
  max-height: 120px;
}
.title-text {
  font-size: 20px;
  text-align: left;
  margin-left: 5px;
}
.task-text {
  width: 100%;
  resize: none;
}
.meta-text {
  text-align: left;
  margin-left: 10px;
  min-height: 45px;
}
.todo-menu {
  text-align: right;
  margin-right: 10px;
}
.modal-mask-item {
  position: fixed;
  z-index: 9998;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}
.middle-button {
  margin-top: 5px;
}
</style>

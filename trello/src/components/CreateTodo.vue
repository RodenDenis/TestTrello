<template>
  <div class="create-todo">
    <button uk-icon="plus-circle" 
    v-on:click="openForm" 
    @click="showModal = true" 
    v-show="!isCreating" 
    class="new-todo-button"
    title="Create new todo">
    </button>
    <div class="create-form uk-position-center modal-mask" v-show="isCreating">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="field">
            <label>Title</label>
            <input uk-input v-model="titleText" type="text">
          </div>
          <div class="field">
            <label>What to do</label>
            <textarea class="todo-text " v-model="taskText" type="text"></textarea>
          </div>
          <div class="">
            <button class="uk-button uk-button-default button-menu" v-on:click="sendForm()">
              Create
            </button>
            <button class="uk-button uk-button-default button-menu second-button" v-on:click="closeForm" @close="showModal = false">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      titleText: "",
      taskText: "",
      isCreating: false,
    };
  },
  methods: {
    openForm() {
      this.isCreating = true;
    },
    closeForm() {
      this.isCreating = false;
    },
    sendForm() {
      if (this.titleText.length > 0 && this.taskText.length > 0) {
        const title = this.titleText;
        const task = this.taskText;
        this.$emit("create-todo", {
          title,
          task
        });
        this.titleText = "";
        this.taskText = "";
        this.isCreating = false;
      }
    }, 
  },
};
</script>

<style>
button.uk-icon {
  transform: scale(1.5);
}
.create-todo {
  margin-bottom: 10px;
}
.create-form {
  position: middle;
  width: 23%;
  border: 1px solid black;
}
.modal-mask {
  position: fixed;
  z-index: 9998;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}
.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}
.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}
.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}
.modal-body {
  margin: 20px 0;
}
.modal-default-button {
  float: right;
}
.button-menu {
  margin-top: 10px;
}
.second-button {
  margin-left: 10px;
}
input[type="text"] {
  font-size: 16px;
  width: 100%;
  outline: none;
  min-height: 22px;
}
input[type="text"]:focus {
  border: 1px solid #555;
}
label {
  font-size: 18px;
}
.todo-text {
  width: 95%;
  min-height: 40px;
  max-height: 120px;
  resize: none;
}
.new-todo-button {
  margin-top: 10px;
}
</style>

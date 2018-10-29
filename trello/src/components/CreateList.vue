<template>
  <div class="create-list">
    <button uk-icon="plus-circle" 
    v-on:click="openListForm" 
    @click="showListModal = true" 
    v-show="!isListCreating" 
    class="new-list-button"
    title="Create new list">
    </button>
    <div class="create-form uk-position-center modal-mask" v-show="isListCreating">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="field">
            <label>Title</label>
            <input uk-input v-model="title" type="text">
          </div>
          <div class="">
            <button class="uk-button uk-button-default button-menu" v-on:click="sendListForm()">
              Create
            </button>
            <button class="uk-button uk-button-default button-menu second-button" v-on:click="closeListForm" @close="showModal = false">
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
      title: "",
      isListCreating: false,
    };
  },
  methods: {
    openListForm() {
      this.isListCreating = true;
    },
    closeListForm() {
      this.isListCreating = false;
    },
    sendListForm() {
      if (this.title.length > 0) {
        const title = this.title;
        this.$emit("create-list", {
          title,
        });
        this.title = "";
        this.isListCreating = false;
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

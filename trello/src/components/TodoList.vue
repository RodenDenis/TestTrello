<template>
  <div class="list-content">
    <div class=" uk-card uk-card-default" 
    v-on:dblclick="showListForm" 
    v-show="!isListEditing" 
    title="Double click for edit...">
      <div class="uk-text-lead list-text">
          {{ list.title }}
      </div>
      <div class="todo-menu">
        <span uk-icon="pencil" v-on:click="showListForm" 
        title="Edit task"></span>
        <span uk-icon="trash" v-on:click="deleteTodo(list)" 
        title="Delete task"></span>
      </div>
    </div>
    <div class="modal-mask-item" v-show="isListEditing">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="field">
            <label>Title</label>
            <input type="text" v-model="list.title" >
          </div>
          <div class="">
            <button class="uk-button uk-button-default uk-button-small middle-button" v-on:click="hideListForm">
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
  props: ["list"],
  data() {
    return {
      isListEditing: false
    };
  },
  methods: {
    deleteList(list) {
      this.$emit("delete-list", list);
    },
    showListForm() {
      this.isListEditing = true;
    },
    hideListForm() {
      this.isListEditing = false;
    }
  }
};
</script>

<style>
.list-content {
  width: 23%;
  margin-left: 2px;
  margin-top: 5px;
}
.list-item {
  border: 1px solid grey;
  border-radius: 15px 15px;
  min-height: 100px;
}
.list-text {
  width: 95%;
  min-height: 40px;
}
.title-text {
  font-size: 20px;
  text-align: left;
  margin-left: 5px;
}
.list-menu {
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

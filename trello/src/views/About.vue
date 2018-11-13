<template>
  <div class="content">

    <input class="text-input uk-position-top-center header-input" type="text" placeholder="Create list" @keyup.enter="addList($event)">

    <div class="list" v-for="(list, index) in lists" :key="index">
      <div class="list-header">
        <div class="header-title">{{list.header}}</div>

        <draggable v-for="(card, index) in cards" :key="index" @start="drag=true" @end="drag=false" :options="{group:'cards'}">
            <div
                v-if="card.listNum == list.id"
                class="card uk-card uk-card-default"
            > 
                <div class="card-title" >
                  {{card.task}}
                </div>
            </div>
        </draggable >
        <input class="text-input" type="text" @keyup.enter="addCard(list.id, $event)">
      </div>
    </div>
  </div>
</template>
<script>
import {mapState, mapMutations, mapActions} from "vuex";
import draggable from 'vuedraggable'
export default {
  components: {
            draggable,
  },
  computed: {
    ...mapState([
      "lists",
      "cards"
    ])
  },
  methods: {
    ...mapMutations([
      "ADD_LIST",
      "ADD_CARD"
    ]),
    ...mapActions([
      'addList',
      'addTask',
    ]),
    addList(e) {
      let uniqid = require('uniqid');
      let list = {header: e.target.value, id: uniqid()};
      this.ADD_LIST(list);
      e.target.value = '';
    },
    addCard(listId, e) {
      let uniqid = require('uniqid');
      let card = { listNum: listId, task: e.target.value, id: uniqid()};
      this.ADD_CARD(card);
      e.target.value = '';
    },
  },
}
</script>
<style>
html, body {
  background-color: gray;
}
.list {
  width: 18%;
  min-height: 70px;
  background-color: lightgray;
  display: flex;
  flex-direction: column;
  float: left;
  margin-left: 10px;
  margin-bottom: 10px;
  border-radius: 10px;
}
.list-create-form {
  margin-bottom: 10px;
}
.header-title {
  width: 75%;
  display:inline-block;
  margin-bottom: 2px;
}
.header-input {
  margin-top: 60px;
}
.header-menu {
  width: 20%;
  display:inline-block;
}
.card {
  display: flex;
  flex-direction: column;
  width: 96%;
  min-height: 60px;
  text-align: left;
  margin-bottom: 5px;
  margin-left: 5px;
  border-radius: 10px;
}
.card-title {
  padding-left: 5px;
}
.card-task {
  padding-left: 10px;
}
.card-create-form {
  margin-bottom: 5px;
}
.text-input {
  border-radius: 5px;
  outline: 0;
}
</style>
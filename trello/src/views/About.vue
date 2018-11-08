<template>
  <div class="content">

    <form @submit.prevent="addList" class="list-create-form">
      <input class="text-input" type="text" placeholder="Create list" v-model="list.header" >
    </form>
    
    <div class="list" v-for="(list, index) in lists" :key="index" :listId="listId">
      <div class="list-header">
        <div class="header-title">{{list.header}}</div>

        <div class="card uk-card uk-card-default" v-for="(card, index) in cards" :key="index" :listId="listId" :cards="cardsList"> 
          <div >
            <div class="card-title" >
              {{card.task}}
            </div>
          </div>
        </div>
        <input class="text-input" type="text" @keyup.enter="addCard(list.id)" v-model="card.task">
      </div>
    </div>
  </div>
</template>
<script>
import {mapState, mapMutations, mapActions} from "vuex";
export default {

  data: function(){
    return {
      listId: 1,
      cardId: 1,
      list: {},
      card: {},
    }
  },
  
  computed: {
    ...mapState([
      "lists",
      "cards"
    ]),
    cardsList () {
      return this.getCardsFromList(this.listId)
    }
  },
  methods: {
    ...mapMutations([
      "ADD_LIST",
      "ADD_CARD"
    ]),
    ...mapActions([
      'addList',
      'addTask',
      'fetchTasks'
    ]),
    addList() {
      this.ADD_LIST(this.list);
      this.list = {header: this.listHeader, id: this.listId};
      this.header = '';
      this.listId++;
    },
    addCard(listId) {
      this.ADD_CARD(this.card);
      this.card = { listNum: this.listId, task: this.task, id: this.cardId};
      this.listNum = this.listId;
      this.task = '';
      this.cardId++;
    },
    getCardsFromList: (state) => (listId) => {
    return Object.values(state.cards)
      .filter(card => card.listNum === listId)
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
  display: block;
  float: left;
  margin-left: 10px;
  margin-bottom: 10px;
  border-radius: 10px;
}
.list-create-form {
  margin-bottom: 10px;
}
.list-header {
  
}
.header-title {
  width: 75%;
  display:inline-block;
  margin-bottom: 2px;
}
.header-menu {
  width: 20%;
  display:inline-block;
}
.card {
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
<template>
  <div class="content">

    <form @submit.prevent="addList" class="list-create-form">
      <input class="text-input" type="text" placeholder="Create list" v-model="list['header']" >
      <button >Create</button>
    </form>

    <div class="list" v-for="(list, index) in lists" :key="index">
      <div class="list-header">
        <div class="header-title">{{list.header}}</div>

        <div class="card uk-card uk-card-default" v-for="(card, index) in cards" :key="index"> 
          <div class="card-title" >
            {{cards[index].task}}
          </div>
        </div>

        <form @submit.prevent="addCard" class="card-create-form" >
          <input class="text-input" type="text" placeholder="Create card" v-model="card.task">
          <button >Create</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import {mapState, mapMutations, mapActions} from "vuex";
export default {
  data: function(){
    return {
      list: {},
      card: {},
    }
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
    ]),
    addList: function() {
      this.ADD_LIST(this.list)
      this.list = {header:"", cards:[{task:""}]}
    },
    addCard: function() {
      this.ADD_CARD(this.card)
      this.card = {task:""}
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


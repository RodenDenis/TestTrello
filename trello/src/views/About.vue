<template>
  <div class="content">

    <form @submit.prevent="addList">
      <input type="text" placeholder="Create list" v-model="newList">
    </form>

    <div class="list" v-for="(list, index) in lists" v-bind:key="index" >
      {{list}}
      <button v-on:click="removeLists(index)" uk-icon="trash"></button>
    </div>

  </div>
</template>
<script>
import {mapState, mapMutations, mapActions} from "vuex";
export default {
  data() {
    return {
      newList: "",
    }
  },
  computed: {
    ...mapState([
      "lists"
    ])
  },
  methods: {
    ...mapMutations([
      "ADD_LIST"
    ]),
    ...mapActions([
      "removeList"
    ]),
    addList: function() {
      this.ADD_LIST(this.newList)
      this.newList = ""
    },
    removeLists: function(list) {
      this.removeList(list)
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
  background-color: lightgray;
  display: block;
  float: left;
  margin-left: 10px;
}
</style>


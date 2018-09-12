<template>
    <TaskList />
</template>

<script>
import TaskList from "@/components/tasklist.vue"

export default {
  components: {
    TaskList
  },
  data() {
    return {
      tasks: [
        {title: ""}
       ]
    }
  }
}

</script>
<style>
body {
  background-color: #026aa7;
}

.tasks {
  width: 100%;
  overflow: auto;
  background-color:  rgb(0, 121, 191);
}
.tasks-list {
  max-width: 90%;
  clear: both;
}
.tasks-item {
  width: 272px;
  list-style-type: none;
  margin-bottom: 5px;
  background-color: #dfe3e6;
  min-height: 60px;
  border-radius: 10px;
  margin-right: 20px;
  display: inline-block;
}
.tasks-item-title {
  height: 24px;
  cursor: pointer;
  width: 100%;
  text-align: left;
  border: none;
  outline: none;
  font-size: 20px;
  border-radius: 10px;
}
.tasks-item-title:hover {
  border-color: rgba(0,0,0,0.15);
}
.tasks-item-add {
  box-sizing: inherit;
  float: right;
  margin-right: -1%;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  outline: none;
}

</style>

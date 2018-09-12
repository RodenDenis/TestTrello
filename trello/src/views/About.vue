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
margin-left: -40px;
}
.tasks-header {
  width: 325px;
  list-style-type: none;
  margin-bottom: 5px;
  background-color: #dfe3e6;
  min-height: 60px;
  border-radius: 10px;
  margin-right: 20px;
  display: inline-block;
}
ul.tasks-header {
  padding: 0;
}
.tasks-header-title {
  height: 24px;
  cursor: pointer;
  width: 100%;
  text-align: left;
  border: none;
  outline: none;
  font-size: 20px;
  border-radius: 10px 10px 0 0;
  background-color: #dfe3e6;
  margin-bottom: 10px;
}
.tasks-header-title:hover {
  border-color: rgba(0,0,0,0.15);
}
.tasks-header-add {
  height: 24px;
  cursor: pointer;
  width: 100%;
  text-align: left;
  border: none;
  outline: none;
  font-size: 14px;
  border-radius: 0 0 10px 10px;
  background-color: #dfe3e6;
  margin-top: 10px;
}
.tasks-item-text {
  min-height: 60px;
  width: 90%;
  background-color: white;
  margin-left: auto;
    margin-right: auto;
    border-radius: 10px;
    text-align: left;
    padding-left: 5px;
}

</style>

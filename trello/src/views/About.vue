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
.tasks-board {
margin-left: -40px;
}
.tasks-list {
  width: 272px;
  list-style-type: none;
  margin-bottom: 5px;
  background-color: #dfe3e6;
  min-height: 60px;
  border-radius: 5px;
  margin-right: 20px;
  display: block;
  position: relative;
  float: left;
}
.tasks-list-decore {
 list-style-type: none;
 padding: 0;
}

ul.tasks-list {
  padding: 0;
}
.tasks-list-title {
  height: 24px;
  cursor: pointer;
  width: 100%;
  text-align: left;
  border: none;
  outline: none;
  font-size: 20px;
  border-radius: 5px 5px 0 0;
  background-color: #dfe3e6;
}
.tasks-list-title:hover {
  border-color: rgba(0,0,0,0.15);
}
.tasks-footer-add {
  height: 24px;
  cursor: pointer;
  width: 100%;
  text-align: left;
  border: none;
  outline: none;
  font-size: 14px;
  border-radius: 0 0 5px 5px;
  background-color: #dfe3e6;
}
.tasks-footer-add:hover {
  text-decoration: underline;
  background-color: LightGray;
}
.tasks-item-text {
  min-height: 60px;
  max-height: 140px;
  width: 94%;
  background-color: white;
  margin-left: auto;
  margin-right: auto;
  border-radius: 5px;
  padding-left: 5px;
  border: none;
  resize: none;
  outline: none;
 
}
.tasks-item-text:hover {
  cursor: pointer;
}
.hide {
  display: none;
}
.tasks-new {
  margin-bottom: 10px;
}
.tasks-item-text-edit {
  background-color: transparent;
  border: none;
  cursor: pointer;
  position: absolute;
  transform: translateX(-35px);
  border-top-right-radius: 5px;
  outline: none;
}

</style>

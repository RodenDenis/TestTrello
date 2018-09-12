<template>
   <section class="tasks">
      <h2>My Trello</h2>
      
      <div class="tasks-new input-group">
        <input type="text"
               class="input-group-field"
               v-model="newTask"
               @keyup.enter="addTask"
               placeholder="New list"
        >
        <span class="input-group-button">
          <button @click="addTask" 
                  class="button">
            Add new list
          </button>
        </span>
      </div>
      
      <transition-group name="fade" tag="ul" class="tasks-list">
          <taskitem v-for="(task, index) in tasks"
                     :task="task"
                     :key="index"
          ></taskitem>
      </transition-group>
    </section>
</template>

<script>
import taskitem from "@/components/taskitem.vue"
export default {
  components: {
    taskitem,
  },
    template: '#tasklist',
  props: {
    tasks: {
      type: Array,
    default: () => []
    }
  },
  data() {
    return {
      newTask: ''
    };
  },
  methods: {
    addTask() {
      if (this.newTask) {
        this.tasks.push({
          title: this.newTask,
        });
        this.newTask = '';
      }
    },
  }
}
</script>
<style>

</style>

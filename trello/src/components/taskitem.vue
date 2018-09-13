<template id="taskheader">
<div class="tasks-list">
  <button :class="classHeader"
    @click.self="$emit('complete')">
  {{ task.title }}
  </button>

  <ul class="tasks-list-decore">
    <li class="" v-show="visible"> 
      <input rows="6" v-show="showBlock" class="tasks-item-text" placeholder="some text" >
      <button class="tasks-item-text-edit" v-on:click="editTask()">Edit</button>  
    </li>
  </ul>
      
  <button class="tasks-footer-add" 
  v-on:click="visible=!visible">
  {{visible?'+ Create new task in this list':'+ Create new task in this list'}}
  </button> 
</div>   
</template>
<script>
export default {
  template: '#taskitem',
  props: ['task'],
  computed: {
    classHeader() {
      let classes = ['tasks-list-title'];
      return classes.join(' ');
    }
  },
  
  data(){
    return{
        visible : false,
        showForm : true,
    }
  },
  methods :{
    editTask(){
        this.id++;
        this.tasks.push(
        {
        text: this.text,
        id : this.id,
        });
        this.id = '';
        this.text = '';
      },
      show(){
        this.visible = !this.visible;
      },
      showBlock(){
        this.showBlock = !this.showBlock;
      }
    },
  }
</script>

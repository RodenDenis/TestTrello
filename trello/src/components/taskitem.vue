<template id="taskheader">
    <ul class="tasks-list">
      <li>
        <button :class="classHeader"
          @click.self="$emit('complete')">
        {{ task.title }}
        </button>
      </li>
      <li class="hide" v-show="visible">
        <textarea rows="6" v-show="showBlock" class="tasks-item-text" placeholder="some text">
          
        </textarea>
        <button class="tasks-item-text-save" v-on:click="saveTask()">Save this task</button>
      </li>
      <li>
        
      </li>
      <li>
        <button class="tasks-footer-add" v-on:click="visible=!visible">{{visible?'Save this task':'+ Create new task in this list '}}
        </button>
      </li>
    </ul>
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
        id: 0,
        visible : false,
        showForm : true,
        text: ""
    }
  },
  methods :{
    saveTask : function(){
        this.id++;
        this.tasks.push(
        {
        text: this.text,
        id : this.id,
        });
        this.id = '';
        this.text = '';
      },
      show : function(){
        this.visible = !this.visible;
      },
      showBlock : function(){
        this.showBlock = !this.showBlock;
      }
    }
  }
</script>

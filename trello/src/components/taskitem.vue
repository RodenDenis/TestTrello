<template id="taskheader">
    <ul class="tasks-header">
      <li><button :class="classHeader"
          @click.self="$emit('complete')"
      >
        {{ task.title }}
      </button></li>
      <li class="tasks-item-text">text</li>
      <li><button class="tasks-header-add"> New item </button></li>
    </ul>
</template>
<script>
export default {
  template: '#taskitem',
  props: ['task'],
  computed: {
    classHeader() {
      let classes = ['tasks-header-title'];
      
      return classes.join(' ');
    }
  }
}
</script>

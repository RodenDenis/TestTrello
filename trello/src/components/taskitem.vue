<template id="taskitem">
    <li class="tasks-item">
      <button :class="className"
          @click.self="$emit('complete')"
      >
        {{ task.title }}
        <button class="tasks-item-add"> New item </button>
      </button>
      
    </li>
</template>
<script>
export default {
  template: '#taskitem',
  props: ['task'],
  computed: {
    className() {
      let classes = ['tasks-item-title'];
      return classes.join(' ');
    }
  }
}
</script>

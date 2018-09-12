<template>
<div class="board">
  <new-column />
  <column />
</div>
</template>

<script>
import Column from "@/components/Column.vue";
import NewColumn from "@/components/NewColumn.vue";
export default {
  components: {
        Column,
        NewColumn
    },
}

</script>
<style>
body {
  max-width: 1280px;
  background-color: AliceBlue ;
}
</style>

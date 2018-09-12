<template>
    <div class="column" id="1">
        <ColumnHeader></ColumnHeader>
        <ColumnCard></ColumnCard>
        <ColumnFooter></ColumnFooter>
    </div>
</template>

<script>

import ColumnHeader from "@/components/ColumnHeader.vue";
import ColumnCard from "@/components/ColumnCard.vue";
import ColumnFooter from "@/components/ColumnFooter.vue";
export default {
    name: 'Column',
    components: {
        ColumnHeader,
        ColumnCard,
        ColumnFooter,
    }
}
</script>

<style>
.column {
    width: 25%;
    background-color: Gainsboro ;
    position: relative;
    border-radius: 5px;
    box-sizing: border-box;
    max-height: 100%;
    flex-direction: column;
    white-space: normal;
    float: left;
}


</style>

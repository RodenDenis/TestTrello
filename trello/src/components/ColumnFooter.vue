<template>
    <a href="" class="column-footer">
        <span>Add new card</span>
    </a>
</template>
<script>
export default {
    name: "ColumnFooter",
}
</script>
<style>
.column-footer {
    border-radius: 0 0 3px 3px;
    display: block;
    flex: 0 0 auto;
    padding: 8px;
    position: relative;
    text-decoration: none;
    margin-top: 5px;
}
.column-footer:hover {
    background-color: rgba(9,45,66,.13);
    color: #17394d;
    text-decoration: underline;
}
</style>

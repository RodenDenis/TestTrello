<template>
<div class="column-title">
    <textarea v-model="CardTitle" 
        type="text" 
        :disabled="!isEditing"
        :class="{view: !isEditing}" 
        class="input"
        placeholder="Some text"></textarea>
    <button @click="isEditing = !isEditing" 
        class="button" 
        title="Edit title">
    {{ isEditing ? 'Save' : 'Edit' }}
    </button>
</div>
</template>
<script>
export default {
    name: "ColumnHeader",
    data() {
        return {
            isEditing: false,
            column: [
                {id: 1, title: "title"},
            ]
        }
    },
    
}
</script>
<style>
.column-title {
    position: relative;
    min-height: 20px;
    cursor: pointer; 
    margin-bottom: 5px;
}
.view {
    width: 75%;
    font-size: 16px;
    margin-left: 1%;
    margin-top: 5px;
    border-color: transparent;
    background-color: initial;
    color: inherit;
}
.button {
    font-size: 16px;
    width: 20%;
    text-transform: uppercase;
    outline:none;
    display: inline-block;
    vertical-align: middle;
    margin-top: -18px;
}
.button:hover {
    cursor: pointer; 
}
.input {
    width: 75%;
    font-size: 16px;
    margin-left: 1%;
    margin-top: 5px;
    outline:none;
    resize: none;
    height: 20px;
    display: inline-block;
}
</style>

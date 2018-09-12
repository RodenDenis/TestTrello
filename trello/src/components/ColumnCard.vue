<template>
    <div class="cards">
        <span type="text" 
        class="card"
        placeholder="Some text"
        v-for="(item, index) in card" :key="index">{{item.text}}</span>  
    </div>
</template>

<script>
export default {
    name: "ColumnCard",
    data() {
        return {
            card: [
                {id: 1, text: "fsdf"},                
            ]
        }
    }
}
</script>
<style>
.column-card {
    width: 100%;
    z-index: 1;
    min-height: 10px; 
}
.card {
    max-width: 300px;
    width: 95%;
    min-height: 60px;
    margin: auto;
    background-color: white;
    border-radius: 3px;
    cursor: pointer;
    display: block;
    position: relative;
    text-decoration: none;
    z-index: 0;
    resize: none;
}
.card:hover {
    background-color: GhostWhite;
}
</style>

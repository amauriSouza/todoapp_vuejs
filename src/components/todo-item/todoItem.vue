<template>
    <div class="row-line">
       <span class="item">{{ todo.text }}</span><button class="button-remove" v-on:click="removeTodo">X</button> 
    </div>
</template>

<script src="./todoItem.js"></script>
<style src="./todoItem.css"></style>



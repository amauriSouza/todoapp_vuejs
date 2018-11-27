<template>
  <div id="app">
    <h1 class="title">My Tasks</h1>
    <todo-input v-on:todo:add="addTodo"></todo-input>
    <todo-item v-for="todo in todos" v-bind:todo="todo" v-on:todo:remove="removeTodo" :key="todo.id"></todo-item>
  </div>
</template>

<script src="./app.js"></script>
<style src="./app.css"></style>

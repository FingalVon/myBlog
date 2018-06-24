<template>
  <div id="editor">

    <mavon-editor style="height: 80%" :ishljs="true"></mavon-editor>
  </div>
</template>

<script>
  import {mavonEditor} from 'mavon-editor';
  import 'mavon-editor/dist/css/index.css';

  export default {
    name: "index.vue",
    components: {mavonEditor},

  }
</script>

<style scoped>
  #editor {
    margin: auto;
    width: 80%;
    height: 580px;
  }
</style>
<template>
  <div id="editor">
    <mavon-editor style="height: 80%" v-on:save="save" :ishljs="true"/>
    <el-button style="margin-top: 20px" type="primary" @click="onSubmit">发布</el-button>
  </div>
</template>

<script>
  import {mavonEditor} from 'mavon-editor';
  import 'mavon-editor/dist/css/index.css';

  export default {
    // name: "index.vue",
    components: {mavonEditor},
    methods: {
      onSubmit() {
        alert(1);
      },
      save(value, reder) {
        console.log(value);
        console.log(reder);
      }
    }
  }
</script>

<style scoped>
  #editor {
    margin: auto;
    width: 80%;
    height: 580px;
    text-align: left;
  }
</style>

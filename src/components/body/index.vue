<template>
    <div class="body-content" :style="{height:$store.state.bodyHeight ? $store.state.bodyHeight+'px' : $store.state.bodyHeight}">
        <body-left :style="{left:($store.state.bodyWidth - ($store.state.bodyWidth>1200?($store.state.bodyWidth > 1600 ? 1200 : 900):750)) / 2 - 150 + 'px',top:$store.state.scrollTop > 70 ? '10px' : 90 - $store.state.scrollTop + 'px'}" v-if="$store.state.bodyWidth > 900"></body-left>
        <div class="body-right" id="bodyRight" :style="{width:$store.state.bodyWidth>1200?($store.state.bodyWidth > 1600 ? '1200px' : '900px'):'750px'}">
            <slot name="bodyright"></slot>
        </div>
    </div>
</template>
<script>
import bodyLeft from "./body-left/body-left.vue";
export default {
  components: { bodyLeft },
  props: {
    "hide-left": {
      type: Boolean,
      default: false
    },
  },
  methods: {}
};
</script>
<style scoped>
.body-content {
  position: absolute;
  left: 0;
  right: 0;
  top:0;
  padding-bottom:20px !important;
  z-index: 1;
  padding: 0 10px;
  box-sizing: border-box;
  background-color: #eeeeee;
}
.body-right {
  width: 100%;
  margin:auto;
  height: auto;
  padding-top: 80px;
  box-sizing: border-box;
  background-color: #eeeeee;
}
</style>


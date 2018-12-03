<template>
  <div class="switch_button" :class="open">
    <div class="switch_circle" :class="open"></div>
    <span class="switch_text">{{text}}</span>
  </div>
</template>

<script>
  export default {
    props: {
      text: String,
      open: String
    }
  }
</script>

<style scoped>
  .switch_button {
    font-size: 12px;
    border: 1px solid #ddd;
    border-radius: 8px;
    transition: background-color 0.3s, border-color 0.3s;
    padding: 0 6px;
    width: 30px;
    height: 16px;
    line-height: 16px;
    color: #fff;
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
  }
  .switch_button.off {
    background: #fff;
  }
  .switch_button.off .switch_text {
    float: right;
    color: #ddd;
  }
  .switch_button.on {
    background: #02a774;
  }
  .switch_button > .switch_circle {
    position: absolute;
    top: -1px;
    left: -1px;
    width: 16px;
    height: 16px;
    border: 1px solid #ddd;
    border-radius: 50%;
    background: #fff;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
    transition: transform 0.3s;
  }
  .switch_button > .switch_circle.on {
    transform: translateX(27px);
  }
</style>

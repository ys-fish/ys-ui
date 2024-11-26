<template>
  <div class="codeBox">
    <div class="codeBoxHeader">
      <div>
        <slot name="header"></slot>
      </div>

      <div>
        <y-button icon="chevron-down" type="text"></y-button>
      </div>
    </div>
    <div class="codeBoxMain">
      <div class="codeBoxMainLeft">
        <slot name="left"></slot>
      </div>
      <div class="codeBoxMainRight">
        <slot name="right"></slot>
      </div>
    </div>
    <div class="codeBoxButtom">
      <div class="codeBoxButtomCode">
        <slot name="code"></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.codeBox {
  width: 100%;
  border: 1px #ccc solid;
  border-radius: 5px;
  .codeBoxHeader {
    height: 40px;
    background: #e0e0e0;
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 0px 5px;
    justify-content: space-between;
  }
  .codeBoxMain {
    height: 300px;
    display: flex;
    .codeBoxMainLeft {
      flex: 1;
      height: 300px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .codeBoxMainRight {
      width: 300px;
      height: 300px;
      border-left: 1px #ccc solid;
      display: flex;
      flex-direction: column;
      gap: 5px;
      padding: 10px;
      box-sizing: border-box;
    }
  }
  .codeBoxButtom {
    box-sizing: border-box;
    padding: 10px;
    border-top: 1px #ccc solid;
    .codeBoxButtomCode {
      border-radius: 5px;
      background: black;
      box-sizing: border-box;
      padding: 10px;
      color: white;
      font-size: 14px;
    }
  }
}
</style>

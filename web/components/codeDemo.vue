<template>
  <div class="codeBox">
    <div class="codeBoxHeader">
      <div></div>

      <div style="display: flex; align-items: center">
        <y-button icon="theme-light-dark" type="text"></y-button>

        <y-button icon="github" type="text"></y-button>
        <y-button icon="content-copy" type="text"></y-button>
        <y-button icon="chevron-down" type="text"></y-button>
      </div>
    </div>
    <div class="codeBoxButtom">
      <div class="codeBoxButtomCode">
        <slot name="code"></slot>
      </div>
    </div>
    <div class="codeBoxMain">
      <div class="codeBoxMainLeft">
        <slot name="left"></slot>
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
    box-sizing: border-box;
    padding: 40px 20px;
    display: flex;
    .codeBoxMainLeft {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 20px;
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
    border-top: 1px #ccc solid;
    .codeBoxButtomCode {
      background: black;
      box-sizing: border-box;
      padding: 10px;
      color: white;
      font-size: 14px;
    }
  }
}
</style>

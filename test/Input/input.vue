<template>
  <div>
    <div>
      <div>类型测试</div>
      <div style="margin-top: 10px; display: flex; gap: 20px">
        <div>
          <div>默认类型</div>
          <div style="margin-top: 10px">
            <y-input></y-input>
          </div>
        </div>
        <div>
          <div>文字类型</div>
          <div style="margin-top: 10px">
            <y-input type="text"></y-input>
          </div>
        </div>
        <div>
          <div>底线类型</div>
          <div style="margin-top: 10px">
            <y-input type="line"></y-input>
          </div>
        </div>
        <div>
          <div>Sols类型</div>
          <div style="margin-top: 10px">
            <y-input type="solo"></y-input>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="" style="margin-top: 20px;">颜色测试</div>
      <div style="margin-top: 10px;">
        <y-input color="#00B0FF"></y-input>
      </div>
    </div>
  </div>
</template>

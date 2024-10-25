<template>
  <div>
    <div>类型测试</div>
  </div>
  <div style="margin-top: 20px; display: flex; gap: 20px">
    <div>
      <div style="margin-bottom: 10px">默认类型</div>
      <y-button type="default">默认类型</y-button>
    </div>
    <div>
      <div style="margin-bottom: 10px">边框类型</div>
      <y-button type="outlined">边框类型</y-button>
    </div>
    <div>
      <div style="margin-bottom: 10px">文字类型</div>
      <y-button type="text">文字类型</y-button>
    </div>
  </div>

  <div style="margin-top: 20px">
    <div>
      <div>颜色测试</div>
    </div>
    <div style="margin-top: 20px; display: flex; gap: 20px">
      <div>
        <div style="margin-bottom: 10px">颜色类型</div>
        <y-button type="default" color="#CFD8DC">默认类型</y-button>
      </div>
      <div>
        <div style="margin-bottom: 10px">颜色翻转</div>
        <y-button type="default" color="#0288D1">边框类型</y-button>
      </div>
      <div>
        <div style="margin-bottom: 10px">颜色翻转</div>
        <y-button type="default" color="#7CB342">边框类型</y-button>
      </div>
      <div>
        <div style="margin-bottom: 10px">颜色翻转</div>
        <y-button type="default" color="#F9A825">边框类型</y-button>
      </div>
      <div>
        <div style="margin-bottom: 10px">颜色翻转</div>
        <y-button type="default" color="#263238">边框类型</y-button>
      </div>
      <div>
        <div style="margin-bottom: 10px">颜色翻转</div>
        <y-button type="default" color="#0288D1">边框类型</y-button>
      </div>
    </div>
  </div>

  <div style="margin-top: 20px">
    <div>
      <div>禁用测试</div>
    </div>
    <div style="margin-top: 20px; display: flex; gap: 20px">
      <div>
        <div style="margin-bottom: 10px">禁用类型</div>
        <y-button type="default" color="#CFD8DC" disabled>禁用类型</y-button>
      </div>
      <div>
        <div style="margin-bottom: 10px">禁用类型</div>
        <y-button type="default" color="#0288D1" disabled>禁用类型</y-button>
      </div>
    </div>
  </div>

  <div style="margin-top: 20px">
    <div>
      <div>大小测试</div>
    </div>
    <div style="margin-top: 20px; display: flex; gap: 20px">
      <div>
        <div style="margin-bottom: 10px">最小</div>
        <y-button type="default" size="x-small">最小按钮</y-button>
      </div>
      <div>
        <div style="margin-bottom: 10px">小</div>
        <y-button type="default" size="small">小按钮</y-button>
      </div>
      <div>
        <div style="margin-bottom: 10px">默认</div>
        <y-button type="default">默认按钮</y-button>
      </div>
      <div>
        <div style="margin-bottom: 10px">大</div>
        <y-button type="default" size="large">大按钮</y-button>
      </div>
      <div>
        <div style="margin-bottom: 10px">最大</div>
        <y-button type="default" size="x-large">最大按钮</y-button>
      </div>
    </div>
  </div>

  <div style="margin-top: 20px">
    <div>
      <div>圆角测试</div>
    </div>
    <div style="margin-top: 20px; display: flex; gap: 20px">
      <div>
        <div style="margin-bottom: 10px">圆角</div>
        <y-button type="default" rounded>圆角按钮</y-button>
      </div>
    </div>
  </div>

  <div style="margin-top: 20px">
    <div>
      <div>块级测试</div>
    </div>
    <div style="margin-top: 20px; display: flex; gap: 20px">
      <div style="width: 400px">
        <div style="margin-bottom: 10px">块级测试</div>
        <y-button type="default" block>块级按钮</y-button>
      </div>
    </div>
  </div>

  <div style="margin-top: 20px">
    <div>
      <div>loading测试</div>
    </div>
    <div style="margin-top: 20px; display: flex; gap: 20px">
      <div>
        <div style="margin-bottom: 10px">loading测试</div>
        <y-button type="default" loading>loading按钮</y-button>
      </div>
    </div>
  </div>
</template>

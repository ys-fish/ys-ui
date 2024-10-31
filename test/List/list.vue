<template>
  <div style="">
    <!-- <div style="margin-top: 20px">
      <div style="margin-bottom: 20px">默认列表</div>
      <y-list>
        <y-list-item
          >1231
          <template #append>
            <y-icon icon="home"></y-icon>
          </template>
        </y-list-item>
        <y-list-item>1231</y-list-item>
        <y-list-item>1231</y-list-item>
      </y-list>
    </div>

    <div style="margin-top: 20px">
      <div style="margin-bottom: 20px">大，中，小 列表</div>
      <div style="display: flex; gap: 20px">
        <div style="margin-top: 10px">
          <div style="margin-bottom: 10px">大列表</div>
          <y-list size="large">
            <y-list-item
              >1231
              <template #append>
                <y-icon icon="home"></y-icon>
              </template>
            </y-list-item>
            <y-list-item>1231</y-list-item>
            <y-list-item>1231</y-list-item>
          </y-list>
        </div>
        <div style="margin-top: 10px">
          <div style="margin-bottom: 10px">中列表</div>
          <y-list>
            <y-list-item
              >1231
              <template #append>
                <y-icon icon="home"></y-icon>
              </template>
            </y-list-item>
            <y-list-item>1231</y-list-item>
            <y-list-item>1231</y-list-item>
          </y-list>
        </div>
        <div style="margin-top: 10px">
          <div style="margin-bottom: 10px">小列表</div>
          <y-list size="small">
            <y-list-item
              >1231
              <template #append>
                <y-icon icon="home"></y-icon>
              </template>
            </y-list-item>
            <y-list-item>1231</y-list-item>
            <y-list-item>1231</y-list-item>
          </y-list>
        </div>
      </div>
    </div>

    <div style="margin-top: 20px">
      <div style="margin-bottom: 10px">Nav 列表</div>
      <y-list nav size="small">
        <y-list-item
          >1231
          <template #append>
            <y-icon icon="home"></y-icon>
          </template>
        </y-list-item>
        <y-list-item>1231</y-list-item>
        <y-list-item>1231</y-list-item>
      </y-list>
    </div> -->

    <div style="margin-top: 20px">
      <div style="margin-bottom: 10px">下拉列表</div>
      <y-list nav size="small">
        <y-list-group>
          <template #activator="{ props }">
            <y-list-item v-bind="props">万物管理</y-list-item>
          </template>
          <y-list-item>管理1</y-list-item>
          <y-list-item>管理2</y-list-item
          ><y-list-group>
            <template #activator="{ props }">
              <y-list-item v-bind="props">万物管理</y-list-item>
            </template>
            <y-list-item>管理1</y-list-item>
            <y-list-item>管理2</y-list-item>
          </y-list-group>
        </y-list-group>
        <y-list-item
          >1231
          <template #append>
            <y-icon icon="home"></y-icon>
          </template>
        </y-list-item>
        <y-list-item>1231</y-list-item>
        <y-list-item>1231</y-list-item>
      </y-list>
    </div>
  </div>
</template>

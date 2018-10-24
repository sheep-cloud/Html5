<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">

    <el-tab-pane label="Basic" name="first">
      <el-collapse @change="handleChange">
        <el-collapse-item title="1. Layout 布局">
          <div>通过基础的 24 分栏，迅速简便地创建布局。</div>
          <router-link to="/layout_01" target="_blank">基础布局</router-link>
          <br>
          <router-link to="/layout_02" target="_blank">分栏间隔</router-link>
          <br>
          <router-link to="/layout_03" target="_blank">混合布局</router-link>
          <br>
          <router-link to="/layout_04" target="_blank">分栏偏移</router-link>
        </el-collapse-item>
        <el-collapse-item title="2. Container 布局容器">
          <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
          <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
        </el-collapse-item>
        <el-collapse-item title="3. Color 色彩">
          <div>简化流程：设计简洁直观的操作流程；</div>
          <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
          <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
        </el-collapse-item>
        <el-collapse-item title="4. Typography 字体">
          <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
          <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
        </el-collapse-item>
        <el-collapse-item title="5. Icon 图标">
          <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
          <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
        </el-collapse-item>
        <el-collapse-item title="6. Button 按钮">
          <router-link to="/button_01" target="_blank">基础用法</router-link>
          <br>
          <router-link to="/button_02" target="_blank">禁用状态</router-link>
          <br>
        </el-collapse-item>
      </el-collapse>
    </el-tab-pane>

    <el-tab-pane label="Form">组件</el-tab-pane>

    <el-tab-pane label="Data">
      <el-collapse>
        <el-collapse-item title="1. Table 表格"></el-collapse-item>
        <el-collapse-item title="2. Tag 标签"></el-collapse-item>
        <el-collapse-item title="3. Progress 进度条"></el-collapse-item>
        <el-collapse-item title="4. Tree 树形控件"></el-collapse-item>
        <el-collapse-item title="5. Pagination 分页"></el-collapse-item>
        <el-collapse-item title="6. Badge 标记"></el-collapse-item>
      </el-collapse>
    </el-tab-pane>

    <el-tab-pane label="Navigation">
      <el-collapse>
        <el-collapse-item title="1. NavMenu 导航菜单"></el-collapse-item>
        <el-collapse-item title="2. Tags 标签页">
          <div>分隔内容上有关联但属于不同类别的数据集合。</div>
          <router-link to="/tabs_01" target="_blank">基础用法</router-link>
        </el-collapse-item>
        <el-collapse-item title="3. Breadcrumb 面包屑"></el-collapse-item>
        <el-collapse-item title="4. Dropdown 下拉菜单"></el-collapse-item>
        <el-collapse-item title="5. Steps 步骤条"></el-collapse-item>
      </el-collapse>
    </el-tab-pane>

    <el-tab-pane label="Others">组件</el-tab-pane>
  </el-tabs>
</template>

<script>
  export default {
    data() {
      return {
        activeName: 'first'
      }
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event)
      },
      handleChange(val) {
        console.log(val)
      }
    }
  }
</script>

<style scoped>

</style>

<template>
  <div class="block">
    <span class="demonstration">默认 click 触发子菜单</span>
    <br>
    <el-cascader :options="ops" @change="handleChange"  v-model="selectedOptions2"></el-cascader>
  </div>
</template>

<script>
  import {DATA} from './data'

  export default {
    data() {
      return {
        ops: DATA,
        selectedOptions2: [13, 115, 1050]
      }
    },
    mounted() {
      console.log(this.ops)
    },
    methods: {
      handleChange(value) {
        console.log(value)
        let provinceValue = value[0]
        let cityValue = value[1]
        let areaValue = value[2]
        let address = ''

        this.ops.forEach(item => {
          if (item.value === provinceValue) {
            address += item.label
            item.children.forEach(item => {
              if (item.value === cityValue) {
                address += item.label
              }
              if (areaValue) {
                item.children.forEach(item => {
                  if (item.value === areaValue) {
                    address += item.label
                  }
                })
              }
            })
          }
        })
        console.log(address)
      }
    }
  }
</script>

<style scoped>

</style>

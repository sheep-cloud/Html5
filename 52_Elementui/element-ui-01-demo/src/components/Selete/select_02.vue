<template>
  <el-select v-model="value7" placeholder="请选择">
    <el-option-group v-for="group in option4" :key="group.businessId" :label="group.businessName">
      <el-option v-for="buDevice in group.buDevices" :key="buDevice.deviceId" :label="buDevice.did" :value="buDevice.deviceId"></el-option>
    </el-option-group>
  </el-select>
</template>

<script>
  export default {
    data() {
      return {
        options3: [
          {
            label: '热门城市',
            options: [{
              value: 'Shanghai',
              label: '上海'
            }, {
              value: 'Beijing',
              label: '北京'
            }]
          },
          {
            label: '城市名',
            options: [{
              value: 'Chengdu',
              label: '成都'
            }, {
              value: 'Shenzhen',
              label: '深圳'
            }, {
              value: 'Guangzhou',
              label: '广州'
            }, {
              value: 'Dalian',
              label: '大连'
            }]
          }
        ],
        option4: [],
        value7: '',
        key: 'select_01.json'
      }
    },
    mounted() {
      const url = `../../../static/json/${this.key}`
      this.$http.get(url).then(response => {
        let result = response.body
        this.option4 = result.data
      })
    }
  }
</script>

<style scoped>

</style>

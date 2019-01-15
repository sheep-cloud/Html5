<template>
  <el-tree
    :props="props1"
    :load="loadNode1"
    lazy
    show-checkbox>
  </el-tree>
</template>

<script>
  export default {
    data() {
      return {
        props1: {
          label: 'name',
          children: 'zones',
          isLeaf: 'leaf'
        }
      }
    },
    methods: {
      loadNode1(node, resolve) {
        if (node.level === 0) {
          return resolve([{name: 'region'}])
        }
        if (node.level > 1) return resolve([])

        setTimeout(() => {
          const data = [{
            name: 'leaf',
            leaf: true
          }, {
            name: 'zone'
          }]

          resolve(data)
        }, 500)
      }
    }
  }
</script>

<style scoped>

</style>

<template>
  <el-tree ref="tree" :data="data" :props="defaultProps" default-expand-all nodeKey="structureId" highlight-current @node-click="handleNodeClick"></el-tree>
</template>

<script>
  export default {
    data() {
      return {
        data: [
          {
            'isTerm': false,
            'name': '超超高效三相异步电动机',
            'parentId': '0',
            'structureId': '36c220e933d6421aaac1c649f1e51136',
            'termcode': '',
            'children': [
              {
                'isTerm': false,
                'name': '转子系统',
                'parentId': '36c220e933d6421aaac1c649f1e51136',
                'structureId': '0223461ce9a04e5a9cfcebbc82abce78',
                'termcode': '',
                'children': [
                  {
                    'isTerm': false,
                    'name': '转轴',
                    'parentId': '0223461ce9a04e5a9cfcebbc82abce78',
                    'structureId': 'b287954ddcaf48f1babe70936a7c32bc',
                    'termcode': '',
                    'children': []
                  },
                  {
                    'isTerm': true,
                    'name': '性能检测',
                    'parentId': '0223461ce9a04e5a9cfcebbc82abce78',
                    'structureId': 'dcde3535aa7741a29b5f6cd30b936e17',
                    'termcode': '00016',
                    'children': []
                  }
                ]
              },
              {
                'isTerm': false,
                'name': '电机',
                'parentId': '36c220e933d6421aaac1c649f1e51136',
                'structureId': '37799f469bde4625bffd5018a96e8ded',
                'termcode': '',
                'children': [
                  {
                    'isTerm': true,
                    'name': '性能检测',
                    'parentId': '37799f469bde4625bffd5018a96e8ded',
                    'structureId': '2b9f33504a534740b765fead3f4ef25f',
                    'termcode': '00015',
                    'children': []
                  },
                  {
                    'isTerm': true,
                    'name': 'U相电压有效值',
                    'parentId': '37799f469bde4625bffd5018a96e8ded',
                    'structureId': 'b185f03a939c11e89b252c4d544ed7d7',
                    'termcode': 'voltageU',
                    'children': []
                  },
                  {
                    'isTerm': true,
                    'name': 'V相电压有效值',
                    'parentId': '37799f469bde4625bffd5018a96e8ded',
                    'structureId': 'b185f68f939c11e89b252c4d544ed7d7',
                    'termcode': 'voltageV',
                    'children': []
                  },
                  {
                    'isTerm': true,
                    'name': 'W相电压有效值',
                    'parentId': '37799f469bde4625bffd5018a96e8ded',
                    'structureId': 'b185f8d3939c11e89b252c4d544ed7d7',
                    'termcode': 'voltageW',
                    'children': []
                  }
                ]
              },
              {
                'isTerm': false,
                'name': '散热系统',
                'parentId': '36c220e933d6421aaac1c649f1e51136',
                'structureId': 'd949fd86c13a4815bf4e5f8da7434cb4',
                'termcode': '',
                'children': [
                  {
                    'isTerm': false,
                    'name': '风扇',
                    'parentId': 'd949fd86c13a4815bf4e5f8da7434cb4',
                    'structureId': 'f447773bd66e40659494f9c9f30de623',
                    'termcode': '',
                    'children': []
                  },
                  {
                    'isTerm': true,
                    'name': '性能检测',
                    'parentId': 'd949fd86c13a4815bf4e5f8da7434cb4',
                    'structureId': 'bab4ac6ab2954cf9b97e26db32aba262',
                    'termcode': '00018',
                    'children': []
                  }
                ]
              }
            ]
          }
        ],
        defaultProps: {
          label: 'name',
          children: 'children'
        }
      }
    },
    methods: {
      handleNodeClick(data, node, a) {
        console.log(data, node, a)
      }
    }
  }
</script>

<style scoped>

</style>

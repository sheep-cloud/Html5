<template>
  <div>
    <el-row :gutter="24">
      <el-col :span="6">
        <el-tree :data="data"
                 ref="tree"
                 :highlight-current="true"
                 :props="defaultProps"
                 :default-expand-all="true"
                 @node-click="handleNodeClick"
                 :expand-on-click-node="false"
                 node-key="structureId"
                 style="overflow: scroll">
        </el-tree>
      </el-col>
      <el-col :span="18"></el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        data: [{
          label: '一级 1',
          children: [{
            label: '二级 1-1',
            children: [{
              label: '三级 1-1-1'
            }]
          }]
        }, {
          label: '一级 2',
          children: [{
            label: '二级 2-1',
            children: [{
              label: '三级 2-1-1'
            }]
          }, {
            label: '二级 2-2',
            children: [{
              label: '三级 2-2-1'
            }]
          }]
        }, {
          label: '一级 3',
          children: [{
            label: '二级 3-1',
            children: [{
              label: '三级 3-1-1'
            }]
          }, {
            label: '二级 3-2',
            children: [{
              label: '三级 3-2-1'
            }]
          }]
        }],
        defaultProps: {
          children: 'structureList',
          label: 'name',
          menuId: 'structureId'
        }
      }
    },
    mounted() {
      this.data = [{
        'attribute': '',
        'comments': '',
        'createId': '',
        'createTime': null,
        'deviceId': '3700eaa440fb46f2ac051edfd105e1bd',
        'ifId': '',
        'ifParentId': '',
        'level': null,
        'levelName': '',
        'model': '',
        'name': '',
        'parentId': '0',
        'parentName': '',
        'status': '',
        'structureId': '',
        'structureList': [
          {
            'attribute': '',
            'comments': '',
            'createId': '',
            'createTime': null,
            'deviceId': '',
            'ifId': '',
            'ifParentId': '',
            'level': null,
            'levelName': '',
            'model': '',
            'name': '超超高效三相异步电动机',
            'parentId': '0',
            'parentName': '',
            'status': '',
            'structureId': '36c220e933d6421aaac1c649f1e51136',
            'structureList': [
              {
                'attribute': '',
                'comments': '',
                'createId': '',
                'createTime': null,
                'deviceId': '',
                'ifId': '',
                'ifParentId': '',
                'level': null,
                'levelName': '',
                'model': '',
                'name': '转子系统',
                'parentId': '0',
                'parentName': '',
                'status': '',
                'structureId': '0223461ce9a04e5a9cfcebbc82abce78',
                'structureList': [
                  {
                    'attribute': '',
                    'comments': '',
                    'createId': '',
                    'createTime': null,
                    'deviceId': '',
                    'ifId': '',
                    'ifParentId': '',
                    'level': null,
                    'levelName': '',
                    'model': '',
                    'name': '转轴',
                    'parentId': '0',
                    'parentName': '',
                    'status': '',
                    'structureId': 'b287954ddcaf48f1babe70936a7c32bc',
                    'structureList': [],
                    'updateId': '',
                    'updateTime': null
                  }
                ],
                'updateId': '',
                'updateTime': null
              },
              {
                'attribute': '',
                'comments': '',
                'createId': '',
                'createTime': null,
                'deviceId': '',
                'ifId': '',
                'ifParentId': '',
                'level': null,
                'levelName': '',
                'model': '',
                'name': '电机',
                'parentId': '0',
                'parentName': '',
                'status': '',
                'structureId': '37799f469bde4625bffd5018a96e8ded',
                'structureList': [],
                'updateId': '',
                'updateTime': null
              },
              {
                'attribute': '',
                'comments': '',
                'createId': '',
                'createTime': null,
                'deviceId': '',
                'ifId': '',
                'ifParentId': '',
                'level': null,
                'levelName': '',
                'model': '',
                'name': '散热系统',
                'parentId': '0',
                'parentName': '',
                'status': '',
                'structureId': 'd949fd86c13a4815bf4e5f8da7434cb4',
                'structureList': [
                  {
                    'attribute': '',
                    'comments': '',
                    'createId': '',
                    'createTime': null,
                    'deviceId': '',
                    'ifId': '',
                    'ifParentId': '',
                    'level': null,
                    'levelName': '',
                    'model': '',
                    'name': '风扇',
                    'parentId': '0',
                    'parentName': '',
                    'status': '',
                    'structureId': 'f447773bd66e40659494f9c9f30de623',
                    'structureList': [],
                    'updateId': '',
                    'updateTime': null
                  }
                ],
                'updateId': '',
                'updateTime': null
              }
            ],
            'updateId': '',
            'updateTime': null
          }
        ],
        'updateId': '',
        'updateTime': null
      }]
    },
    methods: {
      handleNodeClick(data) {
        console.log(data)
      }
    }
  }
</script>

<style scoped>

</style>

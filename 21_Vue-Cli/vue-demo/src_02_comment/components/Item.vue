<template>
  <li class="list-group-item">
    <div class="row">
      <p class="col-md-10 col-xs-8 lead"><i class="glyphicon glyphicon-info-sign"></i> {{comment.username}}说：</p>
      <button class="col-md-1 col-xs-2 btn btn-sm btn-danger" @click="deleteItem">删除</button>
    </div>
    <div class="row">
      <p class="col-md-9 col-xs-6 text-info">{{comment.content}}</p>
      <p class="col-md-3 col-xs-6 small text-muted text-right">{{comment.createTime | date-format}}</p>
    </div>
  </li>
</template>

<script>
  export default {
    /**
     * 指定属性名, 值的类型
     */
    props: {
      comment: Object,
      deleteComment: Function,
      index: Number
    },
    methods: {
      deleteItem() {
        // 解构赋值
        const {layer, comment, deleteComment, index} = this
        this.layerId = layer.confirm(`确定删除${comment.username}的评论吗？`, () => {
          // 关闭提示框
          layer.close(this.layerId)
          deleteComment(index)
        })
      }
    }
  }
</script>

<style scoped>
  li {
    transition: .5s;
    overflow: hidden;
  }
</style>

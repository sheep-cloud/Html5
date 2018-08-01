<template>
  <li class="list-group-item">
    <div class="pull-right">
      <button class="btn btn-sm btn-danger" @click="deleteItem">删除</button>

    </div>
    <p class="user"><span>{{comment.username}}</span><span> 说：</span></p>
    <p class="pull-right small">{{comment.createTime}}</p>
    <p class="centence">{{comment.content}}</p>

  </li>
</template>

<script>
  export default {
    props: {
      // 指定属性名和属性值的类型
      comment: Object,
      deleteComment: Function,
      index: Number
    },
    methods: {
      deleteItem() {
        let self = this
        // 解构赋值
        let {layer, comment, deleteComment, index} = self
        layer.confirm(`确定删除${comment.username}的评论吗？`, function () {
          // 关闭提示框
          layer.close(this.id)
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
  .list-group-item .centence {
    padding: 0 50px;
  }
  .user {
    font-size: 22px;
  }
</style>

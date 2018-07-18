<template>
  <el-upload class="upload-demo" ref="upload"
             action=""
             :on-remove="handleRemove"
             :file-list="fileList"
             :auto-upload="false" multiple :limit="1" :http-request="uploadImage">
    <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
    <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload('upload')">上传到服务器</el-button>
    <img :src="img" alt="">
  </el-upload>
</template>

<script>
  export default {
    data() {
      return {
        fileList: [],
        img: '',
        params: {
          username: 'admin',
          password: '123456'
        },
        file: null
      }
    },
    methods: {
      submitUpload(a) {
        this.$refs[a].submit()
      },
      handleRemove(file, fileList) {
        console.log(file, fileList)
      },
      handlePreview(file) {
        console.log(file)
      },
      uploadImage(content) {
        let formData = new FormData
        // 枚举对象属性，添加到表单
        for (let param in this.params) {
          formData.append(param, this.params[param])
          // formData.set(param, this.params[param])
        }
        // 添加文件（上传文件的字段名 image-1）
        formData.append('image-1', content.file)
        // formData.set('image-1', content.file)
        console.log(formData)
        formData.forEach(function (value, index) {
          console.log(index + ": " + value)
        })
        const url = 'http://127.0.0.1:9999/uploadImage'
        this.$http.post(url, formData).then(response => {
          let result = response.body
          this.img = result.data
        }, response => console.log(response))
      }
    }
  }
</script>

<style scoped>

</style>

<template>
  <div>
    <p>ID: {{$router.params.id}}</p>
    <ul>
      <li>id: {{messageDetail.id}}</li>
      <li>title: {{messageDetail.title}}</li>
      <li>content: {{messageDetail.content}}</li>
    </ul>
  </div>
</template>

<script>
  const allMessageDetails = [
    {id: 1, title: 'message001', content: 'message001 content....'},
    {id: 2, title: 'message002', content: 'message001 content....'},
    {id: 3, title: 'message003', content: 'message001 content....'},
    {id: 4, title: 'message004', content: 'message001 content....'}
  ]

  export default {
    data() {
      return {
        messageDetail: {
          id: '',
          title: '',
          content: ''
        }
      }
    },
    mounted() {
      setTimeout(() => {
        const allMessageDetails = [
          {id: 1, title: 'message001', content: 'message001 content....'},
          {id: 2, title: 'message002', content: 'message001 content....'},
          {id: 3, title: 'message003', content: 'message001 content....'},
          {id: 4, title: 'message004', content: 'message001 content....'}
        ]

        this.allMessageDetails = allMessageDetails
        this.messageDetail = allMessageDetails.find(detail => true)
      })
    }
  }
</script>

<style scoped>

</style>

<template>
  <div id="container" style="width: 600px;height: 800px;"></div>
</template>

<script>

  export default {
    data() {
      return {
        buBusinessMapVos: [
          {
            'address': '白云',
            'businessId': '3570a98deacd4d8e87563c41ca5d9c0f',
            'businessName': '智高科技',
            'deviceCount': 0,
            'industryId': 'b307c005806a11e8bbe72c4d544ed7d7',
            'industryName': '机器人',
            'latitude': 39.923423,
            'longitude': 116.368904
          },
          {
            'address': '东圃',
            'businessId': '69e9b659bacb4a638342b5e92884e530',
            'businessName': '智云科技',
            'deviceCount': 0,
            'industryId': 'b307b70b806a11e8bbe72c4d544ed7d7',
            'industryName': '电机',
            'latitude': 39.921176,
            'longitude': 116.382122
          },
          {
            'address': '天河科韵路',
            'businessId': '89d0f40cb2f7438a916a5505886d7691',
            'businessName': '天箭科技',
            'deviceCount': 0,
            'industryId': 'b307c005806a11e8bbe72c4d544ed7d7',
            'industryName': '机器人',
            'latitude': 39.922501,
            'longitude': 116.387271
          },
          {
            'address': '天河区',
            'businessId': 'df2aa21d806b11e8bbe72c4d544ed7d7',
            'businessName': '箭头科技',
            'deviceCount': 9,
            'industryId': 'b307b70b806a11e8bbe72c4d544ed7d7',
            'industryName': '电机',
            'latitude': 39.9146,
            'longitude': 116.398258
          }
        ]
      }
    },
    mounted() {
      this.loadmap(this)     //加载地图和相关组件
    },
    methods: {
      loadmap(self) {
        let map = new AMap.Map('container', {
          resizeEnable: false
        })

        // 经纬度
        // let lnglats = [
        //     [116.368904, 39.923423],
        //     [116.382122, 39.921176],
        //     [116.387271, 39.922501],
        //     [116.398258, 39.914600]
        // ]

        let buBusinessMapVos =
          [
            {
              'address': '白云',
              'businessId': '3570a98deacd4d8e87563c41ca5d9c0f',
              'businessName': '智高科技',
              'deviceCount': 0,
              'industryId': 'b307c005806a11e8bbe72c4d544ed7d7',
              'industryName': '机器人',
              'latitude': 39.923423,
              'longitude': 116.368904
            },
            {
              'address': '东圃',
              'businessId': '69e9b659bacb4a638342b5e92884e530',
              'businessName': '智云科技',
              'deviceCount': 0,
              'industryId': 'b307b70b806a11e8bbe72c4d544ed7d7',
              'industryName': '电机',
              'latitude': 39.921176,
              'longitude': 116.382122
            },
            {
              'address': '天河科韵路',
              'businessId': '89d0f40cb2f7438a916a5505886d7691',
              'businessName': '天箭科技',
              'deviceCount': 0,
              'industryId': 'b307c005806a11e8bbe72c4d544ed7d7',
              'industryName': '机器人',
              'latitude': 39.922501,
              'longitude': 116.387271
            },
            {
              'address': '天河区',
              'businessId': 'df2aa21d806b11e8bbe72c4d544ed7d7',
              'businessName': '箭头科技',
              'deviceCount': 9,
              'industryId': 'b307b70b806a11e8bbe72c4d544ed7d7',
              'industryName': '电机',
              'latitude': 39.9146,
              'longitude': 116.398258
            }
          ]

        // 窗体偏移量
        let infoWindow = new AMap.InfoWindow({offset: new AMap.Pixel(0, -30)})
        for (let i = 0; i < buBusinessMapVos.length; i++) {
          let buBusinessMapVo = buBusinessMapVos[i]
          let pos = [buBusinessMapVo.longitude, buBusinessMapVo.latitude]
          console.log(pos)
          let marker = new AMap.Marker({
            position: pos,
            map: map
          })

          // 构造信息窗体
          let content = [
            '企业名称：' + buBusinessMapVo.businessName,
            '地址信息：' + buBusinessMapVo.address,
            '所属行业：' + buBusinessMapVo.industryName,
            '设备总数：' + buBusinessMapVo.deviceCount
          ]

          marker.content = content.join('<br/>')
          marker.on('click', markerClick)
          marker.emit('click', {target: marker})
        }

        function markerClick(e) {
          infoWindow.setContent(e.target.content)
          infoWindow.open(map, e.target.getPosition())
        }

        map.setFitView()
      }
    }
  }
</script>

<style scoped>

</style>

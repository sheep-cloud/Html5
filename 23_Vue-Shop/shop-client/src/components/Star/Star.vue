<template>
  <div class="star" :class="'star-' + size">
    <span class="star-item" v-for="(sc, index) in starClasses" :key="index" :class="sc"></span>
  </div>
</template>

<script>
  const CLASS_ON = 'on'       // 黄星
  const CLASS_HALF = 'half'   // 半星
  const CLASS_OFF = 'off'     // 灰星

  export default {
    props: {
      score: Number,
      size: Number
    },
    computed: {
      /**
       * 评分算法:
       *  3.2：3 + 0 + 2
       *  3.5: 3 + 1 + 1
       * @return {Array}
       */
      starClasses() {
        const {score} = this
        let scs = []
        // 向scs中添加n个CLASS_ON
        const scoreInteger = Math.floor(score) // 向下取整
        while (scs.length < scoreInteger) {
          scs.push(CLASS_ON)
        }

        // 向scs中添加0/1个CLASS_HALF
        if (score * 10 - scoreInteger * 10 >= 5) {
          scs.push(CLASS_HALF)
        }

        // 向scs中添加n个CLASS_OFF
        while (scs.length < 5) {
          scs.push(CLASS_OFF)
        }

        return scs
      }
    }
  }
</script>

<style scoped>
  .star {
    float: left;
    font-size: 0;
  }
  .star .star-item {
    display: inline-block;
    background-repeat: no-repeat;
  }
  .star.star-48 .star-item {
    width: 20px;
    height: 20px;
    margin-right: 22px;
    background-size: 20px 20px;
  }
  .star.star-48 .star-item:last-child {
    margin-right: 0;
  }
  .star.star-48 .star-item.on {
    background-image: url("./images/stars/star48_on@2x.png");
  }
  @media (-webkit-min-device-pixel-ratio: 3), (min-device-pixel-ratio: 3) {
    .star.star-48 .star-item.on {
      background-image: url("./images/stars/star48_on@3x.png");
    }
  }
  .star.star-48 .star-item.half {
    background-image: url("./images/stars/star48_half@2x.png");
  }
  @media (-webkit-min-device-pixel-ratio: 3), (min-device-pixel-ratio: 3) {
    .star.star-48 .star-item.half {
      background-image: url("./images/stars/star48_half@3x.png");
    }
  }
  .star.star-48 .star-item.off {
    background-image: url("./images/stars/star48_off@2x.png");
  }
  @media (-webkit-min-device-pixel-ratio: 3), (min-device-pixel-ratio: 3) {
    .star.star-48 .star-item.off {
      background-image: url("./images/stars/star48_off@3x.png");
    }
  }
  .star.star-36 .star-item {
    width: 15px;
    height: 15px;
    margin-right: 6px;
    background-size: 15px 15px;
  }
  .star.star-36 .star-item:last-child {
    margin-right: 0;
  }
  .star.star-36 .star-item.on {
    background-image: url("./images/stars/star36_on@2x.png");
  }
  @media (-webkit-min-device-pixel-ratio: 3), (min-device-pixel-ratio: 3) {
    .star.star-36 .star-item.on {
      background-image: url("./images/stars/star36_on@3x.png");
    }
  }
  .star.star-36 .star-item.half {
    background-image: url("./images/stars/star36_half@2x.png");
  }
  @media (-webkit-min-device-pixel-ratio: 3), (min-device-pixel-ratio: 3) {
    .star.star-36 .star-item.half {
      background-image: url("./images/stars/star36_half@3x.png");
    }
  }
  .star.star-36 .star-item.off {
    background-image: url("./images/stars/star36_off@2x.png");
  }
  @media (-webkit-min-device-pixel-ratio: 3), (min-device-pixel-ratio: 3) {
    .star.star-36 .star-item.off {
      background-image: url("./images/stars/star36_off@3x.png");
    }
  }
  .star.star-24 .star-item {
    width: 10px;
    height: 10px;
    margin-right: 3px;
    background-size: 10px 10px;
  }
  .star.star-24 .star-item:last-child {
    margin-right: 0;
  }
  .star.star-24 .star-item.on {
    background-image: url("./images/stars/star24_on@2x.png");
  }
  @media (-webkit-min-device-pixel-ratio: 3), (min-device-pixel-ratio: 3) {
    .star.star-24 .star-item.on {
      background-image: url("./images/stars/star24_on@3x.png");
    }
  }
  .star.star-24 .star-item.half {
    background-image: url("./images/stars/star24_half@2x.png");
  }
  @media (-webkit-min-device-pixel-ratio: 3), (min-device-pixel-ratio: 3) {
    .star.star-24 .star-item.half {
      background-image: url("./images/stars/star24_half@3x.png");
    }
  }
  .star.star-24 .star-item.off {
    background-image: url("./images/stars/star24_off@2x.png");
  }
  @media (-webkit-min-device-pixel-ratio: 3), (min-device-pixel-ratio: 3) {
    .star.star-24 .star-item.off {
      background-image: url("./images/stars/star24_off@3x.png");
    }
  }
</style>

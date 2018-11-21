<template>
  <ul class="shop_list">
    <li class="shop_li border-1px">
      <a>
        <div class="shop_left">
          <img class="shop_img" src="./images/shop/1.jpg">
        </div>
        <div class="shop_right">
          <section class="shop_detail_header">
            <h4 class="shop_title ellipsis">锄禾日当午，汗滴禾下土</h4>
            <ul class="shop_detail_ul">
              <li class="supports">保</li>
              <li class="supports">准</li>
              <li class="supports">票</li>
            </ul>
          </section>
          <section class="shop_rating_order">
            <section class="shop_rating_order_left">
              <div class="star star-24">
                <span class="star-item on"></span>
                <span class="star-item on"></span>
                <span class="star-item on"></span>
                <span class="star-item half"></span>
                <span class="star-item off"></span>
              </div>
              <div class="rating_section">
                3.6
              </div>
              <div class="order_section">
                月售106单
              </div>
            </section>
            <section class="shop_rating_order_right">
              <span class="delivery_style delivery_right">硅谷专送</span>
            </section>
          </section>
          <section class="shop_distance">
            <p class="shop_delivery_msg">
              <span>¥20起送</span>
              <span class="segmentation">/</span>
              <span>配送费约¥5</span>
            </p>
          </section>
        </div>
      </a>
    </li>
    <li class="shop_li border-1px">
      <a>
        <div class="shop_left">
          <img class="shop_img" src="./images/shop/2.jpg">
        </div>
        <div class="shop_right">
          <section class="shop_detail_header">
            <h4 class="shop_title ellipsis">锄禾日当午，汗滴禾下土</h4>
            <ul class="shop_detail_ul">
              <li class="supports">保</li>
              <li class="supports">准</li>
              <li class="supports">票</li>
            </ul>
          </section>
          <section class="shop_rating_order">
            <section class="shop_rating_order_left">
              <div class="star star-24">
                <span class="star-item on"></span>
                <span class="star-item on"></span>
                <span class="star-item on"></span>
                <span class="star-item on"></span>
                <span class="star-item off"></span>
              </div>
              <div class="rating_section">
                4.1
              </div>
              <div class="order_section">
                月售106单
              </div>
            </section>
            <section class="shop_rating_order_right">
              <span class="delivery_style delivery_right">硅谷专送</span>
            </section>
          </section>
          <section class="shop_distance">
            <p class="shop_delivery_msg">
              <span>¥20起送</span>
              <span class="segmentation">/</span>
              <span>配送费约¥5</span>
            </p>
          </section>
        </div>
      </a>
    </li>
    <li class="shop_li border-1px">
      <a>
        <div class="shop_left">
          <img class="shop_img" src="./images/shop/3.jpg">
        </div>
        <div class="shop_right">
          <section class="shop_detail_header">
            <h4 class="shop_title ellipsis">锄禾日当午，汗滴禾下土</h4>
            <ul class="shop_detail_ul">
              <li class="supports">保</li>
              <li class="supports">准</li>
              <li class="supports">票</li>
            </ul>
          </section>
          <section class="shop_rating_order">
            <section class="shop_rating_order_left">
              <div class="star star-24">
                <span class="star-item on"></span>
                <span class="star-item on"></span>
                <span class="star-item on"></span>
                <span class="star-item off"></span>
                <span class="star-item off"></span>
              </div>
              <div class="rating_section">
                3.2
              </div>
              <div class="order_section">
                月售106单
              </div>
            </section>
            <section class="shop_rating_order_right">
              <span class="delivery_style delivery_right">硅谷专送</span>
            </section>
          </section>
          <section class="shop_distance">
            <p class="shop_delivery_msg">
              <span>¥20起送</span>
              <span class="segmentation">/</span>
              <span>配送费约¥5</span>
            </p>
          </section>
        </div>
      </a>
    </li>
    <li class="shop_li border-1px">
      <a>
        <div class="shop_left">
          <img class="shop_img" src="./images/shop/4.jpg">
        </div>
        <div class="shop_right">
          <section class="shop_detail_header">
            <h4 class="shop_title ellipsis">锄禾日当午，汗滴禾下土</h4>
            <ul class="shop_detail_ul">
              <li class="supports">保</li>
              <li class="supports">准</li>
              <li class="supports">票</li>
            </ul>
          </section>
          <section class="shop_rating_order">
            <section class="shop_rating_order_left">
              <div class="star star-24">
                <span class="star-item on"></span>
                <span class="star-item on"></span>
                <span class="star-item on"></span>
                <span class="star-item half"></span>
                <span class="star-item off"></span>
              </div>
              <div class="rating_section">
                3.6
              </div>
              <div class="order_section">
                月售106单
              </div>
            </section>
            <section class="shop_rating_order_right">
              <span class="delivery_style delivery_right">硅谷专送</span>
            </section>
          </section>
          <section class="shop_distance">
            <p class="shop_delivery_msg">
              <span>¥20起送</span>
              <span class="segmentation">/</span>
              <span>配送费约¥5</span>
            </p>
          </section>
        </div>
      </a>
    </li>
  </ul>
</template>

<script>
  export default {}
</script>

<style scoped>
  .shop_list .shop_li {
    position: relative;
    width: 100%;
  }
  .shop_list .shop_li::before {
    content: '';
    position: absolute;
    z-index: 200;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: #f1f1f1;
    transform: scaleY(0.5);
  }
  .shop_list .shop_li >a {
    *zoom: 1;
    display: block;
    box-sizing: border-box;
    padding: 15px 8px;
    width: 100%;
  }
  .shop_list .shop_li >a::after {
    content: '';
    display: block;
    clear: both;
  }
  .shop_list .shop_li >a .shop_left {
    float: left;
    box-sizing: border-box;
    width: 23%;
    height: 75px;
    padding-right: 10px;
  }
  .shop_list .shop_li >a .shop_left .shop_img {
    display: block;
    width: 100%;
    height: 100%;
  }
  .shop_list .shop_li >a .shop_right {
    float: right;
    width: 77%;
  }
  .shop_list .shop_li >a .shop_right .shop_detail_header {
    *zoom: 1;
    width: 100%;
  }
  .shop_list .shop_li >a .shop_right .shop_detail_header::after {
    content: '';
    display: block;
    clear: both;
  }
  .shop_list .shop_li >a .shop_right .shop_detail_header .shop_title {
    float: left;
    width: 140px;
    color: #333;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
  }
  .shop_list .shop_li >a .shop_right .shop_detail_header .shop_title::before {
    content: '品牌';
    display: inline-block;
    font-size: 11px;
    line-height: 11px;
    color: #333;
    background-color: #ffd930;
    padding: 2px 2px;
    border-radius: 2px;
    margin-right: 5px;
  }
  .shop_list .shop_li >a .shop_right .shop_detail_header .shop_detail_ul {
    float: right;
    margin-top: 3px;
  }
  .shop_list .shop_li >a .shop_right .shop_detail_header .shop_detail_ul .supports {
    float: left;
    font-size: 10px;
    color: #999;
    border: 1px solid #f1f1f1;
    padding: 0 2px;
    border-radius: 2px;
  }
  .shop_list .shop_li >a .shop_right .shop_rating_order {
    *zoom: 1;
    width: 100%;
    margin-top: 18px;
    margin-bottom: 8px;
  }
  .shop_list .shop_li >a .shop_right .shop_rating_order::after {
    content: '';
    display: block;
    clear: both;
  }
  .shop_list .shop_li >a .shop_right .shop_rating_order .shop_rating_order_left {
    float: left;
    color: #ff9a0d;
  }
  .shop_list .shop_li >a .shop_right .shop_rating_order .shop_rating_order_left .star {
    float: left;
    font-size: 0;
  }
  .shop_list .shop_li >a .shop_right .shop_rating_order .shop_rating_order_left .star .star-item {
    display: inline-block;
    background-repeat: no-repeat;
  }
  .shop_list .shop_li >a .shop_right .shop_rating_order .shop_rating_order_left .star.star-48 .star-item {
    width: 20px;
    height: 20px;
    margin-right: 22px;
    background-size: 20px 20px;
  }
  .shop_list .shop_li >a .shop_right .shop_rating_order .shop_rating_order_left .star.star-48 .star-item:last-child {
    margin-right: 0;
  }
  .shop_list .shop_li >a .shop_right .shop_rating_order .shop_rating_order_left .star.star-48 .star-item.on {
    background-image: url("./images/stars/star48_on@2x.png");
  }
  @media (-webkit-min-device-pixel-ratio: 3), (min-device-pixel-ratio: 3) {
    .shop_list .shop_li >a .shop_right .shop_rating_order .shop_rating_order_left .star.star-48 .star-item.on {
      background-image: url("./images/stars/star48_on@3x.png");
    }
  }
  .shop_list .shop_li >a .shop_right .shop_rating_order .shop_rating_order_left .star.star-48 .star-item.half {
    background-image: url("./images/stars/star48_half@2x.png");
  }
  @media (-webkit-min-device-pixel-ratio: 3), (min-device-pixel-ratio: 3) {
    .shop_list .shop_li >a .shop_right .shop_rating_order .shop_rating_order_left .star.star-48 .star-item.half {
      background-image: url("./images/stars/star48_half@3x.png");
    }
  }
  .shop_list .shop_li >a .shop_right .shop_rating_order .shop_rating_order_left .star.star-48 .star-item.off {
    background-image: url("./images/stars/star48_off@2x.png");
  }
  @media (-webkit-min-device-pixel-ratio: 3), (min-device-pixel-ratio: 3) {
    .shop_list .shop_li >a .shop_right .shop_rating_order .shop_rating_order_left .star.star-48 .star-item.off {
      background-image: url("./images/stars/star48_off@3x.png");
    }
  }
  .shop_list .shop_li >a .shop_right .shop_rating_order .shop_rating_order_left .star.star-36 .star-item {
    width: 15px;
    height: 15px;
    margin-right: 6px;
    background-size: 15px 15px;
  }
  .shop_list .shop_li >a .shop_right .shop_rating_order .shop_rating_order_left .star.star-36 .star-item:last-child {
    margin-right: 0;
  }
  .shop_list .shop_li >a .shop_right .shop_rating_order .shop_rating_order_left .star.star-36 .star-item.on {
    background-image: url("./images/stars/star36_on@2x.png");
  }
  @media (-webkit-min-device-pixel-ratio: 3), (min-device-pixel-ratio: 3) {
    .shop_list .shop_li >a .shop_right .shop_rating_order .shop_rating_order_left .star.star-36 .star-item.on {
      background-image: url("./images/stars/star36_on@3x.png");
    }
  }
  .shop_list .shop_li >a .shop_right .shop_rating_order .shop_rating_order_left .star.star-36 .star-item.half {
    background-image: url("./images/stars/star36_half@2x.png");
  }
  @media (-webkit-min-device-pixel-ratio: 3), (min-device-pixel-ratio: 3) {
    .shop_list .shop_li >a .shop_right .shop_rating_order .shop_rating_order_left .star.star-36 .star-item.half {
      background-image: url("./images/stars/star36_half@3x.png");
    }
  }
  .shop_list .shop_li >a .shop_right .shop_rating_order .shop_rating_order_left .star.star-36 .star-item.off {
    background-image: url("./images/stars/star36_off@2x.png");
  }
  @media (-webkit-min-device-pixel-ratio: 3), (min-device-pixel-ratio: 3) {
    .shop_list .shop_li >a .shop_right .shop_rating_order .shop_rating_order_left .star.star-36 .star-item.off {
      background-image: url("./images/stars/star36_off@3x.png");
    }
  }
  .shop_list .shop_li >a .shop_right .shop_rating_order .shop_rating_order_left .star.star-24 .star-item {
    width: 10px;
    height: 10px;
    margin-right: 3px;
    background-size: 10px 10px;
  }
  .shop_list .shop_li >a .shop_right .shop_rating_order .shop_rating_order_left .star.star-24 .star-item:last-child {
    margin-right: 0;
  }
  .shop_list .shop_li >a .shop_right .shop_rating_order .shop_rating_order_left .star.star-24 .star-item.on {
    background-image: url("./images/stars/star24_on@2x.png");
  }
  @media (-webkit-min-device-pixel-ratio: 3), (min-device-pixel-ratio: 3) {
    .shop_list .shop_li >a .shop_right .shop_rating_order .shop_rating_order_left .star.star-24 .star-item.on {
      background-image: url("./images/stars/star24_on@3x.png");
    }
  }
  .shop_list .shop_li >a .shop_right .shop_rating_order .shop_rating_order_left .star.star-24 .star-item.half {
    background-image: url("./images/stars/star24_half@2x.png");
  }
  @media (-webkit-min-device-pixel-ratio: 3), (min-device-pixel-ratio: 3) {
    .shop_list .shop_li >a .shop_right .shop_rating_order .shop_rating_order_left .star.star-24 .star-item.half {
      background-image: url("./images/stars/star24_half@3x.png");
    }
  }
  .shop_list .shop_li >a .shop_right .shop_rating_order .shop_rating_order_left .star.star-24 .star-item.off {
    background-image: url("./images/stars/star24_off@2x.png");
  }
  @media (-webkit-min-device-pixel-ratio: 3), (min-device-pixel-ratio: 3) {
    .shop_list .shop_li >a .shop_right .shop_rating_order .shop_rating_order_left .star.star-24 .star-item.off {
      background-image: url("./images/stars/star24_off@3x.png");
    }
  }
  .shop_list .shop_li >a .shop_right .shop_rating_order .shop_rating_order_left .rating_section {
    float: left;
    font-size: 10px;
    color: #ff6000;
    margin-left: 4px;
  }
  .shop_list .shop_li >a .shop_right .shop_rating_order .shop_rating_order_left .order_section {
    float: left;
    font-size: 10px;
    color: #666;
    transform: scale(0.8);
  }
  .shop_list .shop_li >a .shop_right .shop_rating_order .shop_rating_order_right {
    float: right;
    font-size: 0;
  }
  .shop_list .shop_li >a .shop_right .shop_rating_order .shop_rating_order_right .delivery_style {
    transform-origin: 35px 0;
    transform: scale(0.7);
    display: inline-block;
    font-size: 12px;
    padding: 1px;
    border-radius: 2px;
  }
  .shop_list .shop_li >a .shop_right .shop_rating_order .shop_rating_order_right .delivery_left {
    /*color: #fff;*/
    margin-right: -10px;
    background-color: #02a774;
    border: 1px solid #02a774;
  }
  .shop_list .shop_li >a .shop_right .shop_rating_order .shop_rating_order_right .delivery_right {
    color: #02a774;
    border: 1px solid #02a774;
  }
  .shop_list .shop_li >a .shop_right .shop_distance {
    *zoom: 1;
    width: 100%;
    font-size: 12px;
  }
  .shop_list .shop_li >a .shop_right .shop_distance::after {
    content: '';
    display: block;
    clear: both;
  }
  .shop_list .shop_li >a .shop_right .shop_distance .shop_delivery_msg {
    float: left;
    transform-origin: 0;
    transform: scale(0.9);
    color: #666;
  }
  .shop_list .shop_li >a .shop_right .shop_distance .segmentation {
    color: #ccc;
  }
</style>

<template>
  <div>
    <div class="big_box">
      <div class="left_box">
        <div class="top_title">
          <h2 style="color: white; letter-spacing: 6px; font-weight: 700;">YOUR LOGO.AI</h2>
          <span
              style="color: white; font-size: 14px; font-weight: 500; letter-spacing: 6px">PROFESSIONAL,FOCUSED,SPECIALIZED</span>
        </div>
        <div class="content_title">
          <span style="color: white; font-size: 64px; font-weight: 800;">BUSINESS</span>
          <span style="font-size: 46px; font-weight: 300;">PRESENTATION</span>
          <span style="font-size: 54px; font-weight: 300;">SLIDE TEMPLATE</span>
        </div>
        <div class="bottom_title">
          <span style="color: white; font-weight: 300">ANNOTATION RELATED DESCRIPTIVE TEXT</span>
          <span style="color: white; font-weight: 300">设计兼职中，平面设计，网页设计，APP设计，小程序设计，PPT设计</span>
        </div>
        <div class="bottom_button">
          <button class="button_class" @click="openWx">START IMMEDIATELY</button>
        </div>
      </div>
      <div class="right_box">
        <div class="button_box">
          <div class="img_button" @click="openWx">
            <img class="img_wx" src="../../assets/wx.png">
          </div>
          <div class="img_button" @click="openQq">
            <img class="img_wx" src="../../assets/QQ.png">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@import "index.css";
</style>
<script>

export default {
  data() {
    return {
      deadline2: Date.now() + 24 * 60 * 60 * 8,
    };
  },

  methods: {
    openWx() {
      const h = this.$createElement;
      this.$notify.info({
        title: '提示',
        message: h('i', {style: 'color: red; font-weight:800'}, '请联系客服人员微信：Jset_306')
      });
    },

    openQq() {
      const h = this.$createElement;
      this.$notify.info({
        title: '提示',
        message: h('i', {style: 'color: red; font-weight:800'}, '请联系客服人员QQ：3065546413')
      });
    }
  }
}
</script>

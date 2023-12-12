Page({
  data: {
    screenWidth: 0,
    screenHeight: 0,
    imgwidth: 0,
    imgheight: 0
  },
  //转发功能
  onShareAppMessage: function () {
    if (res.from === 'button') { }
    return {
      path: 'pages/about/about', // 路径，传递参数到指定页面。
      success: function (res) { }
    }
  },
  previewImage: function (e) {
    let that = this;
    let src = e.currentTarget.dataset.src;
    wx.previewImage({
      current: src,
      urls: [src]
    })
  },
  onPullDownRefresh: function () {
    wx.stopPullDownRefresh()
  },
  copyTBL: function (e) {
    var self = this;
    wx.setClipboardData({
      data: '15813323234', //需要复制的内容
      success: function (res) { }
    })
  },
  copyTBL1: function (e) {
    var self = this;
    wx.setClipboardData({
      data: 'zhengliyin1007@163.com', //需要复制的内容
      success: function (res) { }
    })
  },
  copyTBL2: function (e) {
    var self = this;
    wx.setClipboardData({
      data: '万柳猫猫之家', //需要复制的内容
      success: function (res) { }
    })
  },

  // 跳转小程序
  naviToMini: function (e) {
    wx.navigateToMiniProgram({
      appId: 'wx0fb7b06a5065be09',
      // path: 'pages/index/index',
      envVersion: 'release',
      success(res) {
        // 打开成功
      }
    })
  }
})
// pages/koalaTeacher/result/result.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ifList: true,
    path: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const ctx = wx.createCanvasContext('myCanvas')
    ctx.drawImage('../../../img/teacher/share_bac.png', 0, 0, 500, 400)

    ctx.setFontSize(24)
    ctx.setFillStyle('#fff')
    ctx.fillText('三年级1班今日作业', 40, 60)
    ctx.setFontSize(34)
    ctx.fillText('今日无作业', 40, 125)
    ctx.setFontSize(22)
    ctx.fillText('查看详情>>', 40, 260)
    ctx.setFontSize(24)
    ctx.fillText('2018.3.2', 360, 60)

    ctx.draw()

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var _this = this
    setTimeout(() => {
      wx.canvasToTempFilePath({
        x: 0,
        y: 0,
        width: 500,
        height: 400,
        destWidth: 500,
        destHeight: 400,
        canvasId: 'myCanvas',
        success: function (res) {
          _this.setData({
            path: res.tempFilePath
          })
          console.log(res.tempFilePath)
        }
      })
    }, 1000)
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      path: '/pages/koalaTeacher/shareContent/shareContent',
      imageUrl: this.data.path,
      success: function (res) {
        wx.showToast({
          title: '分享成功',
          icon: 'success',
          duration: 2000
        })
      },
      fail: function (res) {
        // 转发失败
      }
    }
  }
})
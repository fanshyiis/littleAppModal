// pages/koalaParent/bindStudent/bindStudent.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    focus: false,
    inputAccount: '',
    inputPassword: ''
    
  },
  /**
   * 清除input
   */
  clear: function (e) {
    if (e.target.dataset.account) {
      this.setData({
        inputAccount: ''
      })
    } else {
      this.setData({
        inputPassword: ''
      })
    }
  },
  /**
   * 账号
   */
  bindAccountInput: function (e) {
    this.setData({
      inputAccount: e.detail.value
    })
  },
  /**
   * 密码
   */
  bindPasswordInput: function (e) {
    this.setData({
      inputPassword: e.detail.value
    })
  },
  login: function () {
    wx.showModal({
      showCancel: false,
      confirmColor: '#20a3ff',
      content: '这个弹框怎么样？',
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
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
  onShareAppMessage: function () {
  
  }
})
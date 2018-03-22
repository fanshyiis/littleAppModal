// pages/koalaTeacher/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inAccount: false,
    inPassword: false,
    account: null,
    password: null,
    isEye: true
  },

  navToHome: function () {
    wx.navigateTo({
      url: '/pages/koalaTeacher/home/home'
    })
  },

  changeEye: function () {
    this.setData({
      isEye: !this.data.isEye
    })
  },

  clearAccount: function () {
    this.setData({
      account: null
    })
  },

  clearPassword: function () {
    this.setData({
      password: null
    })
  },

  getFocusA: function () {
    this.setData({
      inAccount: true,
      inPassword: false
    })
  },

  getFocusB: function () {
    this.setData({
      inAccount: false,
      inPassword: true
    })
  },

  bindKeyInput: function (e) {
    this.setData({
      account: e.detail.value
    })
  },

  bindKeyInputPassword: function (e) {
    this.setData({
      password: e.detail.value
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
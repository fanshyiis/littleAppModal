// pages/guide/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    teacher: '../../../img/guide/teacher_G.png',
    parent: '../../../img/guide/parent_G.png'
  },

  navToTeacher: function () {
    this.setData({
      teacher: '../../../img/guide/teacher_L.png',
      parent: '../../../img/guide/parent_G.png'
    })
    wx.navigateTo({
      url: '/pages/koalaTeacher/index/index'
    })
  },

  navToParent: function () {
    this.setData({
      parent: '../../../img/guide/parent_L.png',
      teacher: '../../../img/guide/teacher_G.png'
    })
    wx.navigateTo({
      url: '/pages/koalaParent/bindStudent/bindStudent'
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
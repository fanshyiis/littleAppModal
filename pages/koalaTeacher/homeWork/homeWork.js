Page({

  /**
   * 页面的初始数据
   */
  data: {
    classList: [true, false, false, false, false, false],
    modal1: false,
    modal2: false,
    modal3: false,
    smartNum: null,
    chooseSmart: false,
    dateStart: '2018-3-1',
    dataEnd: '2019-3-1',
    dataFormateS: '2018年03月01日',
    dataFormateE: '2019年03月01日'
  },

  delSmart: function () {
    this.setData({
      smartNum: null,
      chooseSmart: false
    })
  },

  openModal1: function () {
    this.setData({
      modal1: true
    })
  },

  closeModal1: function () {
    this.setData({
      modal1: false
    })
  },

  openModal2: function () {
    this.setData({
      modal2: true
    })
  },

  closeModal2: function () {
    this.setData({
      modal2: false
    })
  },

  openModal3: function () {
    var a = this.data.modal3
    this.setData({
      modal3: !a
    })
  },

  closeModal3: function () {
    this.setData({
      modal3: false
    })
  },

  bindDateChangeStart: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    var a = e.detail.value.split('-')
    var b = a[0] + '年' +  a[1] + '月' + a[2] + '日'
    this.setData({
      dateStart: e.detail.value,
      dataFormateS: b
    })
  },

  bindDateChangeEnd: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    var a = e.detail.value.split('-')
    var b = a[0] + '年' + a[1] + '月' + a[2] + '日'
    this.setData({
      dateEnd: e.detail.value,
      dataFormateE: b
    })
  },

  chooseClass: function (event) {
    var index = event.currentTarget.dataset.index
    console.log(index)
    var classList = this.data.classList
    classList[index] = !classList[index]
    this.setData({
      classList
    })
  },

  goToSmartLadder: function () {
    wx.navigateTo({
      url: '/pages/koalaTeacher/smartLadder/smart'
    })
  },

  goToResult: function () {
    wx.navigateTo({
      url: '/pages/koalaTeacher/result/result'
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (options.num) {
      this.setData({
        smartNum: options.num,
        chooseSmart: options.choose
      })
    }
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
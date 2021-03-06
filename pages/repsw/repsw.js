// pages/repsw/repsw.js
const app=getApp();
// pages/password/password.js
Page({
 
  /**
   * 页面的初始数据
   */
  data: {
  
  },
  formSubmit:function(e){
    // console.log(e);
    var oldpwd=e.detail.value.oldpwd;
    var newpwd = e.detail.value.newpwd;
    var newpwd2 = e.detail.value.newpwd2;
    var no = wx.getStorageSync('student').no;
    // console.log(no);
    if(oldpwd=='' || newpwd=='' || newpwd2==''){
      wx.showToast({
        title: '密码不能为空',
        icon:'none',
        duration:1000
      })
    }else if(newpwd!=newpwd2){
      wx.showToast({
        title: '两次输入不一致',
        icon: 'none',
        duration: 1000
      })
    }else{
      var url = app.globalData.url.setpassword;
      wx.request({
        url: url, //仅为示例，并非真实的接口地址
        method:'POST',
        data: {
          no: no,
          oldpwd:oldpwd,
          newpwd:newpwd
        },
        header: {
          'content-type': 'application/x-www-form-urlencoded' 
        },
        success: (res) => {
          console.log(res.data);
          if(res.data.error){
            wx.showToast({
              title: res.data.msg,
              icon: 'none',
              duration: 2000
            })
          }else{
            wx.showToast({
              title: res.data.msg,
              icon: 'success',
              duration: 2000,
              success: function () {
                setTimeout(function () {
                  wx.navigateBack({ belta: 1 })
                }, 2000)
              }
            })
          }
         
        }
      })
    }
 
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


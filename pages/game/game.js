// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
 
  },
  jumpDetail() {
    console.log(222);
    // wx.navigateTo({
    //   url: './detail/detail'
    // })
    this.router.navigateTo({
      url: './detail/detail'
    })
  }
})

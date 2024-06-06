Page({
  data: {
    username: '',
    password: ''
  },

  onUsernameInput(e) {
    this.setData({
      username: e.detail.value
    });
  },

  onPasswordInput(e) {
    this.setData({
      password: e.detail.value
    });
  },

  onRegister() {
    const { username, password } = this.data;

    if (!username || !password) {
      wx.showToast({
        title: '用户名或密码不能为空',
        icon: 'none'
      });
      return;
    }

    // 保存用户名和密码到本地存储
    wx.setStorageSync('username', username);
    wx.setStorageSync('password', password);

    wx.showToast({
      title: '注册成功',
      icon: 'success'
    });

    // 注册成功后跳转到登录页面
    wx.redirectTo({
      url: '/pages/login/login'
    });
  }
});

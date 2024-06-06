Page({
  data: {
    username: '',
    password: '',
    presetUsername: 'admin', // 预设的用户名
    presetPassword: '123456' // 预设的密码
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

  onLogin() {
    const { username, password, presetUsername, presetPassword } = this.data;

    if (!username || !password) {
      wx.showToast({
        title: '用户名或密码不能为空',
        icon: 'none'
      });
      return;
    }

    if (username === presetUsername && password === presetPassword) {
      // 登录成功
      wx.showToast({
        title: '登录成功',
        icon: 'success'
      });

      // 登录成功后的操作，如跳转到主页面
      wx.redirectTo({
        url: '/pages/index/index'
      });
    } else {
      // 登录失败，清空输入的用户名和密码
      this.setData({
        username: '',
        password: ''
      });

      wx.showToast({
        title: '用户名或密码错误',
        icon: 'none'
      });
    }
  },

  onRegister() {
    console.log('Register button clicked');
    // 跳转到注册页面
    wx.navigateTo({
      url: '/pages/register/register'
    });
  }
});

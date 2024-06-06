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

  onLogin() {
    const { username, password } = this.data;

    if (!username || !password) {
      wx.showToast({
        title: '用户名或密码不能为空',
        icon: 'none'
      });
      return;
    }

    // 从本地存储中获取注册的用户名和密码
    const storedUsername = wx.getStorageSync('username');
    const storedPassword = wx.getStorageSync('password');

    if (username === storedUsername && password === storedPassword) {
      wx.showToast({
        title: '登录成功',
        icon: 'success'
      });

      // 登录成功后的操作，如跳转到主页面
      wx.redirectTo({
        url: '/pages/index/index'
      });
    } else {
      wx.showToast({
        title: '用户名或密码错误',
        icon: 'none'
      });

      // 清空输入的用户名和密码
      this.setData({
        username: '',
        password: ''
      });
    }
  },
  onRegister() {
    console.log('这里点击了注册按钮!');
    // 跳转到注册页面
    wx.navigateTo({
      url: '/pages/register/register'
    });
  }
});

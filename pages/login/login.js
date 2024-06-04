Page({
  data: {
    username: '',
    password: '',
    relusername: 'HuangYiFeng',
    relpassword: '233235'
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
    const { username, password, relusername, relpassword} = this.data;

    if (!username || !password) {
      wx.showToast({
        title: '用户名或密码不能为空',
        icon: 'none'
      });
      return;
    }

    if (username === relusername && password === relpassword) {
      // 在这里可以进行登录请求的发送
      wx.showToast({
        title: '登录成功',
        icon: 'success'
      });

      // 登录成功后的操作，如跳转到主页面
      wx.redirectTo({
        url: '/pages/index/index'
      });
    } else {

      this.setData({
        username: '',
        password: ''
      });

      wx.showToast({
        title: '用户名或密码错误',
        icon: 'none'
      });
    }
  }
});

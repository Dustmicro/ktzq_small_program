Page({
  data: {
    username: '',
    password: '',
    confirmPassword: '',
    passwordValid: true,  // 密码格式校验状态
    passwordMatch: true,  // 密码一致性校验状态
  },

  // 处理用户名输入
  onUsernameInput: function (e) {
    this.setData({
      username: e.detail.value
    });
  },

  // 处理密码输入
  onPasswordInput: function (e) {
    this.setData({
      password: e.detail.value
    });
    this.checkPasswordFormat(e.detail.value);  // 校验密码格式
  },

  // 处理确认密码输入
  onConfirmPasswordInput: function (e) {
    this.setData({
      confirmPassword: e.detail.value
    });
    this.checkPasswordMatch(e.detail.value);  // 校验两次密码是否一致
  },

  // 校验密码格式（字母+数字+特殊符号）
  checkPasswordFormat: function (password) {
    // 密码必须包含字母、数字、特殊符号
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()_+<>?]).{6,}$/;
    if (!passwordRegex.test(password)) {
      this.setData({
        passwordValid: false
      });
    } else {
      this.setData({
        passwordValid: true
      });
    }
  },

  // 校验密码是否一致
  checkPasswordMatch: function (confirmPassword) {
    if (confirmPassword !== this.data.password) {
      this.setData({
        passwordMatch: false
      });
    } else {
      this.setData({
        passwordMatch: true
      });
    }
  },

  // 处理注册按钮点击
  onRegister: function () {
    const { username, password, confirmPassword, passwordValid, passwordMatch } = this.data;

    // 检查输入是否完整
    if (!username || !password || !confirmPassword) {
      wx.showToast({
        title: '请填写所有信息',
        icon: 'none'
      });
      return;
    }

    // 校验密码格式
    if (!passwordValid) {
      wx.showToast({
        title: '密码格式要求为字母+数字+特殊符号，请重新输入!',
        icon: 'none'
      });
      return;
    }

    // 校验两次密码是否一致
    if (!passwordMatch) {
      wx.showToast({
        title: '两次密码输入不一致',
        icon: 'none'
      });
      return;
    }

    // 执行注册逻辑，这里可以是请求接口等操作
    wx.showToast({
      title: '注册成功',
      icon: 'success'
    });

    // 清空表单数据
    this.setData({
      username: '',
      password: '',
      confirmPassword: ''
    });

    // 设置延迟，给用户几秒钟查看注册成功提示，然后跳转到登录页面
    setTimeout(() => {
      // 跳转到登录页面
      wx.redirectTo({
        url: '/pages/login/login'  // 跳转并关闭当前页面
      });
    }, 2000);  // 延迟 2 秒跳转
  }
});

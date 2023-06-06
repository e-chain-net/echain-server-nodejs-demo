

// 发送 POST 请求
request.post(env.UrlGenerateAccount + count, {form:{name:'John Doe',age:25}}, function (error, response, body) {
    if (error) {
      console.error(error); // 处理请求错误
    } else {
      console.log(body); // 处理响应数据
    }
  });
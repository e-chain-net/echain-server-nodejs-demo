var env = require('../env')
const axios = require('axios');

//对资源“http://www.google.com" 发出get请求 
axios.get(env.UrlGenerateAccount)
  .then(response => {
    console.log(response.data); // 处理响应数据
  })
  .catch(error => {
    console.error(error); // 处理请求错误
  });
  



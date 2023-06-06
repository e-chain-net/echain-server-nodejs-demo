const env = require('../env')
const axios = require('axios');

class SdkUtil{

};

SdkUtil.prototype.generateAccount = function(count){
    var url = count ? env.UrlGenerateAccounts + count : env.UrlGenerateAccount;
    return new Promise(function(resolve,reject){
      axios.get(url)
      .then(response => {
        // console.log(response.data); // 处理响应数据
        resolve(response.data.data);
      })
      .catch(error => {
        // console.error(error); // 处理请求错误
        reject(error);
      });
    })
  }

SdkUtil.prototype.signMint721 = function(param){
    return sign_request(env.UrlMint721,param);
}

SdkUtil.prototype.signTransfer721 = function(param){
    return sign_request(env.UrlTransfer721,param);
}

SdkUtil.prototype.signBurn721 = function(param){
    return sign_request(env.UrlBurn721,param);
}

SdkUtil.prototype.signMint1155 = function(param){
    return sign_request(env.UrlMint1155,param);
}

SdkUtil.prototype.signTransfer1155 = function(param){
    return sign_request(env.UrlTransfer1155,param);
}

SdkUtil.prototype.signBurn1155 = function(param){
    return sign_request(env.UrlBurn1155,param);
}

function sign_request(url,param){
    return new Promise(function(resolve,reject){
        axios.post(url,param)
        .then(response => {
          resolve(response.data.data);
        })
        .catch(error => {
          reject(error);
        });
    })
}
module.exports = SdkUtil;
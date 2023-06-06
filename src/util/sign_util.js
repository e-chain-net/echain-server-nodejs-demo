const env = require('../env')
const axios = require('axios');

class SignUtil{

};
SignUtil.prototype.signMint721 = function(param){
    return sign_request(env.UrlMint721,param);
}

SignUtil.prototype.signTransfer721 = function(param){
    return sign_request(env.UrlTransfer721,param);
}

SignUtil.prototype.signBurn721 = function(param){
    return sign_request(env.UrlBurn721,param);
}

SignUtil.prototype.signMint1155 = function(param){
    return sign_request(env.UrlMint1155,param);
}

SignUtil.prototype.signTransfer1155 = function(param){
    return sign_request(env.UrlTransfer1155,param);
}

SignUtil.prototype.signBurn1155 = function(param){
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
module.exports = SignUtil;
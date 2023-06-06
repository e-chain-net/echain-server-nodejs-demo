const env = require('../env')
const axios = require('axios');
const https = require('https');
const fs = require('fs');
const ERC721 = require('./abi_util_721');
const abiUtil721 = new ERC721();
const ERC1155 = require('./abi_util_1155');
const abiUtil1155 = new ERC1155();
const rsaUtil = require('./rsa_util');

class ApiUtil{

}

ApiUtil.prototype.deployContract = function(param){
    return new Promise(function(resolve,reject){
       https_request(env.UrlDeploy,param)
       .then(response=>{
            if(response.code === "EC000000"){
                resolve(response.data.contractAddress);
            }else{
                reject(response.message);
            }
       })
       .catch(error=>{
            reject(error);
       })
    });
}

ApiUtil.prototype.getBlockNumber = function(){
    let payload = {
        jsonRpc:{
            method:"getBlockNumber",
            params:[],
        }
    }
    return new Promise(function(resolve,reject){
        https_request(env.UrlQuery,payload)
        .then(response=>{
             if(response.code === "EC000000"){
                 resolve(response.data.blockNumber);
             }else{
                 reject(response.message);
             }
        })
        .catch(error=>{
             reject(error);
        })
     });
}

ApiUtil.prototype.getTransactionReceipt = function(txhash){
    let payload = {
        jsonRpc:{
            method:"getTransactionReceipt",
            params:[txhash,false],
        }
    }
    return new Promise(function(resolve,reject){
        https_request(env.UrlQuery,payload)
        .then(response=>{
             if(response.code === "EC000000"){
                 resolve(response.data.result);
             }else{
                 reject(response.message);
             }
        })
        .catch(error=>{
             reject(error);
        })
     });
}

ApiUtil.prototype.balanceOf721 = function(contractAddress,accountAddress){
    let payload = {
        jsonRpc:{
            method:"call",
            params:[contractAddress,abiUtil721.encodeBalanceOf(accountAddress)],
        }
    }
    return new Promise(function(resolve,reject){
        https_request(env.UrlQuery,payload)
        .then(response=>{
             if(response.code === "EC000000"){
                if(response.data.result.status == 0){
                    let balance = parseInt(response.data.result.output,16);
                    resolve(balance);
                }else{
                    reject(response.data.result);
                }
             }else{
                 reject(response.message);
             }
        })
        .catch(error=>{
             reject(error);
        })
     });
}

ApiUtil.prototype.ownerOf721 = function(contractAddress,tokenId){
    let payload = {
        jsonRpc:{
            method:"call",
            params:[contractAddress,abiUtil721.encodeOwnerOf(tokenId)],
        }
    }
    return new Promise(function(resolve,reject){
        https_request(env.UrlQuery,payload)
        .then(response=>{
             if(response.code === "EC000000"){
                if(response.data.result.status == 0){
                    let account = "0x" + response.data.result.output.slice(-40);
                    resolve(account);
                }else{
                    reject(response.data.result);
                }
             }else{
                 reject(response.message);
             }
        })
        .catch(error=>{
             reject(error);
        })
     });
}

ApiUtil.prototype.balanceOf1155 = function(contractAddress,accountAddress,tokenId){
    let payload = {
        jsonRpc:{
            method:"call",
            params:[contractAddress,abiUtil1155.encodeBalanceOf(accountAddress,tokenId)],
        }
    }
    return new Promise(function(resolve,reject){
        https_request(env.UrlQuery,payload)
        .then(response=>{
             if(response.code === "EC000000"){
                if(response.data.result.status == 0){
                    let balance = parseInt(response.data.result.output,16);
                    resolve(balance);
                }else{
                    reject(response.data.result);
                }
             }else{
                 reject(response.message);
             }
        })
        .catch(error=>{
             reject(error);
        })
     });
}

ApiUtil.prototype.sendTx = function(txHash,txSigned,callbackUrl){
    let param = {
        jsonRpc:{
            method:"sendTransaction",
            params:[txSigned,false]
        },
        reqNo:txHash,
        callbackUrl:callbackUrl,
    };
    return new Promise(function(resolve,reject){
        https_request(env.UrlSendTx,param)
        .then(response=>{
             resolve(response);
        })
        .catch(error=>{
             reject(error);
        })
     });
}

function getOptions(){
    return {
        headers:{
            merchantNo:env.MerchantNo,
            timestamp: Date.now().toString(),
            sign:rsaUtil.rsaSign(env.MerchantNo,env.RsaPrivate)
        },
        httpsAgent: new https.Agent({
            cert: fs.readFileSync(env.EChainServerCertPath),
            rejectUnauthorized:false
        })
    };
}
function https_request(url,param){
    let options = getOptions();
    return new Promise(function(resolve,reject){
        axios.post(url,param,options)
        .then(response => {
          resolve(response.data);
        })
        .catch(error => {
          reject(error);
        });
    })
}

module.exports = ApiUtil;
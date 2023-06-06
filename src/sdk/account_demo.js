var env = require('../env')
const axios = require('axios');

main();
async function main(){
  try{
    let account = await generateAccount();
    console.log("生成单个账户：")
    console.log("address:",account.address);
    console.log("privateKey:",account.privateKey);
    console.log("");

    
    let accounts = await generateAccount(10);
    console.log("生成多个账户：")
    for(var i in accounts){
      console.log("address:",accounts[i].address);
      console.log("privateKey:",accounts[i].privateKey);
    }    
  }catch(e){
    console.error(e);
  }
}
//生成单个账户

async function generateAccount(count){
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

  



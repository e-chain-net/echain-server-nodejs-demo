const ApiUtil = require("./util/api_util")
const apiUtil = new ApiUtil();
const SdkUtil = require("./util/sdk_util")
const sdkUtil = new SdkUtil();
var env = require('../env')
const axios = require('axios');

//测试全流程-721
main();
async function main(){
  try{
    //生成账户
    let owner = await sdkUtil.generateAccount();
    console.log("生成单个账户：")
    console.log("address:",account.address);
    console.log("privateKey:",account.privateKey);
    console.log("");

    //部署合约
    var param = {
        reqNo:"Deploy-721-1",
        owner:owner.address,
        contractType:"ERC721"
    }
    let contractAddr = await apiUtil.deployContract(param);
    console.log("ERC721合约地址："+contractAddr);

    //生成两个账户，用于铸造，转移，销毁
    let accounts = await sdkUtil.generateAccount(2);
    console.log("生成2个账户：")
    for(var i in accounts){
        console.log("address:",accounts[i].address);
        console.log("privateKey:",accounts[i].privateKey);
      }  
    console.log("");

    //请求区块号
    var blockNumber = await apiUtil.getBlockNumber();
    console.log("当前区块号：",blockNumber);  

    var tokenId = 100;
    var param = {
        toAddress:  accounts[0].address,
        tokenId:    tokenId,
        contractAddress:contractAddr,
        privateKey: owner.privateKey,
        blockNumber: blockNumber
      }
      let signedTx = await signUtil.signMint721(param);
      console.log("Mint tx-hash:",signedTx.txHash);
      console.log("Mint signed:",signedTx.signedTx);

     //上链铸造交易，用户在实际使用时应填写回调地址
    let response = await apiUtil.sendTx(signedTx.txHash,signedTx.signed,"");
    if(response.code === "EC000001"){
        console.log("交易发送成功");
    }else{
        console.log("交易发送失败");
    }
  }catch(e){
    console.error(e);
  }
}
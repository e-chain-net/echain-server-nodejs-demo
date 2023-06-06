const SdkUtil = require("../util/sdk_util")
const sdkUtil = new SdkUtil();

main();
async function main(){
  try{
    let account = await sdkUtil.generateAccount();
    console.log("生成单个账户：")
    console.log("address:",account.address);
    console.log("privateKey:",account.privateKey);
    console.log("");

    
    let accounts = await sdkUtil.generateAccount(10);
    console.log("生成多个账户：")
    for(var i in accounts){
      console.log("address:",accounts[i].address);
      console.log("privateKey:",accounts[i].privateKey);
    }    
  }catch(e){
    console.error(e);
  }
}
  



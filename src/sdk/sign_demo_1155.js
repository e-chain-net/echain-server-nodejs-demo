const SdkUtil = require("../util/sdk_util")
const signUtil = new SdkUtil();

var contractAddress = "0xdcdecd228f59a234287fece68ad8fb94f016b124";
var owner = {
  address:"0xdb222aaaefb28a8a2b1533c6b098b819a80665b6",
  privateKey:"500a9faf63d80563207702295b9bf9f5dc98956fd253d81b8ba062f69b5cf6b1"
};
var user1 = {
  address:"0x95a1a99be965777d8b0e42fe5ec1c161f6c3a5da",
  privateKey:"20af5ca9552563576673abda1af0540ff6c72ea631b1de8b11296c94167a6b06"
};
var user2 = {
  address:"0xf53baf7526a2c8aec2f185ed48e94316e29e9e95",
  privateKey:"42e548a753fe86d0937372b24ae472559966929fb3f8d0672376849d23f6a43d"
};

var blockNumber = 10000;  //实际使用中应通过api请求得到，可以定时请求（建议时间：10秒一次）
var tokenId = 1000;
var amount = 100;

main();
async function main(){
  try{
    console.log("测试erc1155签名\n");
    await testSignMint();
    console.log("")

    await testSignTransfer();
    console.log("")
    
    await testSignBurn();
  }catch(e){
    console.error(e);
  }
}

//由合约owner铸造token给user1账户
async function testSignMint(){
  var param = {
    toAddress:  user1.address,
    tokenId:    tokenId,
    amount:     amount,
    contractAddress:contractAddress,
    privateKey: owner.privateKey,
    blockNumber: blockNumber
  }
  let tx = await signUtil.signMint1155(param);
  console.log("Mint tx-hash:",tx.txHash);
  console.log("Mint signed:",tx.signedTx);
}

//user1账户转移token到user2
async function testSignTransfer(){
  var param = {
    fromAddress:  user1.address,
    toAddress:  user2.address,
    tokenId:    tokenId,
    amount:     amount,
    contractAddress:contractAddress,
    privateKey: user1.privateKey,
    blockNumber: blockNumber
  }
  let tx = await signUtil.signTransfer1155(param);
  console.log("Transfer tx-hash:",tx.txHash);
  console.log("Transfer signed:",tx.signedTx);
}

//user2销毁token
async function testSignBurn(){
  var param = {
    fromAddress:  user2.address,
    tokenId:    tokenId,
    amount:     amount,
    contractAddress:contractAddress,
    privateKey: user2.privateKey,
    blockNumber: blockNumber
  }
  let tx = await signUtil.signBurn1155(param);
  console.log("Burn tx-hash:",tx.txHash);
  console.log("Burn signed:",tx.signedTx);
}


  



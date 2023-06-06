const ApiUtil = require("../util/api_util")
const apiUtil = new ApiUtil();

main();
async function main(){
  try{
    console.log("测试查询功能\n");
    var blockNumber = await apiUtil.getBlockNumber();
    console.log("当前区块号：",blockNumber);
    console.log("");

    var txReceipt = await apiUtil.getTransactionReceipt("0x3ac02bbaca5e7e0adc05d0e36954c86ee39108d543542a49eed7420d445d2536");    
    console.log("交易收据：",JSON.stringify(txReceipt));
    console.log("");

    //ERC721合约相关查询
    await testQuery721();

    //ERC1155合约相关查询
    await testQuery1155();
  }catch(e){
    console.error(e);
  }
}

async function testQuery721(){
    let account = "0x95a1a99be965777d8b0e42fe5ec1c161f6c3a5da";
    let tokenId = 1002;
    let contractAddress = "0x18f8597118953b3374c2515ecf799ce4750361bb";

    let balance = await apiUtil.balanceOf721(contractAddress,account);
    console.log("balanceOf查询结果721：",balance);
    console.log("");

    let owner = await apiUtil.ownerOf721(contractAddress,tokenId);
    console.log("ownerOf 查询结果721：", owner);
    console.log("");
}

async function testQuery1155(){
    let contractAddress = "0xc9e086ef258954837536abfe1f4f73d64bba4841";
    let account = "0x95a1a99be965777d8b0e42fe5ec1c161f6c3a5da";
    let tokenId = 1004;

    let balance = await apiUtil.balanceOf1155(contractAddress,account,tokenId);
    console.log("balanceOf查询结果1155：",balance);
    console.log("");
}
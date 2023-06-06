const ApiUtil = require("../util/api_util")
const apiUtil = new ApiUtil();

var owner = {
    address:"0xdb222aaaefb28a8a2b1533c6b098b819a80665b6",
    privateKey:"500a9faf63d80563207702295b9bf9f5dc98956fd253d81b8ba062f69b5cf6b1"
  };

main();
async function main(){
  try{
    console.log("测试部署合约\n");
    var param = {
        reqNo:"Deploy-721-1",
        owner:owner.address,
        contractType:"ERC721"
    }
    let contractAddr = await apiUtil.deployContract(param);
    console.log("ERC721合约地址："+contractAddr);

    param = {
        reqNo:"Deploy-1155-1",
        owner:owner.address,
        contractType:"ERC1155"
    }
    contractAddr = await apiUtil.deployContract(param);
    console.log("ERC1155合约地址："+contractAddr);
  }catch(e){
    console.error(e);
  }
}
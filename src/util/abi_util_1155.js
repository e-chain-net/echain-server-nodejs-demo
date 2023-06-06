const Web3 = require('web3');
const web3 = new Web3();

const abi1155 = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256[]","name":"ids","type":"uint256[]"},{"indexed":false,"internalType":"uint256[]","name":"values","type":"uint256[]"}],"name":"TransferBatch","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"id","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"TransferSingle","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"value","type":"string"},{"indexed":true,"internalType":"uint256","name":"id","type":"uint256"}],"name":"URI","type":"event"},{"conflictFields":[{"kind":3,"slot":0,"value":[1]}],"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"id","type":"uint256"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"selector":[16635278,1687674993],"stateMutability":"view","type":"function"},{"conflictFields":[{"kind":0}],"inputs":[{"internalType":"address[]","name":"accounts","type":"address[]"},{"internalType":"uint256[]","name":"ids","type":"uint256[]"}],"name":"balanceOfBatch","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"selector":[1309832180,3264217620],"stateMutability":"view","type":"function"},{"conflictFields":[{"kind":2,"slot":1,"value":[0]},{"kind":3,"slot":0,"value":[1]}],"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"burn","outputs":[],"selector":[4113140426,3914641026],"stateMutability":"nonpayable","type":"function"},{"conflictFields":[{"kind":0},{"kind":2,"slot":1,"value":[0]}],"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256[]","name":"ids","type":"uint256[]"},{"internalType":"uint256[]","name":"values","type":"uint256[]"}],"name":"burnBatch","outputs":[],"selector":[1797309524,622292549],"stateMutability":"nonpayable","type":"function"},{"conflictFields":[{"kind":0}],"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"selector":[3917867461,1275072607],"stateMutability":"view","type":"function"},{"conflictFields":[{"kind":0}],"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"mint","outputs":[],"selector":[1930507241,2475226117],"stateMutability":"nonpayable","type":"function"},{"conflictFields":[{"kind":0}],"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256[]","name":"ids","type":"uint256[]"},{"internalType":"uint256[]","name":"amounts","type":"uint256[]"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"mintBatch","outputs":[],"selector":[528474106,788992923],"stateMutability":"nonpayable","type":"function"},{"conflictFields":[{"kind":4,"value":[3]}],"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"selector":[2376452955,1351213768],"stateMutability":"view","type":"function"},{"conflictFields":[{"kind":4,"value":[3]}],"inputs":[],"name":"renounceOwnership","outputs":[],"selector":[1901074598,3631098338],"stateMutability":"nonpayable","type":"function"},{"conflictFields":[{"kind":0}],"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256[]","name":"ids","type":"uint256[]"},{"internalType":"uint256[]","name":"amounts","type":"uint256[]"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeBatchTransferFrom","outputs":[],"selector":[783467222,1686833051],"stateMutability":"nonpayable","type":"function"},{"conflictFields":[{"kind":0}],"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"selector":[4064428842,3091393139],"stateMutability":"nonpayable","type":"function"},{"conflictFields":[{"kind":0},{"kind":2,"slot":1,"value":[0]}],"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"selector":[2720838757,805160440],"stateMutability":"nonpayable","type":"function"},{"conflictFields":[{"kind":4,"value":[2]},{"kind":4,"value":[3]}],"inputs":[{"internalType":"string","name":"newuri","type":"string"}],"name":"setURI","outputs":[],"selector":[50221829,199189099],"stateMutability":"nonpayable","type":"function"},{"conflictFields":[{"kind":5}],"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"selector":[33540519,3934173080],"stateMutability":"view","type":"function"},{"conflictFields":[{"kind":4,"value":[3]}],"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"selector":[4076725131,382390570],"stateMutability":"nonpayable","type":"function"},{"conflictFields":[{"kind":4,"value":[2]}],"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"uri","outputs":[{"internalType":"string","name":"","type":"string"}],"selector":[243872796,3857301037],"stateMutability":"view","type":"function"}];

class Erc1155{}

const contractAddress = "0x18f8597118953b3374c2515ecf799ce4750361bb";
Erc1155.prototype.encodeBalanceOf = function(accountAddress,tokenId){
    const contract = new web3.eth.Contract(abi1155,contractAddress);
    return contract.methods.balanceOf(accountAddress,tokenId).encodeABI();
}

module.exports = Erc1155;
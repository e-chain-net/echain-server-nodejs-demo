# echain-server-nodejs-demo
加密机与``EChainServer-API``的``Node.js``调用示例，包含``ERC721``与``ERC1155``两种合约的调用示例

# 文件说明
## 总体说明
|  文件路径   | 描述  |
|  ----  | ----  |
| src/env.js  | 配置文件，用户需要根据实际情况修改 |
| src/index.js  | 全流程示例 |
| src/api | api请求示例 |
| src/sdk | sdk请求示例 |

## 加密机相关示例
|  文件路径   | 描述  |
|  ----  | ----  |
| src/sdk/account_demo  | 生成随机账户地址、私钥 |
| src/sdk/sign_demo_721  | 对标准`Erc721`合约进行铸造、转移、销毁进行签名，得到交易哈希、签名后的交易体 |
| src/sdk/sign_demo_1155  | 对标准`Erc1155`合约进行铸造、转移、销毁进行签名，得到交易哈希、签名后的交易体 |

## API请求相关示例
|  文件路径   | 描述  |
|  ----  | ----  |
| src/api/query_demo.js |查询区块号、交易收据、NFT拥有者地址、NFT余额的请求示例(包含`721`与`1155`)|
| src/api/sendtx_demo.js  | 发送交易的请求示例 |
| src/api/deploy_contract_demo.js  | 部署标准``ERC721``/``ERC1155``合约的请求示例 |

const crypto = require('crypto');

/**
 * 创建签名（使用私钥和数据）
 *
 * @param data
 * @param privateKey
 * @returns {string}
 */
function createSign(data, privateKey) {
    const sign = crypto.createSign('RSA-SHA256');
    sign.update(data);
    sign.end();
    return sign.sign(privateKey).toString('base64')
}

/**
 * 签名验证（使用公钥、数据、签名）
 *
 * @param data
 * @param sign
 * @param publicKey
 * @returns {boolean}
 */
function verifySign(data, sign, publicKey) {
    const verify = crypto.createVerify('RSA-SHA256');
    verify.update(data);
    verify.end();
    return verify.verify(publicKey, Buffer.from(sign, 'base64'));
}

function rsaSign(merchantNo,rsaPrivate){
    const privateKey = "-----BEGIN PRIVATE KEY-----\n" + rsaPrivate + "\n-----END PRIVATE KEY-----";
    let content = merchantNo + "-" + Date.now();
    return createSign(content, privateKey);
}

module.exports = {rsaSign};
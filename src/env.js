
const UrlBase = "https://qa-api.e-chain.net.cn"
const UrlBaseSign = "http://10.168.3.73:18888/v2"

var env = {
    //EChainServer相关Url常量
    UrlQuery : UrlBase + "/chain/rpc/query",
    UrlSendTx : UrlBase + "/chain/rpc/tx",
    UrlDeploy : UrlBase + "/chain/contract/deploy",

    //加密机相关Url常量
    UrlGenerateAccount : UrlBaseSign + "/account/generate",
    UrlGenerateAccounts : UrlBaseSign + "/account/generate_multi/",
    UrlMint721 : UrlBaseSign + "/sign/mint",
    UrlTransfer721 : UrlBaseSign + "/sign/transfer",
    UrlBurn721 : UrlBaseSign + "/sign/burn",
    UrlMint1155 : UrlBaseSign + "/sign/mint/1155",
    UrlTransfer1155 : UrlBaseSign + "/sign/transfer/1155",
    UrlBurn1155 : UrlBaseSign + "/sign/burn/1155",

    //商户相关常量
    MerchantNo : "3203001000583086614",
    RsaPrivate : "MIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQCY/i3wvgeqo1gSusHf1AuPYU+nRMNLkZeIPpA6YjvE5iQ26DQXdrQ0WamsvAKz3GEQMwRqmtesEQhLygJj4wJdO4PDhGNqlObsWQx4N1cyrbvGouTbO2hUhnesP3PURMRBEpJd1A/koKmh606i4oKcXKuVBwjoBMdPPCMZ4QchcJ30KFLtiXT9OBpGim7SgFBiKnWxO/4CGd1KkixRj4ID0lyYhRnnCUvFptN822V4g5yr7vSUsH3M7IxVO4SgFzFZjM9pvuo0G2vf51NJ+fK3y9rK24/Vt671sEf59s28OXuyRXErjgfIoDdM2triJ2Fq8jZQV9kVvR6gn7rmZfUnAgMBAAECggEAQ248J1BKJr5Jsi+YBaP62F4Gcm3POb5YsFcK0IC9YSIiMgUT+Id8E1q1ewl+k3F9YltqBeZrSk5TfrvxY78JKrhxcbom6zHnuaHh6hZSG2cRTRI8lhfP+vktQ8DPt237pcaetjYiLx1UxqXkicwVzv7VLSDlnwWEJvsVaXGR5/2BT8q+/2VEK4qCe8DESNpWNlDfonXAK0FDtDzWkjwLeWzJtzWQLw0ps8gSTQsUYRA2GUBtcp3MWOy+GOAIzhbTawOYTi3EjvAsRB7YuLYLOnueid0vYVRu6IHETcOBJIpGbBxV0IpbNvYNJ53A1bgyELvKIM9xUYs/3m5HIc6mmQKBgQDKvaYx1nUTjikkkn88IC+TgnMGSBSDSKcxZd0IOUPC1ohtnB0x/IcH+mEBot8GEkn7CjnyvtbaBq3I+RxGpfrLzdzt8BH9tLxyrGA872iXfB8owRMpoOs0hDMRTT2gZPsXpNdQwDP4UvLqmsQPw0QO5id7gLnc5Rm6OSMcIaXx/QKBgQDBLvl3we7ZzN+PydXBY9AKnvAl9BeDFPgynsRXn0dYNuKDWR3PXF/IOLGraa7LHZ3L6WJY3fLRr5CMV+k8RjWo6aZMHRqFzsQGRW3ta7XczTO1yq6/ks6xHje/yQqeGdbJLD07StCwslA7JDukA5u0WuPkaozjRKLrN9ShiHDq8wKBgQCOxpoo1NekSuQsjkKuTBhVMHPiw5Y2kk60GgFbzkArETwIvP1Oe4F4m9n+9f1L4EtbUGtYyQ6zgiqWsuA33KHPLw3cPsncupBPzZcEsrEcpVuoLrhZA6tAU61HDPdOYm71yq+bfY/b3EaX8yAJ3cCrIWhCsHez2V+R5rUUFZow3QKBgQC81Sr7OfE8qrt49OTh5awNRbEemEuHUS8PZAwuTj5R50xg8fJmqDfkIi7hjCtU1f1Rvi7pCQL6nm9gD+qnhUWcd8+bJPOxChyouKMsaZXaYCcEszs/fcRWc2AxMtYTFtTRzlGILKhzn8k3FkLKHtDLafDLbK+M06Gg5PEOeK1PqwKBgQCn0r+NDE09ImX9PVymwomScpPRWC/SxVgmzx3mGDG0AaRqGjfa1hskqxwx8eRfT3exwvQ9dvYaPyfATyQZ0uEkg7bJ47Jfr7YHkcKMWM1+u8iVxN4mn6Kj3aSfy71iumPzm8J/9BZHX1cTLzXDi1OiP+mQs+UXqwXGfvx/UZHSgw==",
    ContractAddress : "0xc9e086ef258954837536abfe1f4f73d64bba4841"
}
module.exports = env

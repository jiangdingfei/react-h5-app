// 引入报错
// import JSEncrypt from '@/lib/jsencrypt.min.js'
import JSEncrypt from 'jsencrypt';

// 私钥解密
export function decryptPrivate(data, privateKey) {
  let jsencrypt = new JSEncrypt();
  jsencrypt.setPrivateKey(privateKey);
  return jsencrypt.decrypt(data);
}
// 公钥加密
export function encryptPublic(data, publicKey) {
  let jsencrypt = new JSEncrypt();
  jsencrypt.setPublicKey(publicKey);
  return jsencrypt.encrypt(data);
}
// 私钥加密
export function encryptPrivate(data, privateKey) {
  let jsencrypt = new JSEncrypt();
  jsencrypt.setPrivateKey(privateKey);
  return jsencrypt.encrypt(data);
}
// 公钥解密
export function decryptPublic(data, publicKey) {
  let jsencrypt = new JSEncrypt();
  jsencrypt.setPublicKey(publicKey);
  return jsencrypt.decrypt(data);
}
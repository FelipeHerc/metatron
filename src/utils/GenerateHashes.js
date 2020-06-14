import CryptoJS from 'react-native-crypto-js'

function MD5 (stringSeed) {
  const seed = `${Date.now().toString} ${Math.random.toString()} ${stringSeed}`
  return CryptoJS.MD5(seed.toString()).toString(CryptoJS.enc.MD5)
}

export { MD5 }

var ghkeys = require('github-keys')
var ursa = require('ursa')
var once = require('once')
var crypto = require('crypto')

module.exports = function(user,searchSha,cb){
  if(typeof searchSha === 'function'){
    cb = searchSha
    searchSha = false
  }

  cb = once(cb)
  var keys = []
  ghkeys(user).on('data',function(data){
    var sum
    if(searchSha) {
      sum = sha(data)
      if(sum !== searchSha) return;
    }
    keys.push(format(data,sum))
  }).on('error',function(){
    return cb(err)
  }).on('end',function(){
    return cb(false,keys)
  })

}

// this just cleans random host name stuff off of a key to get a shasum you can compare to these ones.
//module.exports.shaKey = function(sshPubKey){
  // ssh-rsa base64data== random hostname stuff
  //return (sshPubKey+'').split(' ').slice(0,2)
//}


function format(data,sum){
  var key = data+''

  var pubSum = sum||sha(key)

  var pkcs8 = ursa.openSshPublicKey(key)

  var pem = pkcs8.toPublicPem()+''

  return {
    pub:key,// ssh-rsa key
    pem:pem,// pem pkcs8 key
    sha:pubSum
  }
}

function sha(key){
  return crypto.createHash('sha').update(key).digest('hex')
}

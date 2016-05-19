# github-keys-pem
github public keys but along with pem/pkcs8 format and shasum for crypto.createVerifier


```js
var githubkeys = require('github-keys-pem')

githubkeys('soldair',function(err,keys){
  console.log(keys)
})

```

outputs an array with objects like

```js
[ 
  {
    pub: 'ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQC1koA2A9xJdRU1aH2WDkvwPKeQf+cj5j/h+Lid7s+4+AYOTUIzFiRMAG2XT/fSPfPCTodow8235D7ZFpe0kLVVNZqqLUuMunJUc7ZzYk5MUm7h6l3JgvI4WBQTWkM9sc75AYD4jjK61Xp7Zc+Cbq/sSVBSfLai/L0+FQDNQOJ/yczCl0cF5qv5XhNPWaCvG9WaOltxN+YAucDbs/iTmHUDNIunC1VmxidTBk2IaJbkvL7rVpA3Oc15gUMBIhOccJaPTtzWAmRq1lsiTY5HO2yDnFRdYPZoM2E30NCA0zVvYJCXqdVNsytHcwat/FzXQTv/kbjmbxrwyvLEv/IIUd1/',
    pem: '-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAtZKANgPcSXUVNWh9lg5L\n8DynkH/nI+Y/4fi4ne7PuPgGDk1CMxYkTABtl0/30j3zwk6HaMPNt+Q+2RaXtJC1\nVTWaqi1LjLpyVHO2c2JOTFJu4epdyYLyOFgUE1pDPbHO+QGA+I4yutV6e2XPgm6v\n7ElQUny2ovy9PhUAzUDif8nMwpdHBear+V4TT1mgrxvVmjpbcTfmALnA27P4k5h1\nAzSLpwtVZsYnUwZNiGiW5Ly+61aQNznNeYFDASITnHCWj07c1gJkatZbIk2ORzts\ng5xUXWD2aDNhN9DQgNM1b2CQl6nVTbMrR3MGrfxc10E7/5G45m8a8MryxL/yCFHd\nfwIDAQAB\n-----END PUBLIC KEY-----\n',
    sha: '21c83a134232ee3155d6d6b8009b742d6a17a5b4' 
  } 
]
```

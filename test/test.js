var test = require('tape')
var keys = require('../')

test("works",function(t){

  keys('soldair','21c83a134232ee3155d6d6b8009b742d6a17a5b4',function(err,keys){
    t.ok(!err,'should not have error ['+err+']')
    t.equals(keys.length,1,'should have key')

    console.log(keys)

    t.end()
  })

})

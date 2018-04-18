let express = require('express');
let server  = new express();
let port = 3000;
server.use(express.static('./dist/'));
server.listen(port, function(err){
  if(err){
    console.log('err', err);
    return;
  }
  console.log('run at localhost:'+port);
});

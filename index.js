'use strict';

var child_process = require('child_process');

exports.handler = function(event, context) {

  var strToReturn = '';

  var proc = child_process.spawn('./php', [ "index.php", JSON.stringify(event), { stdio: 'inherit' } ]);

  proc.stdout.on('data', function (data) {

  	var dataStr = data.toString()
    console.log('stdout: ' + dataStr);
    strToReturn += dataStr

  });

  proc.on('close', function(code) {
    if(code !== 0) {
      return context.done(new Error("Process exited with non-zero status code"));
    }

    context.succeed(strToReturn);
  });
}
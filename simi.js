var request = require("request");
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'Saya : ', 
});
function simi(){
 rl.prompt();
 rl.on('line', function(answer){
request.post('https://wsapi.simsimi.com/190410/talk/',{headers: 
   { 'x-api-key': '8aIaWkXpBd5owczuh-_dCRtCzX8ZEPcSHzOH4TQ5',
     'Content-Type': 'application/json' },
  body: { utext: answer, lang: 'id' },
  json: true }, function (error, response, body) {
    if(error) return console.error(error);
    console.log('Simi :', body['atext']);
    rl.prompt();
   });
 }); 
}
simi();
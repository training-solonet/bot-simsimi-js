# bot-simsimi-js
Bot dengan api simsimi 
Untuk mencoba membuat bot sim simi kita perlu menginstal namanya simsimi melalui npm, kemudian juga daftar akun developer simsimi atau membuat akun.
selanjuutnya buat folder terserah, disini saya buat folder bernama bot dengan cara ketikan "mkdir bot" di cmd.
setelah membuat folder masuk kedalam folder tersebut dengan cara ketikkan "cd bot".
setelah itu ketikan "npm init"
kemudian enter dan ketikkan "npm install --save simsim" ini bertujuan untuk menginstall librari simsimi yang nantinnya akan kita gunakan.
jika sudah buat file bernama simi.js di text editor dan ketikan source code dibawah :

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

masukkan kode key simsimi di dalam code 'x-api-key':'',
kemudian jalan kan di terminal dengan cara mengetikkan "node simi.js".
bot chat simsimi siap digunakan.

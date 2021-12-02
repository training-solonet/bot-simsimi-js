# bot-simsimi-js
<b><h1><p align="center">BOT DENGAN API SIMSIMI</p></h1></b>

<p>Langkah awal pembuatan chat bot dengan api simsimi</p>
<ol> <li>Untuk mencoba membuat bot sim simi kita perlu menginstal namanya simsimi melalui npm.</li>
     <li>kemudian juga daftar akun developer simsimi atau membuat akun.</li>
     <li>selanjuutnya buat folder terserah, disini saya buat folder bernama bot dengan cara ketikan "mkdir bot" di cmd.</li>
     <li>setelah membuat folder masuk kedalam folder tersebut dengan cara ketikkan "cd bot".</li>
     <li>setelah itu ketikan "npm init".</li>
 </ol>
<p>kemudian enter dan ketikkan "npm install --save simsim" ini bertujuan untuk menginstall librari simsimi yang nantinnya akan kita gunakan.
jika sudah buat file bernama simi.js di text editor dan ketikan source code dibawah :</p>

<b><h1>SOURCE CODE</h1></b>

<p> var request = require("request");</p>
<p>const readline = require('readline');</p>
<p>const rl = readline.createInterface({</p>
  <p>input: process.stdin,</p>
  <p>output: process.stdout,</p>
  <p>prompt: 'Saya : ',</p>
<p>});</p>
<p>function simi(){</p>
 <p>rl.prompt();</p>
 <p>rl.on('line', function(answer){</p>
<p>request.post('https://wsapi.simsimi.com/190410/talk/',{headers:</p> 
   <p>{ 'x-api-key': '8aIaWkXpBd5owczuh-_dCRtCzX8ZEPcSHzOH4TQ5',</p>
     <p>'Content-Type': 'application/json' },</p>
  <p>body: { utext: answer, lang: 'id' },</p>
  <p>json: true }, function (error, response, body) {</p>
    <p>if(error) return console.error(error);</p>
    <p>console.log('Simi :', body['atext']);</p>
    <p>rl.prompt();</p>
   <p>});</p>
 <p>}); </p>
<p>}</p>
<p>simi();</p>

<h1>Cara Menjalankannya</h1>
masukkan kode key simsimi di dalam code 'x-api-key':'',
kemudian jalankan di terminal dengan cara mengetikkan "node simi.js".
bot chat simsimi siap digunakan.

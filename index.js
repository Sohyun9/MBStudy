const http = require('http'); //require 라이브러리를 가져다 쓰는 것
                              //const 선언과 동시에 초기화하고 값을 바꿀 수 없음

http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
}).listen(7777);
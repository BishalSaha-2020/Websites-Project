// console.log("Hello World");
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  // res.end('Hello DJ World');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Float Property</title>
      <style>
          body{
              margin:  auto;
              /* max-width:1400px; */
              width: 60%;
             
          }
          #box{
              float: right ;
              margin: 15px;
              width: 150px;
              height: 150px;
              border-radius: 5px;
              background-color: lightblue;
              padding: 5px 5px 5px 5px;
  
          }
          .sp{
              background-color: skyblue;
              /* padding: 15px; */
              color: white;
  
          }
          .clear{
              clear: right;
          }
      </style>
  </head>
  <body>
      <h1 >Float Property</h1>
      <img id="box" src="user.jpg" alt="">
      <h1 class="sp">Resume</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur qui cumque magnam odio delectus. Fuga ut doloremque, cumque est beatae asperiores sapiente suscipit provident saepe cupiditate obcaecati dignissimos soluta vero, corrupti impedit amet vel ex illo placeat eius similique! Accusamus iusto velit cupiditate.</p>
  
      <p class="clear">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur qui cumque magnam odio delectus. Fuga ut doloremque, cumque est beatae asperiores sapiente suscipit provident saepe cupiditate obcaecati dignissimos soluta vero, corrupti impedit amet vel ex illo placeat eius similique! Accusamus iusto velit cupiditate.</p>
  
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur qui cumque magnam odio delectus. Fuga ut doloremque, cumque est beatae asperiores sapiente suscipit provident saepe cupiditate obcaecati dignissimos soluta vero, corrupti impedit amet vel ex illo placeat eius similique! Accusamus iusto velit cupiditate.</p>
  </body>
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
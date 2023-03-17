const express = require('express');
const app = express();
const port = 8080;

app.listen(port, ()=>{
  console.log(port + 'is open!');
})

app.get("/", (request, response) => {
  response.render('test.ejs');
  // response.send("<h1>안녕하세요</h1>");
});


app.set("view engine", "ejs"); // ejs 를 뷰엔진으로 설정
app.set("/views", "views"); // views 파일들을 /views 폴더에 넣을거라 설정
app.use('/static',express.static(__dirname + '/static'));

app.get('/p', (req,res)=>{
  res.render(('p'))
})

app.get('/m', (req,res)=>{
  res.render('m');
})

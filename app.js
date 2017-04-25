var express = require('express');
var app = express();

app.use(express.static('public'));  // Directory 명을 넣어두면 정적인 파일 서비스 가능
app.get('/', function(req, res){
    res.send('Hello home page');
});
app.get('/github_logo', function(req, res){
    res.send('Hello Github!  <img src="/github_logo.png">');
});
app.get('/login', function(req, res){
    res.send('<h1>Login please<h1>');
});
app.listen(3000, function(){
    console.log('Connected 3000 port!');
});
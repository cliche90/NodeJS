var express = require('express');
var app = express();
app.locals.pretty = true;
app.set('view engine', 'jade');
app.set('views', './views');        // 없으면 자동으로 views 디렉토리를 찾는다.
app.use(express.static('public'));  // Directory 명을 넣어두면 정적인 파일 서비스 가능

app.get('/template', function(req, res){
    var params = {
        time: Date(),
        title: 'Jade'
    }
    res.render('temp', params);
});
app.get('/', function(req, res){
    res.send('Hello home page');
});
app.get('/dynamic', function(req, res){
    var lis = '';
    for(var i=0; i<5; i++){
        lis = lis + '<li>coding</li>';
    }
    var time = Date();
    var output = `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8">
            <title></title>
        </head>
        <body>
            Hello, Dynamic!
            <ul>
                ${lis}
            </ul>
            ${time}
        </body>
    </html>
    `;
    res.send(output);
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
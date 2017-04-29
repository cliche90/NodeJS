var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.locals.pretty = true;
app.set('view engine', 'jade');
app.set('views', './views');        // 없으면 자동으로 views 디렉토리를 찾는다.
app.use(express.static('public'));  // Directory 명을 넣어두면 정적인 파일 서비스 가능
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/form', function(req, res){
    res.render('form');
});
app.get('/form_receiver', function(req, res){
    var title = req.query.title;
    var description = req.query.description;
    res.send(title + ',' + description);
})
app.post('/form_receiver', function(req, res){
    var title = req.body.title;
    var description = req.body.description;
    res.send(title + ', ' + description);
});
app.get('/topic/:id', function(req, res){
    var topics = [
        'Javascript is....',
        'Nodejs is....',
        'Express is....'
    ];
    var output = `
        <a href="/topic/id=0">Javascript</a><br>
        <a href="/topic/id=1">Nodejs</a><br>
        <a href="/topic/id=2">Express</a><br>
        ${topics[req.params.id]}
    `;
    res.send(output);
});
app.get('topic/:id/:mode', function(req, res){
    res.send(req.params.id + ', ' + req.params.mode);
});
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
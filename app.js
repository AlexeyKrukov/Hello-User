var express = require('express'),
    bodyParser = require('body-parser'),
    nunjucks = require('nunjucks'),
    app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get("/", function(req, res){
   res.render('index.ejs'); 
});
app.post('/name/', function(req, res){
    res.redirect('/name/' + req.body.first_name);
});
app.get('/name/:name1', function(req, res){  
    res.send("Hello " + req.params.name1);
});
app.get(/.*$/, function(req, res){
    res.send("Error 404");
});
app.listen(8080);
const consolidate = require('consolidate');
const path = require('path');
const mustache = require('mustache-express');
const express = require('express');
const app = express();
app.use(express.static('views'));
//
// view engine setup
app.engine('html', consolidate.swig);
app.engine('mst', mustache());
app.set('views', path.join(__dirname, 'views')); 
app.set('view engine', 'mst');
app.use('/public', express.static(__dirname + '/public'));
// const script = require('./views/javascripts/script.js');


app.get("/", function(req, res) {

    res.render('index');
});
app.post("/prinial", function(req, res) {
    res.redirect('index');
});
app.post("/", function(req, res) {
    res.redirect('/');
 });
 app.post("/postjson.php", function(req, res) {
     console.log("suka");
     
    res.redirect('/');
 });


app.listen(3001, function() {console.log("server is ready");
});
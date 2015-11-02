var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');
var app = express();
var ig = require('instagram-node').instagram();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));
ig.use({ client_id: 'adc2c9ac47514dd8b373d8f488bb27b6',
         client_secret: '0aa833b8b53842378cc791499cbe2ed9' });


// Homepage with Instagram call
app.get('/',function(req,res){
		ig.user_media_recent('190598825',function(err,medias,pagination,remaining,limit){
		res.render('index', {medias: medias});
	});
});




app.listen(3000)
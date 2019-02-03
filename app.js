var express = require('express'),
    app     = express(),
    bodyParser  = require('body-parser');

var GitHub = require('github-api');

// basic auth
var gh = new GitHub({
    ClientID: 'cc8709b9ca60cb3ae1c6',
    ClientSecret: 'e19b5de6ebdf969ec6d0384cbf87d6a35736141c'
   /* also acceptable:
      token: 'MY_OAUTH_TOKEN'
    */
});
var user = gh.getUser('reactos');

app.set('view engine','ejs');

app.get('/',(req,res)=>{
    res.send('hello');
});

app.get('/results',(req,res)=>{
    user.listRepos(function(err, data) {
        // var b=JSON.stringify(data);
        // console.log(b);
        res.render('results',{data:data});
        
     });
    
});


app.listen(3000,()=>{
    console.log('server has started');
});


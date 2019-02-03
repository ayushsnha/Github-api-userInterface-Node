var express = require('express'),
    app     = express(),
    bodyParser  = require('body-parser');

var GitHub = require('github-api');

// basic auth
var gh = new GitHub({
   username: '*',
   password: '*'
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


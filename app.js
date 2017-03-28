var app = require('./config/express')();
var routeProduto = require('./routes/produtos')(app);

app.listen(3000, function(){
    console.log('servidor iniciado');
});
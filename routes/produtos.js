module.exports = function(app) {
    app.get('/produtos', function(req, res) {
        var mysql = require('mysql');
        var connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '1234',
            database: 'curso_nodejs'
        });

        // res.render("produtos/lista");    
        
        connection.query('select * from produtos', function(err, results){
            res.send(results);
        });


        connection.end();
        
    });
}
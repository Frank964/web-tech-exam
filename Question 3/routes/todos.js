var express = require('express');
var router = express.Router();

//var db = require('../config/db');
  
var db =
    {
        "user": "DB_A2A9C5_db_admin",
        "password": "pass@word123",
        "server": "sql6009.site4now.net",
        "database": "DB_A2A9C5_db"
    };

// module.exports = db;

var sql = require('mssql');
var result;

/* GET home page. */
router.get('/', function (req, res, next) {
  sql.connect(db, function (err) {
    if (err) console.log(err);

    var request = new sql.Request();

    request.query('select * from TblTodoRecord', function (err, result) {

      if (err) {
        console.log(err)
        res.send(err);
      }
      // var rowsCount = result.rowsAffected;
      sql.close();
      res.json(result.recordset);

    }); // request.query
  }); // sql.conn
}); // get /


/* GET Edit page. */
router.get('/edit/:id/', function (req, res, next) {

  sql.connect(db, function (err) {
    if (err)
      console.log(err);

    var request = new sql.Request();
    request.input('id', sql.Int, req.params.id)
    request.query("select * from TblTodoRecord where id=@id", function (err, result) {

      if (err) {
        console.log(err)
        res.send(err);
      }
      // var rowsCount = result.rowsAffected;
      sql.close();
      res.json(result.recordset);

    }); // request.query
  }); // sql.conn
});


/* POST Edit page. */
router.post('/update', function (req, res, next) {

  sql.connect(db, function (err) {
    if (err)
      console.log(err);

    var request = new sql.Request();
    request.input('id', sql.Int, req.body.id)
      .input('Title', sql.NVarChar(50), req.body.Title)
      .input('Description', sql.NVarChar(50), req.body.Description)
      .query('update TblTodoRecord set Title=@Title,Description=@Description where id=@id', function (err, result) {

        if (err) {
          console.log(err);
          res.send(err);
        }
        sql.close();
        res.redirect('/');
      });
  });
});

/* GET Add page. */
router.get('/add', function (req, res, next) {
  res.render('add', {
    route: 'add',
  });
});


/* POST Add page. */
router.post('/add', function (req, res, next) {

  sql.connect(db, function (err) {
    if (err)
      console.log(err);

    var request = new sql.Request();
    request.input('Title', sql.NVarChar(50), req.body.Title)
      .input('Description', sql.NVarChar(50), req.body.Description)
      .query('insert into TblTodoRecord (Title, Description) values (@Title, @Description)', function (err, result) {
        if (err) {
          console.log(err);
          res.send(err);
        }
        sql.close();
        res.redirect('/');
      });
  });
});

/* GET Delete page. */
router.get('/delete/:id', function (req, res, next) {

  sql.connect(db, function (err) {
    if (err)
      console.log(err);

    var request = new sql.Request();
    request.input('id', sql.Int, req.params.id)
      .query('delete from TblTodoRecord where id=@id', function (err, result) {

        if (err) {
          console.log(err);
          res.send(err);
        }
        sql.close();
        res.redirect('/');
      });
  });
});
module.exports = router;
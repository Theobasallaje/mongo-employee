var express = require('express')
var app = express()
const fs = require('fs');
const mongo = require('mongodb').MongoClient
const assert = require('assert');
// var contents = fs.readFileSync('departments.json', 'utf8');

var url = 'mongodb://heroku_66bgzx9f:cgcnusugs5mols8m92ovicjeud@ds149806.mlab.com:49806/heroku_66bgzx9f' || 'mongodb://localhost:27017/' || 'mongodb+srv://gargenal:Kindness1@clustermis6383-kynz5.mongodb.net/test?retryWrites=true';
var port = process.env.PORT || 3000;

app.get('/', function (req, res) {
  res.sendFile('index.html', { root: __dirname });
});

app.get('/oldestMale', function (req, res) {

  mongo.connect(url, function (err, client) {
    if (err) return console.error(err);

    const db = client.db('heroku_66bgzx9f');
    var collection = db.collection('employees');

    var options = {
      "sort": { "birth_date": 1 },
      "limit": 1
    };
    collection.find({"gender": "M"}, options).toArray(function (err, data) {
      if (err) {
        console.log(err);
      }
      console.log(data);
      return res.json(data);
    });
  });

});

app.get('/numEmployees', function (req, res) {
  mongo.connect(url, function (err, client) {
    if (err) return console.error(err);

    const db = client.db('heroku_66bgzx9f');
    var collection = db.collection('employees');

    var options = {
      "sort": { "birth_date": 1 },
      "limit": 1
    };
    collection.find({"gender": "M"}, options).toArray(function (err, data) {
      if (err) {
        console.log(err);
      }
      console.log(data);
      return res.json(data);
    });
  });
});

app.get('/managerGender', function (req, res) {
  mongo.connect(url, function (err, client) {
    if (err) return console.error(err);

    const db = client.db('heroku_66bgzx9f');
    var collection = db.collection('employees');

    var options = {
      "sort": { "birth_date": 1 },
      "limit": 1
    };
    collection.find({"gender": "M"}, options).toArray(function (err, data) {
      if (err) {
        console.log(err);
      }
      console.log(data);
      return res.json(data);
    });
  });
});

app.get('/highPaid', function (req, res) {
  mongo.connect(url, function (err, client) {
    if (err) return console.error(err);

    const db = client.db('heroku_66bgzx9f');
    var collection = db.collection('employees');

    var options = {
      "sort": { "birth_date": 1 },
      "limit": 1
    };
    collection.find({"gender": "M"}, options).toArray(function (err, data) {
      if (err) {
        console.log(err);
      }
      console.log(data);
      return res.json(data);
    });
  });
});

app.get('/empDuration', function (req, res) {
  mongo.connect(url, function (err, client) {
    if (err) return console.error(err);

    const db = client.db('heroku_66bgzx9f');
    var collection = db.collection('employees');

    var options = {
      "sort": { "birth_date": 1 },
      "limit": 1
    };
    collection.find({"gender": "M"}, options).toArray(function (err, data) {
      if (err) {
        console.log(err);
      }
      console.log(data);
      return res.json(data);
    });
  });
});

//Server Connection
app.listen(port, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log(`Listening on port on ${port}`);
  }
});

// db.employees.aggregate([
//   {
//     $group:
//     {
//       _id: "$gender",
//       minbirth_date: {
//         $min: "$birth_date",
//         "doc": { "$first": "$$ROOT" }
//       }
//     },
//   { "$replaceRoot": { "newRoot": "$doc" } }
//   }}}
// ])

// db.employees.aggregate([
//   {
//     "$group": {
//       "_id": "$gender",
//       "minbirth_date": {
//         $min: "$birth_date",
//         "doc": { "$first": "$$ROOT" }
//       },
//       "doc": { "$first": "$$ROOT" }
//     }
//   },
//   { "$replaceRoot": { "newRoot": "$doc" } }
// ])

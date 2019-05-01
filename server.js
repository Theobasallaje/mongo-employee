var express = require('express')
var app = express()
const fs = require('fs');
const mongo = require('mongodb').MongoClient
// var contents = fs.readFileSync('departments.json', 'utf8');

const url = 'mongodb://heroku_66bgzx9f:cgcnusugs5mols8m92ovicjeud@ds149806.mlab.com:49806/heroku_66bgzx9f' || 'localhost:27017';
var port = process.env.PORT || 3000;

app.get('/', function (req, res) {
  // res.send(contents)
  res.sendFile('index.html', { root: __dirname });
});

app.get('/oldestMale', function (req, res) {
  mongo.connect(url, (err, client) => {
    if (err) {
      console.error(err)
    } else {
      const db = client.db('heroku_66bgzx9f"');
      const collection = db.collection('employees');
      var result = collection.find({ "gender": "M"  }).sort({"birth_date" : 1}).limit(1).pretty(); 
      return res.json(result);
    }
    //...
  })
});
app.get('/numEmployees', function (req, res) {
  mongo.connect(url, (err, client) => {
    if (err) {
      console.error(err)
    } else {
      const db = client.db('kennel');
      const collection = db.collection('dogs');
      return res.json()
    }
    //...
  })
});
app.get('/managerGender', function (req, res) {
  mongo.connect(url, (err, client) => {
    if (err) {
      console.error(err)
    } else {
      const db = client.db('kennel');
      const collection = db.collection('dogs');
      return res.json()
    }
    //...
  })
});
app.get('/highPaid', function (req, res) {
  // return res.json(contents)
  mongo.connect(url, (err, client) => {
    if (err) {
      console.error(err)
    } else {
      const db = client.db('kennel');
      const collection = db.collection('dogs');
      return res.json()
    }
    //...
  })
});
app.get('/empDuration', function (req, res) {
  // return res.json(contents)
  mongo.connect(url, (err, client) => {
    if (err) {
      console.error(err)
    } else {
      const db = client.db('kennel');
      const collection = db.collection('dogs');
      return res.json()
    }
    //...
  })
});

//Server Connection
app.listen(port, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log(`Listening on port on 3000 ${port}`);
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

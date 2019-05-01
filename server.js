var express = require('express')
var app = express()
const fs = require('fs');
const mongo = require('mongodb').MongoClient
// var contents = fs.readFileSync('departments.json', 'utf8');

const url = 'mongodb://localhost:27017'

app.get('/', function (req, res) {
    // res.send(contents)
    res.sendFile('index.html' , { root : __dirname});
});

app.get('/oldest', function (req, res) {
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
app.listen(process.env.PORT || 3000, function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log("Listening on port on 8080");
    }
});
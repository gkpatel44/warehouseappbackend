const Play = require("../models/play.model");

const redis = require('redis');
const client = redis.createClient();

function getRandomString(length) {
  var randomChars = '0123456789';
  var result = '';
  for ( var i = 0; i < length; i++ ) {
      result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
  }
  return result;
}

exports.add_bat = (req, res) => {

  let play = new Play({
    user_id: req.userDetails.user_id,
    slote_id: "607d043ed12bb6225e9f23e7",
    number: req.body.number,
    status: req.body.status,
    amount: req.body.amount,
  });

  if (!(play.number && play.status && play.amount)) {
    return res.status(400).send({ error: "Please enter all values" });
  }

  play.save((err, data) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      // console.log(data);
      res.status(200).send(data);
    let key = getRandomString(4);
     const a = client.setex(key, 150 ,JSON.stringify(data));
      
      setInterval( () => {
        client.get(key, (err, value) => {
          if (err) {
            throw err;
          }
          if (value) {
            console.log('value:', value);
          }
          else {
            console.log('expired:',value);
            process.exit();
          }
        });
      }, 5e3);
    }
  });
};


exports.win_bat = async (req, res) => {
  try {
    let no = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    
    let no1 = [];
    for (let i = 0; i < no.length; i++) {
      const a = Play.find({ number: no[i] });
      let data = await a.countDocuments();
      let data1 = {
        no: no[i],
        count: data,
      };
      no1.push(data1);
    }
    // console.log("no1",no1);
    
    var lowest = Number.POSITIVE_INFINITY;
    var tmp;
    for (var i = no1.length - 1; i >= 0; i--) {
      tmp = no1[i].count;
      if (tmp < lowest) lowest = no1[i];
    }
    console.log("lowest",lowest);
    return res.status(200).send(lowest);
  } catch (error) {
    console.log(error);
  }
};

exports.find_bats = (req, res) => {
  Play.find(
    { user_id: req.userDetails.user_id },
    { _id: 0, user_id: 0, created_at: 0, __v: 0 },
    (err, data) => {
      if (err) {
        return res.status(400).send(err);
      } else {
        console.log("this is data", data);
        res.status(200).send(data)
      }
    }
  ).limit(5);
};
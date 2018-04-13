var express = require("express");
var app = express();
var bodyParser = require("body-parser");
const axios = require("axios");
const apikey =
  "https://api.telegram.org/bot540539721:AAHzt6XkCTLwwupyqWRjdhTRiMCSrK7YRNU";

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.post("/new-message", function(req, res) {
  const { message } = req.body;

  if (message.text.toLowerCase().indexOf("@bot") < 0) {
    return res.end();
  } else if (message.text.toLowerCase().indexOf("sheet") >= 0) {
    axios
      .post(`${apikey}/sendMessage`, {
        chat_id: message.chat.id,
        text:
          "https://docs.google.com/spreadsheets/d/16BueSIDpsdKJoQVQNJM-mYfM-1CWogEJ-ugm5e6a31A/edit#gid=0"
      })
      .then(response => {
        console.log("sent the spreadsheet");
        res.end("ok");
      })
      .catch(err => {
        console.log("Error:", err);
        res.end("Error:", err);
      });
  } else if (message.text.toLowerCase().indexOf("tits") >= 0) {
    axios
      .post(`${apikey}/sendMessage`, {
        chat_id: message.chat.id,
        text: "do you kiss your mother with that mouth?"
      })
      .then(response => {
        console.log("Message posted");
        res.end("ok");
      })
      .catch(err => {
        console.log("Error :", err);
        res.end("Error :" + err);
      });
  } else if (message.text.toLowerCase().indexOf("help") >= 0) {
    axios
      .post(`${apikey}/sendMessage`, {
        chat_id: message.chat.id,
        text:
          "Hey there, buddy. I can point you in the right direction for the ROKCFit rules wiki, the weekly challenge, the current flash challenge, or mile multipliers. Just ask!"
      })
      .then(response => {
        console.log("Message posted");
        res.end("ok");
      })
      .catch(err => {
        console.log("Error :", err);
        res.end("Error :" + err);
      });
  } else if (
    message.text.toLowerCase().indexOf("wiki") >= 0 ||
    message.text.toLowerCase().indexOf("rules") >= 0
  ) {
    axios
      .post(`${apikey}/sendMessage`, {
        chat_id: message.chat.id,
        text:
          "Check out the ROKCFit wiki, which contains the rules for the challenge: https://www.reddit.com/r/ROKCFIT/wiki/index"
      })
      .then(response => {
        console.log("Message posted");
        res.end("ok");
      })
      .catch(err => {
        console.log("Error :", err);
        res.end("Error :" + err);
      });
  } else if (
    message.text.toLowerCase().indexOf("challenge") >= 0 &&
    message.text.toLowerCase().indexOf("flash") < 0
  ) {
    axios
      .post(`${apikey}/sendMessage`, {
        chat_id: message.chat.id,
        text:
          "Check out the weekly challenges https://www.reddit.com/r/ROKCFIT/comments/8ak1dg/r15_week1_weekly_challenge_exercises/"
      })
      .then(response => {
        console.log("Message posted");
        res.end("ok");
      })
      .catch(err => {
        console.log("Error :", err);
        res.end("Error :" + err);
      });
  } else if (message.text.toLowerCase().indexOf("flash") >= 0) {
    axios
      .post(`${apikey}/sendMessage`, {
        chat_id: message.chat.id,
        text: "There are no flash challenges at the moment"
      })
      .then(response => {
        console.log("Message posted");
        res.end("ok");
      })
      .catch(err => {
        console.log("Error :", err);
        res.end("Error :" + err);
      });
  } else if (
    message.text.toLowerCase().indexOf("thanks") >= 0 ||
    message.text.toLowerCase().indexOf("thank you") >= 0 ||
    message.text.toLowerCase().indexOf("thankyou") >= 0
  ) {
    axios
      .post(`${apikey}/sendMessage`, {
        chat_id: message.chat.id,
        text: "No problem, buddy"
      })
      .then(response => {
        console.log("Message posted");
        res.end("ok");
      })
      .catch(err => {
        console.log("Error :", err);
        res.end("Error :" + err);
      });
  } else if (message.text.toLowerCase().indexOf("multipliers") >= 0) {
    axios
      .post(`${apikey}/sendMessage`, {
        chat_id: message.chat.id,
        text:
          "4 bikes miles = 1 mile \n 2 roller/ice/in line skating miles = 1 mile \n 1 mile running/walking/being on the elliptical or treadmill = 1 mile \
          \n .5 miles rowing = 1 mile \n .2 miles swimming = 1 mile"
      })
      .then(response => {
        console.log("Message posted");
        res.end("ok");
      })
      .catch(err => {
        console.log("Error :", err);
        res.end("Error :" + err);
      });
  } else if (message.text.toLowerCase().indexOf("love") >= 0) {
    axios
      .post(`${apikey}/sendMessage`, {
        chat_id: message.chat.id,
        text: "what is love? <3"
      })
      .then(response => {
        console.log("Message posted");
        res.end("ok");
      })
      .catch(err => {
        console.log("Error :", err);
        res.end("Error :" + err);
      });
  } else {
    axios
      .post(`${apikey}/sendMessage`, {
        chat_id: message.chat.id,
        text: "wat?"
      })
      .then(response => {
        console.log("Image posted");
        res.end("ok");
      })
      .catch(err => {
        console.log("Error :", err);
        res.end("Error :" + err);
      });
  }
});

app.listen(3000, function() {
  console.log("Telegram app listening on port 3000!");
});

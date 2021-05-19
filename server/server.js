const express = require('express');
const cors = require('cors');

// instantiate express so it has express method
const app = express(); 
// parse our data
app.use(express.json());
app.use(cors());

app.get('/heartbeat', (req, res) => {
  res.json({
    "I am" : "Up!"
  });
});

// posting means send to the server (server is not saving it)
app.post('/newcontact', (req, res) => {
  console.log("$$$$$$$$$$$$$$$$req body!!!!!!!!!********", req.body);
  // req.body is now readable data in jsondue to express.json()
  res.json({
    "data received" : req.body
  });
});

app.listen('8080', () => {
  console.log('Server runs at port 8080');
});
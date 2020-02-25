// Require modules
const express = require('express');
const app = express();
const skillsRouter = require('./routes/skills');
const methodOverride = require('method-override');
const port = 3000;

// Configure the app (app.set)
// middleware
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.render('index');
});

// Mount middleware (app.use)
app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method'));

app.use('/skills', skillsRouter); 

// body parser
    
// Tell the app to listen on port 3000
app.listen(port, function() {
  console.log('Listening on port 3000');
});
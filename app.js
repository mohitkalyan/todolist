const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.set('view engine', 'ejs')

// var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

const port = 3000

var list = [];

app.get('/', (req, res) => {
  var options = { weekday: 'long', month: 'long', day: 'numeric' };
  var day  = new Date();
  var today = day.toLocaleDateString("en-US", options);

  res.render('todolist', {day : today , item : list});
})

app.post('/', (req, res)=>{
  var task = req.body.task;
  list.push(task);
  res.redirect('/')

})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

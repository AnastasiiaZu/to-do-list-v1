const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const items = ["Buy food", "Cook the food", "Eat the food"];
const workItems = ["Do the work"]

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public")); //to serve up all the static files, including CSS!

app.set('view engine', 'ejs');

// The HOME route //

app.get("/", function(req, res) {
  const day = date.getDate();
  res.render("list", {
    listTitle: day,
    newListItems: items
  }); //newListItems is also an array because items is an array
});

app.post("/", function(req, res) { //user can POST and redirect in either the main or Work routes

  const item = req.body.newItem;

  if (req.body.list === "Work List") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  };
});

//The WORK route//

app.get("/work", function(req, res) {

  res.render("list", {
    listTitle: "Work List",
    newListItems: workItems
  });
});


//the ABOUT route//

app.get("/about", function(req, res) {
  res.render("about");
});






app.listen(3000, function() {
  console.log("This server is running on port 3000!")
});

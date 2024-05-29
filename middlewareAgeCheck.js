const express = require("express");
const app = express();
//function that returns a boolean if the age is enough to access
function isOldEnoughMiddleware(req, res, next) {
  const age = req.query.age;
  if (age >= 14) {
    next();
  } else {
    res.json({
      msg: "You don't have the access",
    });
  }
}
//to use the middleware for all the below routs we can use "app.use(isOldEnoughMiddleware);", this will only be used in the app.get those are below it
app.get("/access1", isOldEnoughMiddleware, function (req, res) {
  res.json({
    msg: "You have gotten the access1",
  });
});

app.get("/access2", isOldEnoughMiddleware, function (req, res) {
  res.json({
    msg: "You have gotten the access2",
  });
});
app.listen(3000);

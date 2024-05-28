const express = require("express");
const app = express();
//function that returns a boolean if the age is enough to access
function isOldEnough(age) {
  if (age >= 14) {
    return true;
  } else {
    return false;
  }
}
app.get("/access1", function (req, res) {
  if (isOldEnough(req.query.age)) {
    res.json({
      msg: "You have gotten the access1",
    });
  } else {
    res.status(404).json({
      msg: "You don't have the access",
    });
  }
});

app.get("/access2", function (req, res) {
  if (isOldEnough(req.query.age)) {
    res.json({
      msg: "You have gotten the access1",
    });
  } else {
    res.status(404).json({
      msg: "You don't have the access",
    });
  }
});
app.listen(3000);

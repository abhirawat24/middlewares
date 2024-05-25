const express = require("express");

const app = express();
app.get("/health-checkup", function (req, res) {
  // Do health checks here
  const kidneyId = req.query.kidneyId;
  const username = req.headers.username;
  const password = req.headers.password;
  
  if (username !== "abhishek" || password !== "ok") {
    res.status(403).json({
      msg: "Unauthorized",
    });
    return
  }
  
  if (kidneyId !== "1" && kidneyId !== "2") {
    res.status(400).json({
      msg: "Wrong input",
    });
    return;
  }
  
  // Do something here 
  res.send("You seem healthy");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

const express = require("express");
const app = express();

var users = [
  {
    name: "John",
    kidneys: [
      {
        healthy: false,
      },
    ],
  },
];

//Get
app.get("/", (req, res) => {
  const johnKidneys = users[0].kidneys;
  const numberofKidneys = johnKidneys.length;
  let numberofHealthyKidneys = 0;
  for (let i = 0; i < johnKidneys.length; i++) {
    if (johnKidneys[i].healthy) {
      numberofHealthyKidneys = numberofHealthyKidneys + 1;
    }
  }

  const numberofUnhealthyKidneys = numberofKidneys - numberofHealthyKidneys;
  res.json({
    numberofKidneys,
    numberofHealthyKidneys,
    numberofUnhealthyKidneys,
  });
  console.log(johnKidneys);
  console.log(numberofKidneys);
});

//Post
// whenever we use req.body, it becomes necessary to use middlewares
const BodyParser = require("body-parser");
app.use(BodyParser.json());

app.post("/", (req, res) => {
  const isHealthy = req.body.isHealthy;
  users[0].kidneys.push({
    healthy: isHealthy,
  });
  res.json({
    msg: "Done!",
  });
});

// Put

app.put("/", (req, res) => {
  for (let i = 0; i < users[0].kidneys.length; i++) {
    users[0].kidneys[i].healthy = true;
  }
  res.json({});
});

// delete

app.delete("/", (req, res) => {
  if (isThereAtleastOneUnhealtyKidney()) {
    const newKidneys = [];
    for (let i = 0; i < users[0].kidneys.length; i++) {
      if (users[0].kidneys[i].healthy) {
        newKidneys.push({
          healthy: true,
        });
      }
    }
    users[0].kidneys = newKidneys;
    res.json({ msg: "done" });
  } else {
    res.status(411).json({
      msg: "You have no bad kidneys",
    });
  }
});

function isThereAtleastOneUnhealtyKidney() {
  let atleastOneUnhealthyKidney = false;
  for (let i = 0; i < users[0].kidneys.length; i++) {
    if (!users[0].kidneys[i].healthy) {
      atleastOneUnhealthyKidney = true;
    }
  }

  return atleastOneUnhealthyKidney;
}

app.listen(3000, () => {
  console.log("Server is running on the port 3000");
});

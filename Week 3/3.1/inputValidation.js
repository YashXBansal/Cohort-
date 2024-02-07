const express = require("express");
const app = express();
const z = require("zod");
// const schema = zod.array(zod.number());

//  {
//     email: string => small
//     password: atleast 8 characters
//     country: "In", "US"
// }

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  country: z.literal("In").or(z.literal("US")),
  kidneys: z.array(z.number())
});

app.use(express.json());

app.post("/health-checkup", (req, res) => {
  const kidneys = req.body.kidneys;
  const response = schema.safeParse(kidneys);
  if (!response.success) {
    res.status(401).send({
      msg: "Input in invavlid",
    });
  } else {
    res.send({
      response,
    });
  }
});

app.listen(3000, () => {
  console.log("Server is listening at Port 3000");
});

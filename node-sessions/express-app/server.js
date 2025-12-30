import express from "express";
import { v4 as uuidv4 } from "uuid";
const app = express();

const port = 3000;

const users = [];

// app.use((req, res, next) => {
//   console.log(req.url);
//   req.chaman = "hello chaman ch.....";
//   next();
// });

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  // console.log(req.chaman);
  res.sendFile(`${process.cwd()}/pages/index.html`);
});
app.get("/api", (req, res) => {
  res.json({ message: "api server" });
});
app
  .route("/contact")
  .get((req, res) => {
    res.sendFile(`${process.cwd()}/pages/form.html`);
  })
  .post((req, res) => {z
    console.log(req.body);
    users.push({ ...req.body, id: uuidv4() });
    res.redirect("/users");
  });

app.get("/users", (req, res) => res.json({ users }));

app.listen(port, () => {
  console.log("server started on port : ", 3000);
});

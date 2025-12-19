const http = require("http");
const fs = require("fs");
const replace_template = require("./modules/replaceTemplate.js");

const temp_overview = fs.readFileSync(
  "./templates/temp_overview.html",
  "utf-8"
);
const temp_card = fs.readFileSync("./templates/temp_card.html", "utf-8");

const dataObj = fs.readFileSync("./dev-data/data.json", "utf-8");
// console.log(dataObj);

const server = http.createServer((req, res) => {
  if (req.url === "/" || req.url === "/overview") {
    let data = JSON.parse(dataObj);

    filled_cards = data.map((product) => replace_template(temp_card, product));

    // console.log(filled_cards.join(""));

    res.end(
      temp_overview.replace("{% FARM_PRODUCTS %}", filled_cards.join(""))
    );
  } else if (req.url === "/api") {
    res.end(dataObj);
  }
});

server.listen(3000, "127.0.0.1", () => {
  console.log("server started on port :", 3000);
});

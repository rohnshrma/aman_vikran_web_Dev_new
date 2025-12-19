const fs = require("fs");
const http = require("http");
const url = require("url");
const replaceTemplate = require("./modules/replaceTemplate");
let temp_card = fs.readFileSync(
  `${__dirname}/templates/template_card.html`,
  "utf-8"
);
let temp_overview = fs.readFileSync(
  `${__dirname}/templates/template_overview.html`,
  "utf-8"
);
let temp_product = fs.readFileSync(
  `${__dirname}/templates/template_product.html`,
  "utf-8"
);

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`);
const dataObj = JSON.parse(data);

const server = http.createServer((req, res) => {
  const { query, pathname } = url.parse(req.url, true);

  // console.log(query, pathname);

  if (pathname === "/overview" || pathname === "/") {
    let products_map = dataObj.map((el) => replaceTemplate(temp_card, el));

    let products_str = products_map.join("");

    temp_overview = temp_overview.replace("{% PRODUCT_CARDS %}", products_str);

    res.end(temp_overview);
  } else if (pathname === "/product") {
    console.log(dataObj, query.id);
    let product = dataObj.find((obj) => obj.id === Number(query.id));

    let output = replaceTemplate(temp_product, product);
    res.end(output);
  } else if (pathname === "/api") {
    console.log(dataObj);
    res.writeHead(200, {
      "content-type": "application/json",
    });
    res.end(data);
  } else {
    res.writeHead(404, {
      "content-type": "text/html",
      "my-own-header": "hello world",
    });

    res.end("Page Not Found!");
  }
});

server.listen(3000, "127.0.0.1", () => {
  console.log("server started on port : ", 3000);
});
///////////////////////// file system

// let resText = fs.readFileSync("./txt/input.txt", "utf-8");
// console.log(resText);

// let outputText = `Thats all we know about avacardos : ${resText}\nCreated on : ${Date.now()}`;

// let res = fs.writeFileSync("./txt/input.txt", outputText);

// fs.readFile("./txt/input.txt", "utf-8", (err, data) => {
//   if (err) console.log(err);
//   else console.log(data);
// });

// console.log("reading file...");

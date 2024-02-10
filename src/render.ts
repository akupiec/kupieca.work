import render from "preact-render-to-string";
import { Home } from "./home/home";
import * as fs from "fs";
import { Ala } from "./ala/ala";
import { Art } from "./art/art";

const indexTemplate = fs.readFileSync("src/template.html", "utf8");

const configs = [
  {
    out: "_site/index.html",
    head: `<link href="./common.css" rel="stylesheet" />
<link href="./home.css" rel="stylesheet" />`,
    body: render(Home),
  },
  {
    out: "_site/ala/index.html",
    head: `<link href="../common.css" rel="stylesheet" />
<link href="./ala.css" rel="stylesheet" />`,
    body: render(Ala),
  },
  {
    out: "_site/art/index.html",
    head: `<link href="../common.css" rel="stylesheet" />
<link href="./art.css" rel="stylesheet" />`,
    body: render(Art),
  },
];

configs.forEach((conf) =>
  fs.writeFileSync(conf.out, indexTemplate.replace("{{head}}", conf.head).replace("{{body}}", conf.body)),
);

import render from "preact-render-to-string";
import { Home } from "./home/home";
import * as fs from "fs";
import { Ala } from "./ala/ala";
import { Art } from "./art/art";
import { AlaAbout } from "./ala/about/about";
import * as path from "path";

const indexTemplate = fs.readFileSync("src/template.html", "utf8");

const configs = [
  {
    out: "_site/index.html",
    head: `<link href="/styles/common.css" rel="stylesheet" />
<link href="/styles/home.css" rel="stylesheet" />`,
    body: render(Home),
  },
  {
    out: "_site/ala/index.html",
    head: `<link href="/styles/common.css" rel="stylesheet" />
<link href="/styles/ala.css" rel="stylesheet" />`,
    body: render(Ala),
  },
  {
    out: "_site/ala/about/index.html",
    head: `<link href="/styles/common.css" rel="stylesheet" />
<link href="/styles/ala-about.css" rel="stylesheet" />`,
    body: render(AlaAbout),
  },
  {
    out: "_site/art/index.html",
    head: `<link href="/styles/common.css" rel="stylesheet" />
<link href="/styles/art.css" rel="stylesheet" />`,
    body: render(Art),
  },
];

configs.forEach((conf) => {
  if (!fs.existsSync(path.dirname(conf.out))) {
    fs.mkdirSync(path.dirname(conf.out));
  }
  fs.writeFileSync(conf.out, indexTemplate.replace("{{head}}", conf.head).replace("{{body}}", conf.body));
});

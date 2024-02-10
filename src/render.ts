import render from 'preact-render-to-string';
import { Home } from "./home/home";
import * as fs from "fs";

const indexTemplate =  fs.readFileSync('src/template.html', 'utf8')

let out = indexTemplate.replace('{{head}}', '<link href="./home.css" rel="stylesheet" />').replace('{{body}}', render(Home));
fs.writeFileSync('_site/index.html', out);

import render from "preact-render-to-string";
import { Home } from "../src/home/home";
import * as fs from "fs";
import { Ala } from "../src/ala/ala";
import { Art } from "../src/art/art";
import { AlaAbout } from "../src/ala/about/about";
import * as path from "path";
import { IndexTemplate } from "./indexTemplate";
import { HealthQuestProject } from "../src/ala/healthQuestProject/project";
import { ConversationWithDad } from "../src/ala/conversationWithDadProject/project";
import { uxWritingFlashcards } from "../src/ala/uxWritingFlashcards/project";
import { moralDesignClub } from "../src/ala/moralDesignClub/project";
import { kinoPodBaranami } from "../src/ala/kinoPodBaranami/project";

const configs = [
  {
    out: "_site/index.html",
    css: ["/common.css", "/home/home.css"],
    body: render(Home),
  },
  {
    out: "_site/ala/index.html",
    css: ["/common.css", "/ala/ala.css"],
    body: render(Ala),
  },
  {
    out: "_site/ala/about/index.html",
    css: ["/common.css", "/ala/about/about.css"],
    body: render(AlaAbout),
  },
  {
    out: "_site/art/index.html",
    css: ["/common.css", "/art/art.css"],
    body: render(Art),
  },
  {
    out: "_site/ala/healthQuestProject/index.html",
    css: ["/common.css", "/ala/healthQuestProject/project.css"],
    body: render(HealthQuestProject),
  },

  {
    out: "_site/ala/conversationWithDadProject/index.html",
    css: ["/common.css", "/ala/conversationWithDadProject/project.css"],
    body: render(ConversationWithDad),
  },

  {
    out: "_site/ala/uxWritingFlashcards/index.html",
    css: ["/common.css", "/ala/uxWritingFlashcards/project.css"],
    body: render(uxWritingFlashcards),
  },

  {
    out: "_site/ala/moralDesignClub/index.html",
    css: ["/common.css", "/ala/moralDesignClub/project.css"],
    body: render(moralDesignClub),
  },

  {
    out: "_site/ala/kinoPodBaranami/index.html",
    css: ["/common.css", "/ala/kinoPodBaranami/project.css"],
    body: render(kinoPodBaranami),
  },
];

configs.forEach((conf) => {
  if (!fs.existsSync(path.dirname(conf.out))) {
    fs.mkdirSync(path.dirname(conf.out));
  }
  fs.writeFileSync(conf.out, IndexTemplate({ css: conf.css, body: conf.body }));
});

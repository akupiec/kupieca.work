import render from "preact-render-to-string";
import { Home } from "../src/home/home";
import * as fs from "fs";
import { Ala } from "../src/ala/ala";
import { Art } from "../src/art/art";
import { AlaAbout } from "../src/ala/about/about";
import * as path from "path";
import { IndexTemplate } from "./indexTemplate";
import { HealthQuestProject } from "../src/ala/healthQuestProject/project";
import { ConversationWithDad } from "../src/ala/ConversationWithDadProject/project";
import { UXWritingFlashcards } from "../src/ala/UXWritingFlashcards/project";
import { MoralDesignClub } from "../src/ala/MoralDesignClub/project";
import { KinoPodBaranami } from "../src/ala/KinoPodBaranami/project";

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
    out: "_site/ala/ConversationWithDadProject/index.html",
    css: ["/common.css", "/ala/ConversationWithDadProject/project.css"],
    body: render(ConversationWithDad),
  },

  {
    out: "_site/ala/UXWritingFlashcards/index.html",
    css: ["/common.css", "/ala/UXWritingFlashcards/project.css"],
    body: render(UXWritingFlashcards),
  },

  {
    out: "_site/ala/MoralDesignClub/index.html",
    css: ["/common.css", "/ala/MoralDesignClub/project.css"],
    body: render(MoralDesignClub),
  },

  {
    out: "_site/ala/KinoPodBaranami/index.html",
    css: ["/common.css", "/ala/KinoPodBaranami/project.css"],
    body: render(KinoPodBaranami),
  },
];

configs.forEach((conf) => {
  if (!fs.existsSync(path.dirname(conf.out))) {
    fs.mkdirSync(path.dirname(conf.out));
  }
  fs.writeFileSync(conf.out, IndexTemplate({ css: conf.css, body: conf.body }));
});

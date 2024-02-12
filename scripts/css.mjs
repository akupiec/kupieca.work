import { sassPlugin } from "esbuild-sass-plugin";
import esbuild from "esbuild";

const isWatchMode = process.argv.some((a) => a.includes("watch"));

const ctx = await esbuild.context({
  entryPoints: [
    "src/common.scss",
    "src/home/home.scss",
    "src/ala/ala.scss",
    "src/ala/about/about.scss",
    "src/ala/healthQuestProject/project.scss",
    "src/ala/ConversationWithDadProject/project.scss",
    "src/ala/UXWritingFlashcards/project.scss",
    "src/ala/MoralDesignClub/project.scss",
    "src/ala/KinoPodBaranami/project.scss",
    "src/art/art.scss",
  ],
  bundle: true,
  plugins: [
    sassPlugin({
      loadPaths: ["src/"],
    }),
  ],
  external: ["/assets/*.svg"],
  outdir: "_site",
});

if (isWatchMode) {
  await ctx.watch();
  console.log("watching scss...");
} else {
  await ctx.rebuild();
  await ctx.dispose();
}

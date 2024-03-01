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
    "src/ala/conversationWithDadProject/project.scss",
    "src/ala/uxWritingFlashcards/project.scss",
    "src/ala/moralDesignClub/project.scss",
    "src/ala/kinoPodBaranami/project.scss",
    "src/art/art.scss",
    "src/shared/project/sideNav/sideNav.fn.ts",
  ],
  bundle: true,
  minify: true,
  sourcemap: "linked",
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

import { sassPlugin } from "esbuild-sass-plugin";
import esbuild from "esbuild";

const isWatchMode = process.argv.some((a) => a.includes("watch"));

const ctx = await esbuild.context({
  entryPoints: [
    { in: "src/common.scss", out: "styles/common" },
    { in: "src/home/home.scss", out: "styles/home" },
    { in: "src/ala/ala.scss", out: "styles/ala" },
    { in: "src/ala/about/about.scss", out: "styles/ala-about" },
    { in: "src/art/art.scss", out: "styles/art" }
  ],
  bundle: true,
  plugins: [
    sassPlugin({
      loadPaths: ["src/"],
    })
  ],
  external: ['/assets/*.svg'],
  outdir: "_site"
});

if (isWatchMode) {
  await ctx.watch();
  console.log("watching scss...");
} else {
  await ctx.rebuild();
  await ctx.dispose();
}

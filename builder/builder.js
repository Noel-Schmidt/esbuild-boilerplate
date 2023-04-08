import esbuild from "esbuild";
import copyStaticFiles from "esbuild-copy-static-files"

esbuild.build({
    bundle: true,
    target: "esnext",
    format: "esm",
    logLevel: "info",
    minify: true,
    entryPoints: ["src/main.ts"],
    outfile: "dist/main.js",
    external: [],
    plugins: [
            /**
         * Add external folders
         * EXAMPLE:
         *
         * copyStaticFiles({
         *       src: "src/views",
         *       dest: "dist/views"
         * }),
         *
         */
]
})

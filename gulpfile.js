"use strict";
// Gulp
import gulp from "gulp";
// configs
import { path } from "./gulp/config/path.js";
import { plugins } from "./gulp/config/plugins.js";

global.app = {
    isBuild: process.argv.includes("--build"),
    isDev: !process.argv.includes("--build"),
    path: path,
    gulp: gulp,
    plugins: plugins,
}

// tasks
import { copy } from "./gulp/tasks/copy.js";
import { reset } from "./gulp/tasks/reset.js";
import { html } from "./gulp/tasks/html.js";
import { server } from "./gulp/tasks/server.js";
import { scss } from "./gulp/tasks/scss.js";
import { js } from "./gulp/tasks/javascript.js";
import { image } from "./gulp/tasks/images.js";
import { otfToTtf, tt2ToWoff } from "./gulp/tasks/fonts.js";
import { svgSprive } from "./gulp/tasks/svgSprite.js";

// Наблюдение за файлами
function watcher() {
    gulp.watch(path.watch.files, copy);
    gulp.watch(path.watch.html, html);
    gulp.watch(path.watch.scss, scss);
    gulp.watch(path.watch.js, js);
    gulp.watch(path.watch.image, image);
}

export { svgSprive }

const fonts = gulp.series(otfToTtf, tt2ToWoff);
const mainTasks = gulp.parallel(fonts, gulp.parallel(copy, html, scss, js, image));

const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));
const build = gulp.series(reset, mainTasks);

export { dev }
export { build }

gulp.task('default', dev);
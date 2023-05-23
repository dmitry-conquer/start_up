import imagemin from "gulp-imagemin";
import webp from "gulp-webp";

export const img = () => {
   return (
      app.gulp
         .src(app.path.src.images)

         .pipe(app.plugins.newer(app.path.build.images))
         .pipe(
            webp({
               quality: 85,
            }),
         )

         .pipe(app.gulp.dest(app.path.build.images))
         .pipe(app.plugins.browserSync.stream())
   );
};

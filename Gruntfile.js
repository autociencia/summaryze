module.exports = function(grunt) {
    grunt.initConfig({
        ts: {
            default : {
                src: ['./summaryze/static/summaryze/**/*.ts', '!node_modules/**'],
                dest: './summaryze/static/summaryze/js/app.js',
                options: {
                    target: 'es6',
                    rootDir: "./",
                    noEmitOnError: true,
                    noImplicitAny: true,
                    removeComments: true,
                    module: 'system',
                    strictNullChecks: true,
                    sourceMap: true
                }
            }
        },
        uglify: {
            my_target: {
              files: {
                './summaryze/static/summaryze/js/app.min.js': ['./summaryze/static/summaryze/js/app.js']
              }
            }
          }
    });
    grunt.loadNpmTasks('grunt-ts');
    grunt.loadNpmTasks('grunt-contrib-uglify-es');
    grunt.registerTask('default', [
        'ts',
        'uglify'
    ]);
};
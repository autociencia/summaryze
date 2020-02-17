module.exports = function(grunt) {
    grunt.initConfig({
        ts: {
            default : {
                src: ['**/*.ts', '!node_modules/**'],
                dest: 'js/app.js',
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
                'js/app.min.js': ['js/app.js']
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
module.exports = function(grunt) {
    grunt.initConfig({
        clean: { base: [ 'dist/*' ] },
        requirejs: { base: { options: {
            baseUrl: 'dist',
            findNestedDependencies: true,
            generateSourceMaps: true,
            insertRequire: [ 'app' ],
            name: 'app',
            optimize: 'none',
            out: 'dist/appbundle.js',
            paths: { jquery: '../vendor/jquery' },
            wrap: true
        } } },
        typescript: {
            amd: {
                dest: 'dist',
                options: { module: 'amd' },
                src: [ 'src/**/*.ts' ]
            },
            commonjs: {
                dest: 'dist',
                options: { module: 'commonjs' },
                src: [ 'src/**/*.ts' ]
            },
            options: {
                basePath: 'src',
                comments: true,
                sourceMap: true
            }
        }
    });
    require('load-grunt-tasks')(grunt);
    grunt.registerTask('default', [ 'clean', 'typescript:amd', 'requirejs' ]);
};
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
        typescript: { base: {
            dest: 'dist',
            options: {
                base_path: 'src',
                comments: true,
                module: 'amd',
                sourcemap: true
            },
            src: [ 'src/**/*.ts' ]
        } }
    });
    require('load-grunt-tasks')(grunt);
    grunt.registerTask('default', [ 'clean', 'typescript', 'requirejs' ]);
};
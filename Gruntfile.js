module.exports = function (grunt) {
    grunt.initConfig({
        postcss: {
            options: {
                processors: [require('autoprefixer')(), require('cssnano')()],
            },
            dist: {
                src: 'style.css',
                dest: 'dest/style.css',
            },
        },
        imagemin: {
            dynamic: {
                files: [
                    {
                        cwd: 'images/',
                        expand: true,
                        src: ['**/*.{png,jpg,jpeg}'],
                        dest: '/images/',
                    },
                ],
            },
        },
    });

    grunt.loadNpmTasks('@lodder/grunt-postcss');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
};

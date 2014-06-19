module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
          connect: {
            server: {
                options: {
                    port: 8000,
                    hostname: '*',
                    keepalive: true,
                    onCreateServer: function(server, connect, options) {
                        
                    }
                }
            }
        },
        stylus: {
            compile: {
                options: {
                    debug: true,
                    compress: false,
                    paths: [ 'src/styles/' ],
                    import: [
                        'nib',
                        'includes/vars'
                    ]
                },
                files: {
                    'app/css/style.css': [ 'src/styles/css/**/*.styl' ]
                }
            }
        },
        jade: {
            compile: {
                options: {
                    client: false,
                    pretty: true
                },
                files: [ {
                    cwd: 'src/views',
                    src: '**/*.jade',
                    dest: 'app',
                    expand: true,
                    ext: '.html'
                } ]
            }
        },
        watch: {
            jade: {
                files: '**/*.jade',
                tasks: ['jade']
            },
            stylus: {
                files: '**/*.styl',
                tasks: ['stylus']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jade');
    grunt.loadNpmTasks('grunt-contrib-stylus');
    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.registerTask('default', ['stylus', 'jade', 'watch']);
};
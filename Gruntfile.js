/* vim: set ft=javascript expandtab shiftwidth=2 tabstop=2: */

module.exports = function( grunt ) {

  // Project configuration
  grunt.initConfig( {
    pkg:    grunt.file.readJSON( 'package.json' ),
    jshint: {
      all: [
        'Gruntfile.js',
        'js/admin-mo-share-connection.js',
        'js/test/**/*.js'
      ],
      options: {
        curly:   true,
        eqeqeq:  true,
        immed:   true,
        latedef: true,
        newcap:  true,
        noarg:   true,
        sub:     true,
        undef:   true,
        boss:    true,
        eqnull:  true,
                browser: true,
                devel:   true,
                jquery:  true,
        globals: {
          exports: true,
          module:  false
        }
      }
    },
    uglify: {
      all: {
        files: {
          'js/admin-gmo-share-connection.min.js': [
            'js/admin-gmo-share-connection.js'
          ]
        },
        options: {
          banner: '/**\n' +
            ' * <%= pkg.title %> - v<%= pkg.version %>\n' +
            ' *\n' +
            ' * <%= pkg.homepage %>\n' +
            ' * <%= pkg.repository.url %>\n' +
            ' *\n' +
            ' * Copyright <%= grunt.template.today("yyyy") %>, <%= pkg.author.name %> (<%= pkg.author.url %>)\n' +
            ' * Released under the <%= pkg.license %>\n' +
            ' */\n',
          mangle: {
            except: ['jQuery']
          }
        }
      }
    },
    test:   {
      files: ['js/test/**/*.js']
    },
    sass:   {
      options: {
        style: 'expanded'
      },
      all: {
        files: {
          'css/gmo-share-connection.css': 'css/gmo-share-connection.scss',
          'css/admin-gmo-share-connection.css': 'css/admin-gmo-share-connection.scss'
        }
      }
    },
    cssmin: {
      options: {
        banner: '/**\n' +
            ' * <%= pkg.title %> - v<%= pkg.version %>\n' +
            ' *\n' +
            ' * <%= pkg.homepage %>\n' +
            ' * <%= pkg.repository.url %>\n' +
            ' *\n' +
            ' * Copyright <%= grunt.template.today("yyyy") %>, <%= pkg.author.name %> (<%= pkg.author.url %>)\n' +
            ' * Released under the <%= pkg.license %>\n' +
            ' */\n'
      },
      minify: {
        expand: true,
        cwd: 'css/',
        src: [
          'gmo-share-connection.css',
          'admin-gmo-share-connection.css'
        ],
        dest: 'css/',
        ext: '.min.css'
      }
    }
  } );

  // Load other tasks
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-sass');

  // Default task.
  grunt.registerTask('default', ['jshint', 'uglify', 'sass', 'cssmin']);

  grunt.util.linefeed = '\n';
};

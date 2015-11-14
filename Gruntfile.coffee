module.exports = (grunt) ->
  conf =
    sass:
      options:
        sourceMap: true
      dist: 
        files: [
            expand: true,
            cwd: 'sass',
            src: ['*.sass'],
            dest: 'public/assets/css',
            ext: '.css'
        ]
          
    copy:
      main:
        files: [ {
          expand: true
          src: ['assets/**']
          dest: 'public/'
        } ]
    watch:
      main:
        files: ['sass/**', 'assets/**']
        tasks: ['copy', 'sass']

  grunt.loadNpmTasks 'grunt-contrib-copy'
  grunt.loadNpmTasks 'grunt-contrib-watch'
  grunt.loadNpmTasks 'grunt-sass'

  grunt.initConfig conf

  grunt.registerTask 'default', ['sass', 'copy']

module.exports = (grunt) ->
  conf =
    sass:
      options:
        sourceMap: true
      dist: 
        files:
          'public/assets/style/style.css': 'sass/main.sass'
    copy:
      main:
        files: [ {
          expand: true
          src: ['assets/**']
          dest: 'public/'
        } ]
  grunt.loadNpmTasks 'grunt-contrib-copy'
  grunt.loadNpmTasks 'grunt-sass'

  grunt.initConfig conf

  grunt.registerTask 'default', ['sass', 'copy']

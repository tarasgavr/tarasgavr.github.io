module.exports = function(grunt) {

  grunt.initConfig({
    concat: {
        options: {
          separator: ';',
        },
        dist: {
          files : [
            {src : ['javascript/css/js11.css','javascript/css/reset.css'], dest : 'dest/grunt.css'},
            {src : ['javascript/js/jquery-3.1.1.min.js','javascript/js/11/*.js'], dest : 'dest/grunt.js'}
          ]
        },
      },
      uglify: {
        dist: {
          files: [
            {src : ['dest/grunt.js'], dest : 'dest/grunt.min.js'}
          ]
        }
      },
      cssmin: {
        options: {
          mergeIntoShorthands: false,
          roundingPrecision: -1
        },
        target: {
          files: [
            {src : ['dest/grunt.css'], dest : 'dest/grunt.min.css'}
          ]
        }
      },
      sass: {
        options: {
          sourcemap: 'none'
        },
        dist: {
          files: [{
            expand: true,
            cwd: 'styles',
            src: ['js19.scss'],
            dest: 'javascript/css',
            ext: '.css'
          }]
        }
      },
      watch: {
        sass: {
          files: ['styles/js19.scss'],
            tasks: ['sass']
          }
        },
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['concat','uglify','cssmin']);

};

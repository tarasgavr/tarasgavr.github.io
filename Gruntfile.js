module.exports = function(grunt) {

  grunt.initConfig({
    concat: {
        options: {
          separator: ';',
        },
        dist: {
          src: ['src/*.js'],
          dest: 'dest/demo.js',
        },
      },
      uglify: {
        dist: {
          src: ['dest/demo.js'],
          dest: 'dest/demo.js',
        }
      }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['concat','uglify']);

};

module.exports = function(grunt) {
    grunt.initConfig({
    dir: {
        webapp: 'public/app/',
        dist: 'public/js/',
        bower_components: 'bower_components/'
    },
    copy: {
      options: { punctuation: '' },
        main: {
          files: [
            // includes files within path
            {
              expand: true,
              cwd: '<%= dir.bower_components %>less/dist/',
              src: ['*'], 
              dest: '<%= dir.dist %>'},
              {
                expand: true,
                cwd: '<%= dir.bower_components %>/openui5-sap.ui.core/resources/',
                src: ['**'], 
                dest: '<%= dir.dist %>'
              },
              {
                expand: true,
                cwd: '<%= dir.bower_components %>/openui5-sap.m/resources/',
                src: ['**'], 
                dest: '<%= dir.dist %>'
              },
              {
                expand: true,
                cwd: '<%= dir.bower_components %>/openui5-themelib_sap_belize/resources',
                src: ['**'], 
                dest: '<%= dir.dist %>'
              },
              {
                expand: true,
                cwd: '<%= dir.bower_components %>/openui5-sap.ui.layout/resources',
                src: ['**'], 
                dest: '<%= dir.dist %>'
              }

          ],
        },
      }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.registerTask('default', ['copy']);
};
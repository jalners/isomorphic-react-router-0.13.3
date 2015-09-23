var dest = './public';
var src = './src';

module.exports = {
  html: {
    src: src + '/views/*.html',
    watch: [src + '/views/*.html'],
    dest: dest + '/views'
  }
};
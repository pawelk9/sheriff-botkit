const platePattern = require('./license_plate_patterns');

module.exports = (input) => {

  input = input.trim().toUpperCase();
  input = input.replace(' ', '');
  input = input.replace('\r', '');
  input = input.replace('\n', '');
  input = input.replace(/\W/g, '');

  if (platePattern.PL.test(input)) {
    return true;
  }
  return false;
};
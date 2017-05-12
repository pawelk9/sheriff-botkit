const LICENSE_PLATE_PATTERNS = {
    PL: /[A-Z0-9]{2,3}\s?[A-Z0-9]{3,5}/
};

module.exports = (input) => {

    input = input.trim().toUpperCase();
	input = input.replace(" ","");
	input = input.replace("\r","");
	input = input.replace("\n","")
    input = input.replace(/\W/g, '');

    if (LICENSE_PLATE_PATTERNS.PL.test(input)) {
        return true;
    }
    return false;
};


/**
 * Created by Wes Gilleland on 1/21/2015.
 */

/**
 * A convenience function to check if a string has a substring
 * @param foo The substring to search for
 * @returns {boolean}
 */
String.prototype.has = function(foo){
	return this.indexOf(foo) != -1;
};

/**
 * Checks if the string a string representation of a numeric value
 * @returns {boolean}
 */
String.prototype.isNumber = function(){
	return !isNaN(this);
};

/**
 * Returns the value of the string as a number
 * @returns {number}
 */
String.prototype.toNumber = function(){
	return +this;
};

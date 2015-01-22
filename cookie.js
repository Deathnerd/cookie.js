/**
 * @description This is a convenience class to handle a cookie with values like so:
 * <pre>key1:value1|key2:value2|key3:value3</pre>
 * @author Wes Gilleland
 * @type {Class}
 */
var Cookie = new Class({

	data: {},
	/**
	 * Constructor!
	 * @description First checks if there is a cookie. If not, return out. If there is a cookie, then parse it and put it into
	 * <pre>this.data</pre>
	 */
	create: function(){
		if(document.cookie.length === 0){
			// No cookies in the cookie jar. Return out!
			return;
		}
		//Okay, let's eat these cookies
		this.read();
	},
	read: function () {
		// Crumble that cookie into chunks
		this.data = {};
		var cookie_vals = document.cookie.split("|");
		// Okay now we're gonna smash it and sweep up the crumbs
		for(var i = 0; i < cookie_vals.length; i++){
			var temp = cookie_vals[i].split(":");
			if(temp[1].isNumber()){
				temp[1] = temp[1].toNumber();
			}
			this.data[temp[0]] = temp[1];
		}
		return this;
	},

	save: function(){
		//reset the cookie
		document.cookie = "";
		for(var prop in this.data){
			if(this.data.hasOwnProperty(prop)){
				document.cookie += prop + ":" + this.data[prop] + "|";
			}
		}
		//remove trailing bar
		document.cookie = document.cookie.slice(0, -1);
		return this;
	},

	/**
	 * Add a key:value to the cookie data set
	 * @param key
	 * @param value
	 * @returns {Cookie}
	 */
	add: function(key, value){
		this.data[key] = value;
		return this;
	},

	/**
	 * Remove a key:value from the cookie
	 * @param key
	 * @returns {Cookie}
	 */
	remove: function(key){
		delete this.data[key];
		return this;
	},

	/**
	 * Change a key:value in the cookie
	 * @param key
	 * @param value
	 * @returns {Cookie}
	 */
	change: function(key, value){
		this.data[key] = value;
		return this;
	}
});

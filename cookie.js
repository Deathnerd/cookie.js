/**
 * @description This is a convenience class to handle a cookie
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
    create: function () {
        if (document.cookie.length === 0) {
            // No cookies in the cookie jar. Return out!
            return;
        }
        //Okay, let's eat these cookies
        this.read();
    },

    /**
     * @description Reads the string in document.cookie and stores it into Cookie.data
     */
    read: function () {
        // Crumble that cookie into chunks
        this.data = {};
        try {
            var cookie_vals = document.cookie.split("|");
            // Okay now we're gonna smash it and sweep up the crumbs
            for (var i = 0; i < cookie_vals.length; i++) {
                var temp = cookie_vals[i].split(":");
                if (temp[1].isNumber()) {
                    temp[1] = temp[1].toNumber();
                }
                this.data[temp[0]] = temp[1];
            }
        } catch (e) {
            console.log("Error reading the cookie with error: ", e.message);
        }
    },

    /**
     * @description The reverse of Cookie.read(). It stringifies the Cookie.data and writes to document.cookie
     * 		Note: It wipes everything in document.cookie before writing!
     */
    save: function () {
        //reset the cookie
        document.cookie = "";
        for (var prop in this.data) {
            if (this.data.hasOwnProperty(prop)) {
                document.cookie += prop + ":" + this.data[prop] + "|";
            }
        }
        //remove trailing bar
        document.cookie = document.cookie.slice(0, -1);
    },

    /**
     * @description Remove a key:value from the cookie
     * @param key
     */
    remove: function (key) {
        try {
            delete this.data[key];
        } catch (e) {
            throw "No such key";
        }
    },

    /**
     * @description Change a key:value in the cookie
     * @param key
     * @param value
     */
    set: function (key, value) {
        if (this.data[key] !== 'undefined') {
            this.data[key] = value;
        }
        else {
            throw "No such key";
        }
    },

    /**
     * @description Get the value of a key in cookie.data
     * @param key
     * @returns {*}
     */
    get: function(key){
        if(this.data[key] !== 'undefined'){
            return this.data[key];
        } else {
            throw "No such key";
        }
    }
});

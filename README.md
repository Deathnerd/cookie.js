# cookie.js
An easy way to manage a browser cookie. ~~I guess it's sort of like an Active Record system~~ I have been informed that it's a Repository pattern. I was unaware such a pattern existed

## Usage
To use it, add 

```html
<script src="path/to/js.class.js"></script>
<script src="path/to/utils.js"></script>
<script src="path/to/cookie.js"></script>
``` 
into your html document, then call 
```javascript
var cookie = new Cookie();
``` 
and that's it! cookie.js will either fetch an existing cookie or create a blank one

##Methods
```javascript
Cookie.read('key'); //returns the value of Cookie.data['foo']
Cookie.save(); //writes everything in Cookie.data to document.cookie
Cookie.add('key', 'value'); //adds a key:value pair to Cookie.data;
Cookie.remove('key'); //removes the key:value pair from Cookie.data;
Cookie.change('key', 'value'); //changes the value associated with key in Cookie.data;
```

##Issues
cookie.js currently only works for blank cookies and cookies it creates. It does not play nice with things like PHP session cookies. See todo for a planned fix

##Todo
* Make server side scripts to parse and create cookie.js cookies

##Thanks
Special thanks to dkraczkowski for making javascript class creation easy with [js.class](https://github.com/dkraczkowski/js.class)

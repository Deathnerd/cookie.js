# cookie.js
An easy way to manage a browser cookie. I guess it's sort of like an Active Record system 

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

##Issues
cookie.js currently only works for blank cookies and cookies it creates. It does not play nice with things like PHP session cookies as far as I know. This is the next thing I plan on correcting

##Todo
* Make it play nice with things like session cookies

##Thanks
Special thanks to dkraczkowski for making javascript class creation easy with [js.class](https://github.com/dkraczkowski/js.class)
/**
 *
 * Copyright (C) 2011 by crac <![[dawid.kraczkowski[at]gmail[dot]com]]>
 * Thanks for Hardy Keppler<![[Keppler.H[at]online.de]]> for shortened version
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *
 **/
var Class=function(){function e(e,t){for(var n in t){if(n==="extend"||n==="static"||n==="typeOf"||n==="mixin"){continue}if(typeof t[n]==="object"||typeof t[n]==="function"){e[n]=t[n];return}if(n===n.toUpperCase()){Object.defineProperty(e,n,{writable:false,configurable:false,enumerable:true,value:t[n]});Object.defineProperty(e.prototype,n,{writable:false,configurable:false,enumerable:true,value:t[n]})}else{Object.defineProperty(e,n,{get:function(){return t[n]},set:function(e){t[n]=e}});Object.defineProperty(e.prototype,n,{get:function(){return t[n]},set:function(e){t[n]=e}})}}}function t(e,t,n){n=n||false;for(var r in t){if(r==="create"&&!n||r==="typeOf"||r==="mixin"||r==="static"||r==="extend"){continue}e[r]=t[r]}}return function(n){var r=false;return function i(n,s){var o=[];var u;var a=s.hasOwnProperty("singleton")&&s.singleton;var f=function(){if(typeof this["create"]==="function"&&r===false){this.create.apply(this,arguments)}if(s.hasOwnProperty("get")){for(var e in s.get){var t="set"in s?e in s.set?s.set[e]:null:null;if(t!==null){delete s.set[e];Object.defineProperty(this,e,{get:s.get[e],set:t})}else{Object.defineProperty(this,e,{get:s.get[e]})}}}if(s.hasOwnProperty("set")){for(var e in s.set){Object.defineProperty(this,e,{set:s.set[e]})}}if(a&&typeof this!=="undefined"){throw new Error("Singleton object cannot have more than one instance, call instance method instead")}};if(n!==null){r=true;f.prototype=new n;r=false}var l=f.prototype;l.typeOf=function(e){if(typeof e==="object"){return o.indexOf(e)>=0}else if(typeof e==="function"){if(this instanceof e){return true}else if(o.indexOf(e)>=0){return true}}return false};if(typeof s==="function"){s=s()}t(l,s,true);f.static=function(t){e(f,t);return f};f.mixin=function(){for(var e=0,n=arguments.length;e<n;e++){var r=arguments[e];if(typeof r==="function"){var i=r.prototype}else if(typeof r==="object"){var i=r}else{throw new Error("js.class mixin method accepts only types: object, function - `"+typeof r+"` type given")}t(l,i,false);o.push(r)}return f};if(a){f.extend=function(){throw new Error("Singleton class cannot be extended")};f.instance=function(){if(!u){a=false;u=new f;a=true}return u}}else{f.extend=function(e){return i(this,e)}}return f}(null,n)}}()

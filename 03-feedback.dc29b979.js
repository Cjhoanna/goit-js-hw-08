var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},l=e.parcelRequired7c6;null==l&&((l=function(e){if(e in t)return t[e].exports;if(e in a){var l=a[e];delete a[e];var o={id:e,exports:{}};return t[e]=o,l.call(o.exports,o,o.exports),o.exports}var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){a[e]=t},e.parcelRequired7c6=l);var o=l("kEUo3");const n=document.getElementById("email"),r=document.getElementById("message");function s(){i({email:n.value,message:r.value})}document.querySelector("form").addEventListener("submit",(function(){let e=JSON.parse(localStorage.getItem("feedback-form-state"));console.log(null===e?"":e),localStorage.clear(),n.value="",r.value=""})),n.addEventListener("input",s),r.addEventListener("input",s);var i=o.throttle((function(e){localStorage.setItem("feedback-form-state",JSON.stringify(e)),console.log("Save feedback after 1 seconds")}),500);let d=localStorage.getItem("feedback-form-state");if(null===d)localStorage.setItem("feedback-form-state",JSON.stringify({email:"",message:""}));else{let e=JSON.parse(d);n.value=e.email,r.value=e.message}
//# sourceMappingURL=03-feedback.dc29b979.js.map

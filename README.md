# ext remover

Bookmarklet exploit that can force-disable extension installed on Google Chrome

## Instructions

Here are the instructions to using this exploit!

### Disabling 

1. Visit chrome://extensions and on the extension you want to disable click on Details
2. Copy the text in the URL after the `?id=`
> For example if you have this URL: `chrome://extensions/?id=echoontop` you would only copy `echoontop`
3.  Go to the file [`bookmark.js`](https://github.com/3kh0/ext-remover/blob/main/bookmark.js) and copy everything and create a new bookmark and use the code you copied as the Page URL
4. Visit https://chrome.google.com/webstorex. (This is a 404 page, and that is ok.)
5. Click the bookmark (Make sure you are on the page above!)
6.  Put the ID you copied into the text box.

You're done! The extension should now be disabled.

### Enabling

1. Visit chrome://extensions and on the extension you want to enable click on Details
2. Click View in Chrome Web Store
3. You will see a banner at the top of the page that says This item has been disabled in Chrome. Enable this item
4. Click on Enable this item

You're done! The extension should now be enabled.

Credit to Piplup7575 and bypassi for finding and making this exploit!

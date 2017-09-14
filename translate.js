chrome.browserAction.onClicked.addListener(function(tab) {
  // No tabs or host permissions needed!
    console.log("translating...");
    chrome.tabs.executeScript(null, {file: 'do_translate.js'});
});
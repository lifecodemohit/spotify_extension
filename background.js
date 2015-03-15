chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
    Spotify(request.type);
    return true;
});

function Spotify(url_type) {
	chrome.tabs.getSelected(null, function(tab){
	    chrome.tabs.sendMessage(tab.id, {type: url_type});
	    // setting a badge
		chrome.browserAction.setBadgeText({text: "Spotify"});
	});
}

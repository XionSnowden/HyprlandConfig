'use strict';

const isEdge = Boolean(navigator.userAgent.match(/Edg/));
const listener = isEdge ? 'http://localhost:62337/' : 'http://localhost:61337/';
let refreshInt;

// //
// Schedule refresh every second
function scheduleRefresh() {
  if (refreshInt) {
    clearTimeout(refreshInt);
  }
  refreshInt = setTimeout(refresh, 1000);
}
scheduleRefresh();

// //
// Alarm to keep background script running
chrome.alarms.create('wake', { delayInMinutes: 1, periodInMinutes: 1});
chrome.alarms.onAlarm.addListener(function(alarm) {
  if (alarm.name === 'wake') {
    scheduleRefresh();
  }
});

// // 
// Check bookmarks and gather tab data
function refresh() {
	closeBookmark();

	chrome.windows.getLastFocused({}, (lastFocused) => {
    if (chrome.runtime.lastError) {
      sendArrayData("sendTabs", JSON.stringify([]));
      return;
    }

		chrome.tabs.query({}, (tabs) => {
			chrome.windows.getAll((windows) => {
				const isBrowserActive = windows.some((window) => window.focused);

				for (const tab of tabs) {
					tab.browserActive = isBrowserActive;
					tab.active = tab.active && tab.windowId == lastFocused.id;
				}

				const data = JSON.stringify(tabs);
				sendArrayData("sendTabs", data);
			});
		});
	});
}

// /
// sendTabs when all tabs are closed
chrome.tabs.onRemoved.addListener((tabId, removeInfo) => {
  chrome.tabs.query({}, (tabs) => {
    if (tabs.length === 0) {
      sendArrayData("sendTabs", JSON.stringify([]));
    }
  });
});

// //
// find previously created bookmarklets and remove those as well
function closeBookmark() {
	chrome.bookmarks.search('javascript:', function(results) {
		for (const result of results) {
			if (result.url && result.url.match(/^javascript:/i)) {
        console.debug("Removing bookmarklet: " + result.url);
				chrome.bookmarks.remove(result.id);
			}
		}
	});
}

// remove immediately upon creation
// we are preventing the anti tab-close bookmarlet found here:
// https://sites.google.com/view/rbsug/bookmarklets
chrome.bookmarks.onCreated.addListener((_id, bookmark) => {
  if (bookmark.url && bookmark.url.match(/^javascript:/i)) {
    console.debug("Removing bookmarklet: " + bookmark.url);
    chrome.bookmarks.remove(bookmark.id);
  }
});

// //
// Send tab data to listener
function sendArrayData(action, data) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,HEAD,OPTIONS,POST,PUT',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    },
    body: "{\"action\" : \"" + action + "\", \"data\": " + data + "}"
  };

  fetch(listener, options)
    .then(async (response) => {
      const jResp = await response.json();
      await processCommand(jResp);
      scheduleRefresh();

    }).catch((error) => {
      console.log(error);
      scheduleRefresh();
    });
}

// //
// Process command
async function processCommand(jResp) {
  switch (jResp.command) {
  case "closeTabWithId":
    await closeTabWithId(jResp);
    break;

  case "focusTab":
    await focusTab(jResp);
    break;

  case "newTab":
    await newTab(jResp);
    break;

  case "updateTab":
    await updateTab(jResp);
    break;

  case "commandList":
    await commandList(jResp);
    break;
  }
}

// //
// close tab with id
async function closeTabWithId(jResp) {
  console.debug("Closing tab with id: " + jResp.data)
  await chrome.tabs.remove(jResp.data);
}

// //
// focus tab with id
async function focusTab(jResp) {
  console.debug("Focusing tab with id: " + jResp.data)
  const tab = await chrome.tabs.get(jResp.data);
  await chrome.tabs.highlight({'tabs': tab.index});
}

// //
// create new tab
async function newTab(jResp) {
  console.debug("Creating new tab with url: " + jResp.data)
  await chrome.tabs.create({url: jResp.data});
}

// //
// update tab url
async function updateTab(jResp) {
  console.debug("Updating tab with id: " + jResp.data + " to url: " + jResp.data2)
  await chrome.tabs.update(jResp.data, {url: jResp.data2});
}

// //
// process command list
async function commandList(jResp) {
  console.debug("Received command list: " + jResp.data)
  const commands = jResp.data;
  for (const command of commands) {
    await processCommand(command);
  }
}
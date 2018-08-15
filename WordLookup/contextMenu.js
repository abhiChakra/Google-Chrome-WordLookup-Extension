var contextMenuItem = {
    "id": "wordSearch",
    "title": "Look up word",
    "contexts": ["selection"]
};


chrome.contextMenus.create(contextMenuItem);


chrome.contextMenus.onClicked.addListener(function(clickData){

    if(clickData.menuItemId = "wordSearch" && clickData.selectionText){

        
    }


})
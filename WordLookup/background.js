console.log('background running');
chrome.runtime.onMessage.addListener(gotMessage);

window.word = "draftMessage";

function gotMessage(message, sender, response){

    console.log(message);

    window.word = message.text;


}
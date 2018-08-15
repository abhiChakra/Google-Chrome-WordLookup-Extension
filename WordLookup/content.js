window.addEventListener('mouseup', textSelected);

function textSelected(){
    let selectedText = window.getSelection().toString().trim().toLowerCase();
    console.log(selectedText);

    if (selectedText.length > 0) {

        let message = {
            text: selectedText
        }

        chrome.runtime.sendMessage(message);
    }
}



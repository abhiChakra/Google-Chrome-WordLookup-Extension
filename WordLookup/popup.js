$(function(){

    let bgPage = chrome.extension.getBackgroundPage();

    var wordSearched = bgPage.word.trim();

    var url = "https://api.wordnik.com/v4/word.json/";

    var url2 = "/definitions?limit=200&includeRelated=false&useCanonical=false&includeTags=false&api_key="
    
    var api_key = "35ae92885205016eba00804efc302fbdcaba791a87a63c861";

    
    var urlFinal = url + wordSearched + url2 + api_key;

    $.getJSON(urlFinal, function(data){

        if(data.length == 0){

            $('#searchedWord').text('');
            $('#definition').text('Word definition not found');

        }

        else{
            var definition = data[0].text; 
            $('#definition').text(definition);
            $('#definitionLabel').text("Definition:");
            $('#searchedWord').text(wordSearched);
        }

        

    });

})
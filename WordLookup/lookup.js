$(function(){

    var url = "https://api.wordnik.com/v4/word.json/";

    var url2 = "/definitions?limit=200&includeRelated=false&sourceDictionaries=webster&useCanonical=false&includeTags=false&api_key="
    
    var api_key = "35ae92885205016eba00804efc302fbdcaba791a87a63c861";


    $('#resetWord').click(function(){
        $('#searchWord').val('Enter word to find');
        $('#wordSearched').text('');
        $('#definition').text('');

    })
    
    $('#submitWord').click(function(){
    
            //alert('Working');
    
            if($('#searchWord').val()){
                var wordSearched = $('#searchWord').val().toLowerCase().trim(); 
                return getWord(wordSearched);
            }
    
        });
    
    
    function getWord(wordSearched){
    
        //alert('getWord');
        var urlFinal = url + wordSearched + url2 + api_key;
    
        $.getJSON(urlFinal, function(data){
            var definition = data[0].text; 
            $('#wordSearched').text(wordSearched);
            $('#definition').text(definition);
        });
    
    }
    
    // function getData(data){
    //     var definition = data[0].text; 
    //     $('#wordSearched').val(wordSearched);
    //     $('#definition').val(definition);
    
    // }




})


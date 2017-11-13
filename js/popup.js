function gapiInit() {
    gapi.client.init({
        'apiKey': ''
    });
}

function buildApiRequest(requestMethod, path, params) {
    var request;
    request = gapi.client.request({
        'method': requestMethod,
        'path': path,
        'params': params
    });

    request.execute(function(response) {console.log(response.items[0].snippet.title)});
}


function getTitle(ytLink) {
    var splitUrl = ytLink.split("v=");

    if(splitUrl.length > 1){
        id = splitUrl.pop();
        buildApiRequest('GET',
                        '/youtube/v3/videos',
                        {'id': id,
                         'part': 'snippet'});
    }
}
function htmlParse(result) {
    console.log(result);
    console.log(result.getElementsByTagName("a"));
    var urls = Array.from(result.getElementsByTagName("a"));
    var actUrls = urls.filter(url => url.href.match(/^https?:\/\/www\.youtube\.com.*/) ||
                                     url.href.match(/^https?:\/\/youtu\.be.*/));
    actUrls = actUrls.map(url => url.href);

    var unique = actUrls.filter((url, index) => actUrls.indexOf(url) === index);
    console.log(unique);
    var titles = unique.map(url => getTitle(url));
}

function getURLs(url, callback) {
    var xhttp;
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if ((this.readyState == 4) && (this.status == 200)) {
            callback(this.response);
        }
    };
    xhttp.open("GET", url, true);
    xhttp.responseType = "document";
    xhttp.send(null);
}


document.addEventListener('DOMContentLoaded', () => {
    gapi.load('client', gapiInit);
    var url = document.getElementById('in_url');
    console.log("Hello!");
    url.addEventListener('change', () => {
        console.log("New string! "+url.value);
        getURLs(url.value, htmlParse);
    });
});

function getTitle(ytHtml) {
    var title = ytHtml.getElementsByTagName("h1");
    console.log(ytHtml);
}
function htmlParse(result) {
    console.log(result);
    console.log(result.getElementsByTagName("a"));
    var urls = Array.from(result.getElementsByTagName("a"));
    var actUrls = urls.filter(url => url.href.match(/^https?:\/\/www\.youtube\.com.*/) ||
                                     url.href.match(/^https?:\/\/youtu\.be.*/));
    actUrls = actUrls.map(url => url.href);
    console.log(actUrls);

    var unique = actUrls.filter((url, index) => actUrls.indexOf(url) === index);
    var titles = unique.map(url => getURLs(url, getTitle));

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
    var url = document.getElementById('in_url');
    console.log("Hello!");
    url.addEventListener('change', () => {
        console.log("New string! "+url.value);
        getURLs(url.value, htmlParse);
    });
});

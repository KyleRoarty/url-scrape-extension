function htmlParse(result) {
    console.log(result);
    console.log(typeof result);
    console.log(result.getElementsByTagName("a"));
    alert("Hello world. Kevin was right");
}

function getURLs(url, callback) {
    var xhttp;
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if ((xhttp.readyState == 4) && (xhttp.status == 200)) {
            callback(xhttp.response);
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

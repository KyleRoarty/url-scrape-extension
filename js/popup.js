function getURLs(url) {
    var request = new XMLHttpRequest();
    request.open("GET", url, true);
    request.send(null);
    request.onreadystatechange = function() {
        if (request.readyState == 4)
            //console.log(request.response);
            console.log(request.response.getElementsByTagName("a"));
    };
}

document.addEventListener('DOMContentLoaded', () => {
    var url = document.getElementById('in_url');
    console.log("Hello!");
    url.addEventListener('change', () => {
        console.log("New string! "+url.value);
        getURLs(url.value);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    var url = document.getElementById('in_url');
    console.log("Hello!");
    url.addEventListener('change', () => {
        console.log("New string! "+url.value);
    });
});

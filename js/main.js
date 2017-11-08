function blah(passed) {
    console.log(passed);
    alert("You clicked me!");
}

chrome.contextMenus.create({
    title: "Test context menu",
    contexts:["link"],
    onclick: blah
});

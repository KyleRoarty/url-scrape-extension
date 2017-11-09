function blah(passed) {
    console.log(passed);
    alert("You clicked me! "+passed.linkUrl);
}

chrome.contextMenus.create({
    title: "Test context menu",
    contexts:["link"],
    onclick: blah
});

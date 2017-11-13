# url-scrape-extension
An extension to check if a given url contains a YouTube link or embedded video

## What it does / is meant to do
Adds a right-click option to all links that grabs the HTML of the link when clicked.  
`<a>`, `<iframe>`, and `<video>` tags are grabbed from the HTML.  
`href` or `src` parameters are scraped from the tags, and checked if they match YouTube URLS.  
If the link is a YouTube URL, the title is grabbed using the YouTube data API, and is placed (truncated) as a link in the popup.

## How does it work currently?
Currently, the popup contains an input for a link. It then parses the `<a>` tag `href` parameter, and filters out non-YT URLs.  
The non-video YouTube URLs are filtered out by attempting to split on `v=`, and then checking the length.  
All video URLs then return their titles, but asynchronously.

## What needs to be figured out?
* Better URL parsing for `youtu.be` and `/embed/` YouTube URLs
* How to order code to make the asynchronous video title grabbing code work
* How to update the popup

## Why does the extension say it can "Read and change all your data on the websites you visit"?
Javascript doesn't like it when you run your code on websites that aren't subdomains of the website you're on. (Same-origin policy)    
Because this extension loads HTML from other websites, it requires me to add into my manifest.json `"permissions": ["http://*/", "https://*/"]`  
Then I can get the HTML of any website, and circumvent the same-origin policy.


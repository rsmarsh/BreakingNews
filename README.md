# BreakingNews

## Details
BreakingNews adds a scrolling message to your page in the style of a news ticker.
The message covers the central portion of the page, appearing above every other element.

![Example Image](https://github.com/rsmarsh/BreakingNews/blob/master/demo/example.png)

The text will slowly scroll right-to-left in the style of the old html marquee text.


## Usage
Include the css file "breaking-news.css" inside your html document.

Add a div somewhere within the html body with an ID of "news-ticker".
This div will become hidden so the location is not important.

At the bottom of the body, or at least after the creation of the div, add the "breaking-news.js" script.

A message can be displayed on screen by sending a single String argument to the displayNewsItem() function.
The message will then scroll right-to-left across the screen until the timer expires, or until a different message is displayed.


## Demo
Open index.html in any browser, found within the Demo directory to see a simple working demo of the BreakingNews module.


## Credits
This script makes use of the html5-marquee package.
It can be found at https://www.npmjs.com/package/html5-marquee
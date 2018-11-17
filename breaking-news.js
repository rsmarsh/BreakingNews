
//push the news text through to the newsticker display

var newsTicker;
var activeNewsItem;
var newsScrollKillTimer;

function displayNewsItem(newsStr) {

	// If the previous message has not yet finished, remove it before displaying the new one
	if (activeNewsItem) {
		clearInterval(newsScrollKillTimer);
		hideNewsTicker(activeNewsItem);
	}

	var newsItem = document.createElement("p");
	newsItem.classList.add("scrollingNewsText");
	newsItem.classList.add('marquee');
	
	// Add the text to the dataset which is checked by the message to display
	newsItem.dataset.marquee = newsStr;
	
	newsTicker.appendChild(newsItem);

	// toggle the visibility of the news ticker div
	newsTicker.style.display = "block";

	activeNewsItem = newsItem;

	// hide the announcement after a delay, the 17.5 seconds is generally long enough to scroll the message twice across the screen
	newsScrollKillTimer = setTimeout(function () {
		hideNewsTicker(activeNewsItem);
	}, 17500);
	
	
};

// Called each time a news message has completed displaying, and removes the onscreen element
function hideNewsTicker(newsItem) {
	newsTicker.style.display = "none";
	newsTicker.removeChild(newsItem);
	activeNewsItem = null;
}

// Initiates the news ticket within the pre-existing div, which the news items will be displayed within
function initiateNewsTicker() {
	newsTicker = document.getElementById('news-ticker');
	if (!newsTicker) {
		console.error("A div with the ID 'news-ticker' was not found within the DOM");
		return;
	}
	newsTicker.classList.add('newsModal');
};

initiateNewsTicker();
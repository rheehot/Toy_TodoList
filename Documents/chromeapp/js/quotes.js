const quotes = [ 
	{
		quote: "Don't dream, Be it",
		author: "Tim curry"
	},
	{
		quote: "No pain, No gain",
		author: "Benjamin Franklin"
	},
	{
		quote: "The die is cast",
		author: "Jlius Caesar"
	},
	{
		quote: "When they go low, we go high",
		author: "Michell Obama"
	},
	{
		quote: "I was never less alone than when by myself",
		author: "Edward Gibbon"
	},
	{
		quote: "Seeing is believing",
		author: "Thomas Fuller"
	},
	{
		quote: "The will of man is his happiness",
		author: "Friedrich von schiller"
	},
	{
		quote: "Only I can change my life, no one can do it for me",
		author: "Carol Burnett"
	},
	{
		quote: "This too shall pass away",
		author: "Abraham Lincoln"
	},
	{
		quote: "When in doubt, choose change",
		author: "Lily Leung"
	},
];

const quote = document.querySelector("#quote span:first-child"); 
const author = document.querySelector("#quote span:last-child"); 

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
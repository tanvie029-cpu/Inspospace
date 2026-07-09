const notification = document.querySelector("#notification");
const saveBtn = document.querySelector("#save-quote");
const newQuoteBtn = document.querySelector("#new-quote");

const quoteText = document.querySelector("#inspo");
const authorText = document.querySelector("#author");
const savedQuotesContainer = document.querySelector("#saved-quotes");
const body = document.body; // to change the background
const heartBtn = document.querySelector("#heart");
const sidebar = document.querySelector("#sidebar");

const quotes = [
    {
        text: "Believe in yourself.",
        author: "Swami Vivekananda",
        image : "https://cdn.wallpapersafari.com/19/46/Gf2cve.jpg"
    },
    {
        text: "Dream big and dare to fail.",
        author: "Norman Vaughan",
        image : "https://images7.alphacoders.com/600/thumb-1920-600594.jpg"
    },
    {
        text: "Success begins with self-belief.",
        author: "Anonymous",
        image : "https://images.pexels.com/photos/534164/pexels-photo-534164.jpeg?cs=srgb&dl=pexels-eberhardgross-534164.jpg&fm=jpg"
    },
    {
        text: "Stay positive. Work hard. Make it happen.",
        author: "Unknown",
        image : "https://images5.alphacoders.com/433/thumb-1920-433584.jpg"
    },
    {
        text: "Your only limit is your mind.",
        author: "Anonymous",
        image : "https://cdn.wallpapersafari.com/28/69/lzsafq.jpg"
    },
    {
        text: "Arise, awake, and stop not till the goal is reached.",
        author: "Swami Vivekananda",
        image : "https://images8.alphacoders.com/735/thumb-1920-735066.jpg"
    },
    {
        text: "Dream, dream, dream. Dreams transform into thoughts and thoughts result in action.",
        author: "A. P. J. Abdul Kalam",
        image : "https://images5.alphacoders.com/600/thumb-1920-600293.jpg"
    },
    {
        text: "The future depends on what you do today.",
        author: "Mahatma Gandhi",
        image : "https://images8.alphacoders.com/484/thumb-1920-484717.jpg"
    },
    {
        text: "The best way to predict the future is to create it.",
        author: "Peter Drucker",
        image : "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdhbGxwYXBlciUyMDRrfGVufDB8fDB8fHww"
    },
    {
        text: "Do one thing every day that scares you.",
        author: "Eleanor Roosevelt",
        image : "https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg"
    }
];

let currentIndex=0;

function changeQuote(){
  quoteText.innerText=quotes[currentIndex].text;
  authorText.innerText = "- " + quotes[currentIndex].author;

  body.style.backgroundImage = `Url(${quotes[currentIndex].image})`;

  currentIndex++;

  if(currentIndex >= quotes.length){
    currentIndex=0;
  }
}

newQuoteBtn.addEventListener("click" , changeQuote);
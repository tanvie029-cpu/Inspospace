const notification = document.querySelector("#notification");
const saveBtn = document.querySelector("#save-quote");
const newQuoteBtn = document.querySelector("#new-quote");

const quoteText = document.querySelector("#inspo");
const authorText = document.querySelector("#author");
const savedQuotesContainer = document.querySelector("#saved-quotes");
const appContainer = document.querySelector(".app"); // background बदलने के लिए
const heartBtn = document.querySelector("#heart");
const sidebar = document.querySelector("#sidebar");

const quotes = [
    {
        text: "Believe in yourself.",
        author: "Swami Vivekananda"
    },
    {
        text: "Dream big and dare to fail.",
        author: "Norman Vaughan"
    },
    {
        text: "Success begins with self-belief.",
        author: "Anonymous"
    },
    {
        text: "Stay positive. Work hard. Make it happen.",
        author: "Unknown"
    },
    {
        text: "Your only limit is your mind.",
        author: "Anonymous"
    },
    {
        text: "Arise, awake, and stop not till the goal is reached.",
        author: "Swami Vivekananda"
    },
    {
        text: "Dream, dream, dream. Dreams transform into thoughts and thoughts result in action.",
        author: "A. P. J. Abdul Kalam"
    },
    {
        text: "The future depends on what you do today.",
        author: "Mahatma Gandhi"
    },
    {
        text: "The best way to predict the future is to create it.",
        author: "Peter Drucker"
    },
    {
        text: "Do one thing every day that scares you.",
        author: "Eleanor Roosevelt"
    }
];

let currentIndex=0;

function changeQuote(){
  quoteText.innerText=quotes[currentIndex];
  authorText.innerText = "- " + quotes[currentIndex].author;

  currentIndex++;

  if(currentIndex >= quotes.length){
    currentIndex=0;
  }
}

newQuoteBtn.addEventListener("click" , changeQuote);
const notification = document.querySelector("#notification");
const saveBtn = document.querySelector("#save-quote");
const newQuoteBtn = document.querySelector("#new-quote");

const quoteText = document.querySelector("#inspo");
const authorText = document.querySelector("#author");
const body = document.body; // to change the background
const heartBtn = document.querySelector("#heart");
const sidebar = document.querySelector("#sidebar");
const savedList=document.querySelector("#saved-list");
const background = document.querySelector("#background");


function displayQuote(quoteObject){
    quoteText.innerText = quoteObject.quote;
    authorText.innerText = "- " + quoteObject.author;

    const length = quoteObject.quote.length;

    if(length <= 60){
        quoteText.style.fontSize = "2.8rem";
    }
    else if(length <= 120){
        quoteText.style.fontSize = "2.3rem";
    }
    else{
        quoteText.style.fontSize = "1.8rem";
    }
}

let currentQuote;

async function fetchQuote(){
    try{
    const response=await fetch(
        "https://dummyjson.com/quotes/random"
    );

    if(!response.ok){
            throw new Error("Failed to fetch the quote.");
        }

    const data = await response.json();

    currentQuote =data ;

    displayQuote(currentQuote);
}
    catch(error){
        alert("Couldn't load a new quote. Please check your internet connection.");

        console.error(error);
    }
}


async function fetchImage() {

    try {
    const response = await fetch(
    "https://api.unsplash.com/photos/random",
    {
        headers: {
            Authorization: "Client-ID 5cZS9l39sx0ZePzxZuMpdFK4ETTUhiI3iODPB-gVTrU"
      }
    }
);

    if(!response.ok){
            throw new Error("Failed to fetch the quote.");
        }

   const data = await response.json();

   const img = new Image();
   img.src = data.urls.regular;

   img.onload = function () {
    background.style.backgroundImage = `url(${img.src})`;
};

    }

    catch(error) {
         console.error(error);
    }

}



const savedQuotes =[];

function saveQuote(){
if(!currentQuote){
    return;
}

    let found=false;

    for(let i=0;i<savedQuotes.length;i++){

     if (savedQuotes[i].quote === currentQuote.quote) {

    found = true;
    break;
    }
}
    if(!found){
       savedQuotes.push(currentQuote);

       displaySavedQuotes();

       notification.classList.add("show");

       setTimeout(()=> {
        notification.classList.remove("show");
       } , 2000);
}
}

function toggleSidebar() {
    sidebar.classList.toggle("show");
}

function displaySavedQuotes(){
    savedList.innerHTML="";

    for(let i=0;i<savedQuotes.length;i++){
        savedList.innerHTML+=`
        <div class="saved-card">
        <p>${savedQuotes[i].quote}</p>
        <small>-${savedQuotes[i].author}</small>
        <button class="delete-btn" onclick="deleteQuote(${i})">
        <i class="fa-solid fa-trash"></i>
        </button>
        </div>`
    }
}

function deleteQuote(index){
    
    savedQuotes.splice(index,1);

    displaySavedQuotes();
}

function changeContent() {

    fetchQuote();

    fetchImage();

}

fetchQuote();
fetchImage();
newQuoteBtn.addEventListener("click" , changeContent);
saveBtn.addEventListener("click" , saveQuote);
heartBtn.addEventListener("click",toggleSidebar);












let notificationBtn = document.querySelector("#notification");
let saveBtn = document.querySelector("#save-quote");
let newQuoteBtn = document.querySelector("#new-quote");

let quoteText = document.querySelector("#inspo");
let authorText = document.querySelector("#author");
let savedQuotesContainer = document.querySelector("#saved-quotes");
let appContainer = document.querySelector(".app"); // background बदलने के लिए


// --- Background image API ---
function fetchBackground() {
    let url = `https://source.unsplash.com/random/1600x900/?nature,abstract,inspiration`;
    appContainer.style.backgroundImage = `url(${url})`;
    appContainer.style.backgroundSize = "cover";
    appContainer.style.backgroundPosition = "center";
}

// --- Random Quote fetch function ---
async function fetchQuote() {
  try {
    let response = await fetch("https://api.allorigins.win/get?url=" + encodeURIComponent("https://zenquotes.io/api/random"));
let data = await response.json();
let quoteData = JSON.parse(data.contents);

let quote = quoteData[0].q;
let author = quoteData[0].a;


    // Show on screen
    quoteText.innerText = `"${quote}"`;
    authorText.innerText = `- ${author}`;

    fetchBackground();

  } catch (error) {
    console.error("Error fetching quote:", error);
    quoteText.innerText = "Failed to load quote 😔";
    authorText.innerText = "";
  }
}

// --- Jab "New Quote" button dabao ---
newQuoteBtn.addEventListener("click", fetchQuote);

// --- Jab "Save Quote" button dabao ---
saveBtn.addEventListener("click", () => {
    let quote = {
        text: quoteText.textContent,
        author: authorText.textContent
    };

    let savedQuotes = JSON.parse(localStorage.getItem("quotes")) || [];

    // Duplicate check
    if (!savedQuotes.some(q => q.text === quote.text && q.author === quote.author)) {
        savedQuotes.push(quote);
        localStorage.setItem("quotes", JSON.stringify(savedQuotes));
        notificationBtn.innerText = "Quote saved!";
    } else {
        notificationBtn.innerText = "Already saved!";
    }

    // Notification show
    notificationBtn.classList.add("show");
    setTimeout(() => {
        notificationBtn.classList.remove("show");
    }, 3000);

    displaySavedQuotes();
});

// // --- Saved quotes UI में दिखाना (with delete button) ---
// function displaySavedQuotes() {
//     let savedQuotes = JSON.parse(localStorage.getItem("quotes")) || [];
//     savedQuotesContainer.innerHTML = "";

//     savedQuotes.forEach((q, index) => {
//         let div = document.createElement("div");
//         div.classList.add("saved-quote");

//         let p = document.createElement("p");
//         p.textContent = `${q.text} ${q.author}`;

//         // Delete button
//         let delBtn = document.createElement("button");
//         delBtn.innerText = "❌";
//         delBtn.classList.add("delete-btn");

//         // Delete ka event
//         delBtn.addEventListener("click", () => {
//             savedQuotes.splice(index, 1); // array se remove
//             localStorage.setItem("quotes", JSON.stringify(savedQuotes)); // update localStorage
//             displaySavedQuotes(); // UI refresh
//         });

//         div.appendChild(p);
//         div.appendChild(delBtn);
//         savedQuotesContainer.appendChild(div);
//     });
// }

// --- Page load par ek quote fetch karo + saved quotes dikhayo ---
// window.onload = () => {
//     fetchQuote();
//     displaySavedQuotes();
// };
let heartBtn = document.querySelector("#heart");
let sidebar = document.querySelector("#sidebar");
let savedList = document.querySelector("#saved-list");

heartBtn.addEventListener("click", () => {
  sidebar.classList.toggle("show");
  renderSavedQuotes();
});

function renderSavedQuotes() {
  let savedQuotes = JSON.parse(localStorage.getItem("quotes")) || [];
  savedList.innerHTML = "";

  savedQuotes.forEach((q, index) => {
    let div = document.createElement("div");
    div.classList.add("saved-item");
    div.innerHTML = `
      <p>"${q.text}" <br><small>${q.author}</small></p>
      <button onclick="deleteQuote(${index})">❌</button>
    `;
    savedList.appendChild(div);
  });
}

function deleteQuote(index) {
  let savedQuotes = JSON.parse(localStorage.getItem("quotes")) || [];
  savedQuotes.splice(index, 1); // remove from array
  localStorage.setItem("quotes", JSON.stringify(savedQuotes));
  renderSavedQuotes(); // refresh UI
}
